import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";

const cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default cart;
