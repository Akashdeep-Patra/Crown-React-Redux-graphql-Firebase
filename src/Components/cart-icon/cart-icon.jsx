import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggelCartHidden } from "../../redux/cart/cart.actions";
const CartIcon = ({ toggelCartHidden }) => (
  <div className="cart-icon" onClick={toggelCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggelCartHidden: () => dispatch(toggelCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
