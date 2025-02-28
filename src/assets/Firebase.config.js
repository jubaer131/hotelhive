// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId


  // apiKey: "AIzaSyADhYeZS8dcRWTYjJcwT6P8LQIqTj8kfgs",
  // authDomain: "hotelhive-eca18.firebaseapp.com",
  // projectId: "hotelhive-eca18",
  // storageBucket: "hotelhive-eca18.appspot.com",
  // messagingSenderId: "226001050996",
  // appId: "1:226001050996:web:456709a240ab484705e021"
};

console.log(import.meta.env.VITE_apiKey)
// Initialize Firebase
export  const app = initializeApp(firebaseConfig);