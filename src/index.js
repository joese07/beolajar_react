import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hello from "./components/Hello";
import HelloClass from "./components/HelloClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello />
    <HelloClass />
    <App />
  </React.StrictMode>
);
