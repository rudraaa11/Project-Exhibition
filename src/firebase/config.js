
  import firebase from 'firebase/compat/app'
  import "firebase/compat/analytics";
  import 'firebase/compat/auth'
  import 'firebase/compat/firestore'
  import 'firebase/compat/storage'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAI6-4acPRET-JCCYxzEUIDc6u5XJrnSt0",
    authDomain: "sell-it-a4377.firebaseapp.com",
    projectId: "sell-it-a4377",
    storageBucket: "sell-it-a4377.appspot.com",
    messagingSenderId: "390975741774",
    appId: "1:390975741774:web:a617d822b20afbfa89481f",
    measurementId: "G-L5GMB4QL32"
  };
  
  // Initialize Firebase
  export const Firebase = firebase.initializeApp(firebaseConfig);

  
