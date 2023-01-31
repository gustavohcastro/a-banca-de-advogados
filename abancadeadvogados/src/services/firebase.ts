// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkaXhazT31emqvNA-INcUmZY7UNwSmMV0",
  authDomain: "abancadeadvogados-68fcb.firebaseapp.com",
  projectId: "abancadeadvogados-68fcb",
  storageBucket: "abancadeadvogados-68fcb.appspot.com",
  messagingSenderId: "531601375852",
  appId: "1:531601375852:web:f41f3aba170496e2e1ce49",
  measurementId: "G-BML1EB8H36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;