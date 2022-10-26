import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Elements } from "@stripe/react-stripe-js";
import { initStripe } from "../utils";

export const stripePromise = initStripe();

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <div className="bg-sky-50 min-h-screen text-slate-700">
        <Header />
        <Component {...pageProps} />
      </div>
    </Elements>
  );
}

export default MyApp;
