import { supabase } from "@/integrations/supabase/client";

const ICE_SERVERS = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ],
};

export type CallType = "audio" | "video";
export type CallStatus = "ringing" | "accepted" | "declined" | "ended" | "missed" | "cancelled";

export interface CallSession {
  id: string;
  caller_id: string;
  callee_id: string;
  call_type: CallType;
  status: CallStatus;
  created_at: string;
  started_at: string | null;
  ended_at: string | null;
}

export interface CallSignal {
  id: string;
  call_id: string;
  from_user: string;
  to_user: string;
  signal_type: "offer" | "answer" | "ice-candidate" | "hangup";
  payload: Record<string, unknown>;
  created_at: string;
}

export interface ActiveCall {
  session: CallSession;
  pc: RTCPeerConnection;
  localStream: MediaStream | null;
  remoteStream: MediaStream;
  isCaller: boolean;
}

let activeCallRef: ActiveCall | null = null;
let signalChannelRef: ReturnType<typeof supabase.channel> | null = null;

export function getActiveCall(): ActiveCall | null {
  return activeCallRef;
}

export async function getLocalStream(callType: CallType): Promise<MediaStream> {
  return navigator.mediaDevices.getUserMedia({
    video: callType === "video" ? { width: 1280, height: 720 } : false,
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  });
}

export async function initiateCall(
  callerId: string,
  calleeId: string,
  callType: CallType,
  callbacks: {
    onCallStarted?: (call: ActiveCall) => void;
    onCallEnded?: () => void;
    onRemoteStream?: (stream: MediaStream) => void;
    onStatusChange?: (status: CallStatus) => void;
  },
): Promise<string | null> {
  try {
    const { data: session, error } = await supabase
      .from("call_sessions")
      .insert({
        caller_id: callerId,
        callee_id: calleeId,
        call_type: callType,
        status: "ringing",
      })
      .select()
      .single();

    if (error || !session) {
      console.error("Failed to create call session", error);
      return null;
    }

    const localStream = await getLocalStream(callType);
    const pc = new RTCPeerConnection(ICE_SERVERS);
    const remoteStream = new MediaStream();

    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

    pc.ontrack = (event) => {
      event.streams[0]?.getTracks().forEach((track) => remoteStream.addTrack(track));
      callbacks.onRemoteStream?.(remoteStream);
    };

    pc.onicecandidate = async (event) => {
      if (event.candidate) {
        await sendSignal(session.id, callerId, calleeId, "ice-candidate", {
          candidate: event.candidate.toJSON(),
        });
      }
    };

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    await sendSignal(session.id, callerId, calleeId, "offer", {
      sdp: offer.sdp,
      type: offer.type,
    });

    activeCallRef = {
      session: session as CallSession,
      pc,
      localStream,
      remoteStream,
      isCaller: true,
    };

    signalChannelRef = supabase
      .channel(`call-signals-${session.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "call_signals",
          filter: `to_user=eq.${callerId}`,
        },
        async (payload) => {
          const signal = payload.new as CallSignal;
          if (signal.call_id !== session.id) return;

          if (signal.signal_type === "answer") {
            const answer = new RTCSessionDescription({
              type: "answer",
              sdp: (signal.payload as { sdp: string }).sdp,
            });
            await pc.setRemoteDescription(answer);
            callbacks.onStatusChange?.("accepted");
          } else if (signal.signal_type === "ice-candidate") {
            const cand = signal.payload as { candidate: RTCIceCandidateInit };
            await pc.addIceCandidate(new RTCIceCandidate(cand.candidate));
          } else if (signal.signal_type === "hangup") {
            await endCall(session.id);
            callbacks.onCallEnded?.();
          }
        },
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "call_sessions",
          filter: `id=eq.${session.id}`,
        },
        (payload) => {
          const updated = payload.new as CallSession;
          callbacks.onStatusChange?.(updated.status);
          if (updated.status === "declined" || updated.status === "missed") {
            cleanup();
            callbacks.onCallEnded?.();
          }
        },
      )
      .subscribe();

    const callActive = activeCallRef;
    callbacks.onCallStarted?.(callActive);

    return session.id;
  } catch (err) {
    console.error("Error initiating call", err);
    return null;
  }
}

export async function acceptCall(
  signal: CallSignal,
  session: CallSession,
  calleeId: string,
  callbacks: {
    onCallStarted?: (call: ActiveCall) => void;
    onCallEnded?: () => void;
    onRemoteStream?: (stream: MediaStream) => void;
  },
): Promise<void> {
  try {
    const localStream = await getLocalStream(session.call_type as CallType);
    const pc = new RTCPeerConnection(ICE_SERVERS);
    const remoteStream = new MediaStream();

    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

    pc.ontrack = (event) => {
      event.streams[0]?.getTracks().forEach((track) => remoteStream.addTrack(track));
      callbacks.onRemoteStream?.(remoteStream);
    };

    pc.onicecandidate = async (event) => {
      if (event.candidate) {
        await sendSignal(session.id, calleeId, session.caller_id, "ice-candidate", {
          candidate: event.candidate.toJSON(),
        });
      }
    };

    const offer = new RTCSessionDescription({
      type: "offer",
      sdp: (signal.payload as { sdp: string }).sdp,
    });
    await pc.setRemoteDescription(offer);

    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);

    await sendSignal(session.id, calleeId, session.caller_id, "answer", {
      sdp: answer.sdp,
      type: answer.type,
    });

    await supabase
      .from("call_sessions")
      .update({ status: "accepted", started_at: new Date().toISOString() })
      .eq("id", session.id);

    activeCallRef = {
      session: { ...session, status: "accepted" },
      pc,
      localStream,
      remoteStream,
      isCaller: false,
    };

    signalChannelRef = supabase
      .channel(`call-signals-callee-${session.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "call_signals",
          filter: `to_user=eq.${calleeId}`,
        },
        async (payload) => {
          const sig = payload.new as CallSignal;
          if (sig.call_id !== session.id) return;

          if (sig.signal_type === "ice-candidate") {
            const cand = sig.payload as { candidate: RTCIceCandidateInit };
            await pc.addIceCandidate(new RTCIceCandidate(cand.candidate));
          } else if (sig.signal_type === "hangup") {
            await endCall(session.id);
            callbacks.onCallEnded?.();
          }
        },
      )
      .subscribe();

    callbacks.onCallStarted?.(activeCallRef);
  } catch (err) {
    console.error("Error accepting call", err);
  }
}

export async function declineCall(sessionId: string): Promise<void> {
  await supabase
    .from("call_sessions")
    .update({ status: "declined", ended_at: new Date().toISOString() })
    .eq("id", sessionId);
  cleanup();
}

export async function endCall(sessionId: string): Promise<void> {
  const call = activeCallRef;
  if (call) {
    const otherId = call.isCaller ? call.session.callee_id : call.session.caller_id;
    const meId = call.isCaller ? call.session.caller_id : call.session.callee_id;
    await sendSignal(sessionId, meId, otherId, "hangup", {});
  }
  await supabase
    .from("call_sessions")
    .update({ status: "ended", ended_at: new Date().toISOString() })
    .eq("id", sessionId);
  cleanup();
}

export async function cancelCall(sessionId: string): Promise<void> {
  await supabase
    .from("call_sessions")
    .update({ status: "cancelled", ended_at: new Date().toISOString() })
    .eq("id", sessionId);
  cleanup();
}

function cleanup() {
  if (activeCallRef) {
    activeCallRef.localStream?.getTracks().forEach((t) => t.stop());
    activeCallRef.pc.close();
    activeCallRef = null;
  }
  if (signalChannelRef) {
    supabase.removeChannel(signalChannelRef);
    signalChannelRef = null;
  }
}

async function sendSignal(
  callId: string,
  fromUser: string,
  toUser: string,
  signalType: "offer" | "answer" | "ice-candidate" | "hangup",
  payload: Record<string, unknown>,
): Promise<void> {
  await supabase.from("call_signals").insert({
    call_id: callId,
    from_user: fromUser,
    to_user: toUser,
    signal_type: signalType,
    payload,
  });
}

export function toggleMute(muted: boolean): void {
  const call = activeCallRef;
  if (!call?.localStream) return;
  call.localStream.getAudioTracks().forEach((t) => {
    t.enabled = !muted;
  });
}

export function toggleCamera(cameraOff: boolean): void {
  const call = activeCallRef;
  if (!call?.localStream) return;
  call.localStream.getVideoTracks().forEach((t) => {
    t.enabled = !cameraOff;
  });
}
