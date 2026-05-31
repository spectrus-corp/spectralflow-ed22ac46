export type CommunityRole = 'owner' | 'admin' | 'moderator' | 'member';

export interface CommunityMember {
  id: string;
  username: string;
  role: CommunityRole;
}

const members: CommunityMember[] = [];

export function addCommunityMember(username: string, role: CommunityRole) {
  const member: CommunityMember = {
    id: crypto.randomUUID(),
    username,
    role,
  };

  members.push(member);

  return member;
}

export function listCommunityMembers() {
  return members;
}
