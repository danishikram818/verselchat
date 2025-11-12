// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ✅ Import Bootstrap core CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Add your custom Bootstrap theme overrides here
import "./custom.css"; // <-- create this file below

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);