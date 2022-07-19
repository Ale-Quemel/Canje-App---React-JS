
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDAphBF9QfsfvKi-t0du9mf2YiGxznF_4",
  authDomain: "canjeapp-web.firebaseapp.com",
  projectId: "canjeapp-web",
  storageBucket: "canjeapp-web.appspot.com",
  messagingSenderId: "22520226544",
  appId: "1:22520226544:web:2c269f25c381ded6cd5835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)