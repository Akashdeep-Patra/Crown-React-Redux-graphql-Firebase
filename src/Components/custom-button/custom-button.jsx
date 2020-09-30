import React from "react";
import "./custom-button.scss";

export default ({ children, ...other }) => (
  <button className="custom-button" {...other}>
    {children}
  </button>
);
