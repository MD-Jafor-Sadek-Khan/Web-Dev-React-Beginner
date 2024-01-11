import React from "react"
import ReactDOM from "react-dom/client"
import AppRef from "./AppRef.jsx"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Form Validation Using useState</h1>
    <App />
    <br /><br /><br />
    <h1>Form Validation Using useRef</h1>
    <AppRef />
  </React.StrictMode>
)
