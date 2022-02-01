import React from "react";
import {
  Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "StripeComponents/CustomCSS/StripeMain.css";
import CheckoutForm from "StripeComponents/CheckoutForm";


const StripeMain = () => {
  const stripe = loadStripe(
    "pk_test_51KOGVQSJdiBPE7g1drQiO5lfu7rQK6KmqVAYS0yHQB6fn6q5vEe4m13x1qXD9BssOlq5F5FS82D3eCvbf2F6nHrw00upBTqziF"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};


export default StripeMain;