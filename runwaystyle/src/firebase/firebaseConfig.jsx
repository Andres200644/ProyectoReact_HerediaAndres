import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDa-sB1LhtStRtrHWx2DEz2eG-kH0JXbtQ",
  authDomain: "proyectocoderhouseandres-66dd1.firebaseapp.com",
  projectId: "proyectocoderhouseandres-66dd1",
  storageBucket: "proyectocoderhouseandres-66dd1.appspot.com",
  messagingSenderId: "883465758798",
  appId: "1:883465758798:web:58c1ce13bd7378bedafb1f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
