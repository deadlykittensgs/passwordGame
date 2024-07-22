import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC5v6ORle71U7pXxdKxUhzDLio_5EZ6bW0",
  authDomain: "passwordsgame.firebaseapp.com",
  projectId: "passwordsgame",
  storageBucket: "passwordsgame.appspot.com",
  messagingSenderId: "934268628536",
  appId: "1:934268628536:web:684fe8ea8ba2c510e800cd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }