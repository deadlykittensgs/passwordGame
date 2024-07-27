import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "import.meta.env.VITE_APP_API_KEY",
  authDomain: "import.meta.env.VITE_APP_API_KEY",
  projectId: "passwordsgame",
  storageBucket: "passwordsgame.appspot.com",
  messagingSenderId: "934268628536",
  appId: "1:934268628536:web:684fe8ea8ba2c510e800cd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }