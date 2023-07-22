// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// getFirestore permite obtener la base de datos de firestore de cualquier proyecto que tengamos configurado como el de abajo (firebaseConfig). En este caso, de la app
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqKwMjSWkF22onVpxpbvEOx9XysMLqptk",
    authDomain: "parcishop.firebaseapp.com",
    projectId: "parcishop",
    storageBucket: "parcishop.appspot.com",
    messagingSenderId: "489444579904",
    appId: "1:489444579904:web:ee0c2d56412b1c7ddc5da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // db por database. De ahora en adelante, db representa a nuestra base de datos. Por ultimo, la exporto para poder utilizarla en cualquier componente 
