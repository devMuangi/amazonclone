import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPhwVAY9sD5JNlvr7UjcZ8X474HFGJe8U",
    authDomain: "clone-860ce.firebaseapp.com",
    projectId: "clone-860ce",
    storageBucket: "clone-860ce.appspot.com",
    messagingSenderId: "542370408101",
    appId: "1:542370408101:web:b45ac6449cd017279f8f4c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };