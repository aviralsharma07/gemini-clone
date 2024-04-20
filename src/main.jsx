import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/Context.jsx";
import { FirebaseProvider } from "./context/Firebase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </ContextProvider>
);
