import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

const MainApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);
