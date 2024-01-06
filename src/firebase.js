import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnrMrdu62p0aXRyMKAwnlDVCEKqpQ9Xco",
  authDomain: "test-f9999.firebaseapp.com",
  projectId: "test-f9999",
  storageBucket: "test-f9999.appspot.com",
  messagingSenderId: "520863042097",
  appId: "1:520863042097:web:31c32069ce35a9c6462310",
  measurementId: "G-QJYZR8C2ML"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);