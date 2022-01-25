// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcYkWY3ZEJLR9ER5g4LMr7AJ9Ts3yY6_g',
  authDomain: 'mongodbinnovate.firebaseapp.com',
  projectId: 'mongodbinnovate',
  storageBucket: 'mongodbinnovate.appspot.com',
  messagingSenderId: '609733946708',
  appId: '1:609733946708:web:a1afed2a3f8b4f9dba6cc1',
  measurementId: 'G-5110LWJRED',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default { auth, app };
