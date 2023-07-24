import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL73soro_aVvU9IdiMT-q4goSpUe4B-hs",
  authDomain: "vue-demos-98eae.firebaseapp.com",
  databaseURL: "https://vue-demos-98eae-default-rtdb.firebaseio.com",
  projectId: "vue-demos-98eae",
  storageBucket: "vue-demos-98eae.appspot.com",
  messagingSenderId: "241035123380",
  appId: "1:241035123380:web:b334444b8d54fd653195e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)