import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

 const firebaseDB =
    {
        apiKey: "AIzaSyBIxohOYFroGqB_EEd7wgqDnPMPQ7XvZgA",
        authDomain: "react-kurs-7c53a.firebaseapp.com",
        projectId: "react-kurs-7c53a",
        // storageBucket: "react-kurs-7c53a.appspot.com",
        // messagingSenderId: "163085110451",
        // appId: "1:163085110451:web:929fe13f0e59b3188334c6",
        // measurementId: "G-H5J0MF2K0B"
    };


  const app = initializeApp(firebaseDB);

  export const db = getFirestore(app);