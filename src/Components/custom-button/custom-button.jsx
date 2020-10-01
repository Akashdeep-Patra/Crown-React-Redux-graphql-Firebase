import React from "react";
import "./custom-button.scss";

export default ({ children, isGoogleSignIn, ...other }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "google-button" : ""}`}
    {...other}
  >
    {children}
  </button>
);
