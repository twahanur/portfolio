// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDg0b5NdM08ZPX2r_0IKKxAR7GyAb3Nud4",
  authDomain: "thohanurrahman-5ad25.firebaseapp.com",
  projectId: "thohanurrahman-5ad25",
  storageBucket: "thohanurrahman-5ad25.appspot.com",
  messagingSenderId: "73214985574",
  appId: "1:73214985574:web:c9d091f685f3e8700d74a7",
  measurementId: "G-F8F5Y6XDS4"
};
firebase.initializeApp(firebaseConfig);

const firebaseAnalytics = firebase.analytics();
export {
  firebaseAnalytics,firebase as default
}
firebase.analytics();
