export async function initializePushMessaging() {
  return {
    initialized: true,
    provider: 'push-service'
  };
}

export async function subscribeToTopic(topic: string) {
  return {
    subscribed: true,
    topic
  };
}
