import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyB0Q42OVuIPkRDF8OjAhCAUFnklFHSugdo",
  authDomain: "search-map-7eeaa.firebaseapp.com",
  projectId: "search-map-7eeaa",
  storageBucket: "search-map-7eeaa.appspot.com",
  messagingSenderId: "922482980196",
  appId: "1:922482980196:web:838492d7c72c5c52b43671",
  measurementId: "G-C72G43RGMF"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }
