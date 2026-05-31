export interface Friend {
  id: string;
  username: string;
  online: boolean;
}

const friends: Friend[] = [];

export function addFriend(username: string) {
  const friend = {
    id: crypto.randomUUID(),
    username,
    online: true,
  };

  friends.push(friend);

  return friend;
}

export function getFriends() {
  return friends;
}
