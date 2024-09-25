// FIREBASE IMPORTS
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyA2yt6xTvMZAb5q-_tNGqPU4YwIpanSiJc",
  authDomain: "project-insta-lite.firebaseapp.com",
  projectId: "project-insta-lite",
  storageBucket: "project-insta-lite.appspot.com",
  messagingSenderId: "353549646358",
  appId: "1:353549646358:web:11f18a739a6294b49d9337",
  measurementId: "G-H0LH9D8BKB",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const postsColRef = collection(db, 'posts');

export {db, auth, provider, storage, postsColRef}
