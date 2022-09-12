import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLo9i50B2BqDSu3DH7bViH2WKtCuDvOXU",
  authDomain: "netflix-clone-21b23.firebaseapp.com",
  projectId: "netflix-clone-21b23",
  storageBucket: "netflix-clone-21b23.appspot.com",
  messagingSenderId: "752349692226",
  appId: "1:752349692226:web:b75f68b2612b57d8e748db"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;