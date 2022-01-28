// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyD2rRVtn1yCn-OeirOyn5XOmZH0fyHULQ0",
	authDomain: "chitvantrendz.firebaseapp.com",
	projectId: "chitvantrendz",
	storageBucket: "chitvantrendz.appspot.com",
	messagingSenderId: "255353339975",
	appId: "1:255353339975:web:5e1df063976a932c33f162",
};
const firebaseReturn = firebase.initializeApp(firebaseConfig);

const db = firebaseReturn.firestore();
const auth = firebase.auth(); // yeh "auth"-container meh voh cheez hai jo apnko on the authentication-page pe dikhti hai.

export { db, auth };

// ________________________________________________________

// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
// 	apiKey: "AIzaSyD2rRVtn1yCn-OeirOyn5XOmZH0fyHULQ0",
// 	authDomain: "chitvantrendz.firebaseapp.com",
// 	projectId: "chitvantrendz",
// 	storageBucket: "chitvantrendz.appspot.com",
// 	messagingSenderId: "255353339975",
// 	appId: "1:255353339975:web:5e1df063976a932c33f162",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();
// const storage = getStorage(app);
// // const provider=new GoogleAuthProvider()

// export { db, auth, storage };
