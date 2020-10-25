import React from "react";
// import "./custom-button.scss";
import { CustomButtonContainer } from "./custom-button.style";
export default ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);
