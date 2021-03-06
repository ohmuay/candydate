import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./firebase-config";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

if (process.env.NODE_ENV === "development") {
  document.querySelector("body").classList.toggle("debug-screens");
}

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
