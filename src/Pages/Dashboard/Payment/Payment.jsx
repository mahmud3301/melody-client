import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CheckOutForm from "./checkout/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [taka, setTaka] = useState({});
  const amount = taka.price;
  const price = parseFloat(amount).toFixed(2);
  const [axiosSecure] = useAxiosSecure();
  const { id } = useParams();

  useEffect(() => {
    axiosSecure.get(`/taka/${id}`).then((res) => {
      // console.log(res.data);
      setTaka(res.data);
    });
  }, [axiosSecure, id]);

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-primary">Pay</span> Your Bill
      </h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm taka={taka} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
