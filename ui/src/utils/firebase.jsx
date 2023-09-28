import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD463BafhbNcZGnzYxoIlHHMcyMosLlNwE",
  authDomain: "mernvideoapp.firebaseapp.com",
  projectId: "mernvideoapp",
  storageBucket: "mernvideoapp.appspot.com",
  messagingSenderId: "1088162778549",
  appId: "1:1088162778549:web:cbc26403f27ebd1be29dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app

