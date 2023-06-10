import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./checkout/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full justify-center ">
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
