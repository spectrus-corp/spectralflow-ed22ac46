importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC99tJNelB01feptt7GRkyrt67eXu__DzQ",
  authDomain: "spectralflow-d9452.firebaseapp.com",
  projectId: "spectralflow-d9452",
  storageBucket: "spectralflow-d9452.firebasestorage.app",
  messagingSenderId: "815069988483",
  appId: "1:815069988483:web:5d7d44ab4e926e684e7db6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'SpectralFlow';

  self.registration.showNotification(title, {
    body: payload.notification?.body || 'New activity',
    icon: '/pwa-192x192.png'
  });
});