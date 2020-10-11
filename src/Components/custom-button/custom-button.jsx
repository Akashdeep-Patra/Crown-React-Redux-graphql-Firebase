import React from "react";
import "./custom-button.scss";

export default ({ children, inverted, isGoogleSignIn, ...other }) => (
  <button
    className={`custom-button ${inverted ? "inverted" : " "}${
      isGoogleSignIn ? "google-button" : " "
    }`}
    {...other}
  >
    {children}
  </button>
);
