importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


  const firebaseConfig = {
    apiKey: "AIzaSyAzzg7rSDdzvDimdI7HKYYYjxr-_vRaeSw",
    authDomain: "expence-tracker-app.firebaseapp.com",
    databaseURL: "https://expence-tracker-app.firebaseio.com",
    projectId: "expence-tracker-app",
    storageBucket: "expence-tracker-app.appspot.com",
    messagingSenderId: "823965271012",
    appId: "1:823965271012:web:2e0c987b910b1c551c3df1"
  };
  
  firebase.initializeApp(firebaseConfig);
   firebase.messaging();
