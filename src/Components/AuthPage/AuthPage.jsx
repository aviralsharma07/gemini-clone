import React, { useContext } from "react";
import "./AuthPage.css";
import gemini_logo from "../../assets/Gemini.svg";
import { useState } from "react";
import { FirebaseContext } from "../../context/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { set } from "firebase/database";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { signUp, signIn, signUpWithGoogle } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      await signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    setIsSignIn(!isSignIn); // Toggle between SignIn and SignUp states
  };
  return (
    <div className="authpage">
      <nav className="navbar">
        <p>Gemini</p>
        <ul>
          <li>Try Gemini Advanced</li>
          <li>For Business</li>
          <li>FAQ</li>
          <li>
            <button className="btn">Sign in</button>
          </li>
        </ul>
      </nav>
      <div className="main-container">
        <div className="left">
          <div className="left-container">
            <img src={gemini_logo} alt="" className="gemini-logo" />
            <h2>Supercharge your creativity and productivity</h2>
            <p>Chat to start writing, planning, learning and more with Google AI</p>
            <button className="btn">Sign in</button>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <h2>{isSignIn ? "Sign in to your account" : "Create your account"}</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            {!isSignIn && <input type="password" placeholder="Confirm Password" className="ipf" onChange={(e) => setConfirmPassword(e.target.value)} />} {/* Render this only in SignUp state */}
            <button className="ipf" onClick={isSignIn ? handleSignIn : handleSignUp}>
              {isSignIn ? "Sign in" : "Sign up"}
            </button>
            <p>{isSignIn ? "Forgot password?" : ""}</p> {/* Render this only in SignIn state */}
            <div className="divider">
              <hr />
              <p>or</p>
              <hr />
            </div>
            <button onClick={signUpWithGoogle}>Sign in with Google</button>
            <p>
              {isSignIn ? "Don't have an account?" : "Already have an account?"} <span onClick={handleToggle}>{isSignIn ? "Sign up" : "Sign in"}</span>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li className="google">
            <a href="https://www.google.com/" target="_blank">
              Google
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/" target="_blank">
              Privacy and Terms
            </a>{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default AuthPage;
