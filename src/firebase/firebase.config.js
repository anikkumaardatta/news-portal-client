// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjz0JYg2WXzNmTBcaFG2CJRpyuiMxHyhQ",
    authDomain: "news-portal-9f388.firebaseapp.com",
    projectId: "news-portal-9f388",
    storageBucket: "news-portal-9f388.appspot.com",
    messagingSenderId: "704360276628",
    appId: "1:704360276628:web:000fff3e64f452df85ca81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;