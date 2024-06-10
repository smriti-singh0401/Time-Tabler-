console.log("connected");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbBSuF9wbeHEue4_Tetvp4ZUmL6ZlDUy8",
  authDomain: "time-tabler-159dd.firebaseapp.com",
  projectId: "time-tabler-159dd",
  storageBucket: "time-tabler-159dd.appspot.com",
  messagingSenderId: "78839603043",
  appId: "1:78839603043:web:4a2f953269a604fc847d56",
  measurementId: "G-6N20YS2VN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

var email, pass;
document.getElementById("email").addEventListener("input", (e) => {
  console.log(e.target.value);
  email = e.target.value
})
document.getElementById("pswd").addEventListener("input", (e) => {
  console.log(e.target.value);
  pass = e.target.value
})
document.getElementById("sub").addEventListener("click", () => {
  email = email + "@gmail.com"
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in 
      window.open("./admin.html", "_self");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

})