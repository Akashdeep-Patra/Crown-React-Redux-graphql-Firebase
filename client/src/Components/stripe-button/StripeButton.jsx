import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./StripeButton.scss";
import axios from "axios";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hf0SYADaYzpNAWBh1bBMa4eNyZYZcfUEz2gsvtMYfw9WwruYGYxKMpR7nlzasqXgOXo0rBPE3sbXmlPZEqZN4dQ00EbzPr2pP";
  const onToken = (token) => {
    // console.log(token);

    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        // console.log("Payment error: ", JSON.parse(error));
        console.log(error);
        // console.log("payments error");
        alert("There was an issue with your payment");
      });
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
