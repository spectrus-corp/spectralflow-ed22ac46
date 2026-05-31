export const RLS_POLICIES = {
  messages: {
    select: "Users can read messages from joined servers",
    insert: "Authenticated members can send messages",
    delete: "Moderators can remove flagged messages",
  },

  directMessages: {
    select: "Users can access private conversations",
    insert: "Only conversation members can create messages",
  },

  liveStreams: {
    select: "Public streams are visible to authenticated users",
    update: "Stream owners and admins can manage streams",
  },

  moderation: {
    select: "Trust and Safety team only",
    update: "Restricted escalation workflow",
  },
};

export function getPolicyGroup(policy: keyof typeof RLS_POLICIES) {
  return RLS_POLICIES[policy];
}
