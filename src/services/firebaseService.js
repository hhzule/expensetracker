import firebase from 'firebase';

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
const messaging = firebase.messaging();

export function configureNotification(){
Notification.requestPermission().then(() => {
if(permission === 'granted'){
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
   
    console.log('No Instance ID token available. Request permission to generate one.');
 
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
}
})
}
