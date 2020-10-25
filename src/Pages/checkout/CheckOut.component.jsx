import React from "react";
import "./CheckOut.component.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../Components/checkout-item/CheckOutItem.component";
import StripeButton from "../../Components/stripe-button/StripeButton";
const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span className="">Product</span>
      </div>
      <div className="header-blocks">
        <span className="">Description</span>
      </div>
      <div className="header-blocks">
        <span className="">Quantity</span>
      </div>
      <div className="header-blocks">
        <span className="">Price</span>
      </div>
      <div className="header-blocks">
        <span className="">Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the test credit card for Payments*
      <br />
      4242-4242-4242-4242 cvv-123 expiary-(any future date)
    </div>
    <StripeButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckOut);
