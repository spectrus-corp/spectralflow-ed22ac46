export interface ModerationEvent {
  id: string;
  type: 'spam' | 'abuse' | 'raid';
  userId: string;
  createdAt: string;
}

const moderationQueue: ModerationEvent[] = [];

export function createModerationEvent(type: ModerationEvent['type'], userId: string) {
  const event: ModerationEvent = {
    id: crypto.randomUUID(),
    type,
    userId,
    createdAt: new Date().toISOString(),
  };

  moderationQueue.push(event);

  return event;
}

export function listModerationEvents() {
  return moderationQueue;
}
