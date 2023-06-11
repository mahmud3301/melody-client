import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout/CheckOutForm";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-100">
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
