// وارد کردن کتابخانه‌های فایربیس برای سرویس ورکر
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// تنظیمات اولیه فایربیس (اطلاعات پروژه خود را اینجا وارد کنید)
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

// مدیریت دریافت پیام در زمانی که اپلیکیشن بسته است
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'icons/icon-192.png' // آیکون نوتیفیکیشن
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
