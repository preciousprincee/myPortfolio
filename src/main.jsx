import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// On a hard refresh, the browser tries to auto-scroll to whatever #section
// was last in the URL (e.g. #dashboard from a nav click). Reset it to #home
// before the app renders so every fresh load starts at the top, at Hero,
// with a URL that matches.
if (window.location.pathname === "/") {
  window.history.replaceState(null, "", "/#home" + window.location.search);
}
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
