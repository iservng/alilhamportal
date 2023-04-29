// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { renderAppShell } from './config/app_config.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL2mNMlUCf4ZGMdhCuvFYCGuFw4dx2xEE",
  authDomain: "alilham.firebaseapp.com",
  projectId: "alilham",
  storageBucket: "alilham.appspot.com",
  messagingSenderId: "571867113978",
  appId: "1:571867113978:web:b1e055a3e41cde34245c43"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



// ================================
renderAppShell();
// ================================












// let menuSection = localStorage.getItem('public_menu_items');
// localStorage.getItem('school_branches')
// sessionStorage.setItem('pin', JSON.stringify(pininfo));
// // let pininfo = {
        //     pin: this.pin,
        //     section: this.sectionId,
        //     branch: this.brancheId,
        // }




