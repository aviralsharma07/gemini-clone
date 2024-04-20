import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNl7eXUoqwME_EznSpufDK0IsfdWsUrZY",
  authDomain: "gemini-clone-c301f.firebaseapp.com",
  projectId: "gemini-clone-c301f",
  storageBucket: "gemini-clone-c301f.appspot.com",
  messagingSenderId: "52595385147",
  appId: "1:52595385147:web:a964d3ee8e38cc52a9cd1e",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      console.log(user.email);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const user = userCredential.user;
      user && console.log("Sign In Successfull", user.email);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(firebaseAuth, googleProvider);
      const user = userCredential.user;
      console.log(user.email);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextValue = {
    signUp,
    signIn,
    firebaseAuth,
    logOut,
    signUpWithGoogle,
  };
  return <FirebaseContext.Provider value={contextValue}>{props.children}</FirebaseContext.Provider>;
};
