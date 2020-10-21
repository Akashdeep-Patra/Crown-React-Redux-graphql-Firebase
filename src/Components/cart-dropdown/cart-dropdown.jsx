import React from "react";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggelCartHidden } from "../../redux/cart/cart.actions";
const cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem id={CartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggelCartHidden());
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps, null)(cart));
