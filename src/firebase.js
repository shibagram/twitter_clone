import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAN1Qmyr2aBAyWetBIHzHKxBVXlbRMt-s",
  authDomain: "twitter-clone-f5663.firebaseapp.com",
  projectId: "twitter-clone-f5663",
  storageBucket: "twitter-clone-f5663.appspot.com",
  messagingSenderId: "1031954528898",
  appId: "1:1031954528898:web:20f8c2a02cf7f104eb129b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db