import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeButton.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hf0SYADaYzpNAWBh1bBMa4eNyZYZcfUEz2gsvtMYfw9WwruYGYxKMpR7nlzasqXgOXo0rBPE3sbXmlPZEqZN4dQ00EbzPr2pP";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown"
      ComponentClass="div"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
