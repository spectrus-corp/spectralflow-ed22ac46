export interface RealtimeMessage {
  id: string;
  serverId?: string;
  channelId?: string;
  authorId: string;
  content: string;
  createdAt: string;
}

export function buildRealtimeMessage(
  payload: Omit<RealtimeMessage, "createdAt">,
): RealtimeMessage {
  return {
    ...payload,
    createdAt: new Date().toISOString(),
  };
}

export async function connectRealtimeChannel(channel: string) {
  return {
    connected: true,
    channel,
  };
}
