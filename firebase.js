import { getApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDFk7HhXdKCvFdfHA8Dt4w1nQfSLi5wCUI',
  authDomain: 'booking-app-8e922.firebaseapp.com',
  projectId: 'booking-app-8e922',
  storageBucket: 'booking-app-8e922.appspot.com',
  messagingSenderId: '704348595987',
  appId: '1:704348595987:web:157604e9cc82802d8c5ce6'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()
export { auth, db }
