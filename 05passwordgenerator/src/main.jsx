import React from "react"                 // ✅ add this line
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"                      // ✅ make sure Tailwind is loaded

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
