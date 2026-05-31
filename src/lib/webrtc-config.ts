export const WEBRTC_CONFIG = {
  iceServers: [
    {
      urls: ["stun:stun.l.google.com:19302"],
    },
  ],
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
  },
  video: {
    width: 1280,
    height: 720,
    frameRate: 30,
  },
};

export async function createPeerConnection() {
  return new RTCPeerConnection(WEBRTC_CONFIG);
}
