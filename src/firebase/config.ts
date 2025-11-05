import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnrD6K4lZLT6Rjb4OCRDo-foWctxHa840",
  authDomain: "my-clinica-75b97.firebaseapp.com",
  projectId: "my-clinica-75b97",
  storageBucket: "my-clinica-75b97.firebasestorage.app",
  messagingSenderId: "460797709906",
  appId: "1:460797709906:web:9e5d704623e7bdbb69598b"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export default firebaseApp;
