export interface PresenceUser {
  id: string;
  username: string;
  status: 'online' | 'idle' | 'streaming';
}

const connectedUsers: PresenceUser[] = [];

export function connectUser(username: string) {
  const user: PresenceUser = {
    id: crypto.randomUUID(),
    username,
    status: 'online',
  };

  connectedUsers.push(user);

  return user;
}

export function listConnectedUsers() {
  return connectedUsers;
}
