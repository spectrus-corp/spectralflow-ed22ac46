export type PresenceStatus = "online" | "idle" | "streaming" | "offline";

export interface PresenceSession {
  userId: string;
  username: string;
  status: PresenceStatus;
  activeServerId?: string;
  voiceChannelId?: string;
  updatedAt: string;
}

export const PRESENCE_HEARTBEAT_INTERVAL = 15000;

export const defaultPresence: PresenceSession = {
  userId: "spectral-user",
  username: "SpectralFlow",
  status: "online",
  updatedAt: new Date().toISOString(),
};

export function buildPresencePayload(
  payload: Partial<PresenceSession>,
): PresenceSession {
  return {
    ...defaultPresence,
    ...payload,
    updatedAt: new Date().toISOString(),
  };
}
