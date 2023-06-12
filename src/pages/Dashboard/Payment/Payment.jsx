import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const stateValue = location.state;
  console.log(stateValue);
  const Cartprice = parseFloat(stateValue.price);

  return (
    <div className="w-full my-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Pament Here
      </h2>
      <Elements stripe={stripePromise}>
        <Checkout price={Cartprice} items={stateValue}></Checkout>
      </Elements>
    </div>
  );
};

export default Payment;