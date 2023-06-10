import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import "./CheckOutForm.css";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  };

  return (
    <div className="w-full bg-base-300 p-9 rounded-3xl">
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          // disabled={!stripe || !clientSecret || processing}
          >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
