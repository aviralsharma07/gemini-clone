import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import AuthPage from "./Components/AuthPage/AuthPage";
import { useState, useEffect } from "react";
import { FirebaseContext } from "./context/Firebase";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  // const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null); // State to store the current user
  const { firebaseAuth } = useContext(FirebaseContext);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setUser(user); // Update the user state
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, [firebaseAuth]);

  return (
    <>
      {user ? (
        <>
          <Sidebar />
          <Main />
        </>
      ) : (
        <AuthPage />
      )}
    </>
  );
};

export default App;
