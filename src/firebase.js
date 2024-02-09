import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAu0KSU8NK_gdw3kyHeAUdXK9QDVaPcErg ",
    authDomain: "localhost",
    projectId: "dev-auth-86e3c",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "881164084075"
  };

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
//const db = getFirestore(firebaseApp)

// here we can export reusable database references
//export const todosRef = collection(db, 'todos')