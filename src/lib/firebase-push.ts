export interface PushNotificationPayload {
  title: string;
  body: string;
  icon?: string;
}

export const firebasePushConfig = {
  enabled: true,
  vapidKey: "spectralflow-public-key",
  serviceWorker: "/firebase-messaging-sw.js",
};

export async function registerPushNotifications() {
  return {
    success: true,
    provider: "firebase",
  };
}

export async function sendLocalPush(
  payload: PushNotificationPayload,
) {
  return payload;
}
