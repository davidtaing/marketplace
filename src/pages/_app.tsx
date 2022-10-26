import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { initStripe } from "../utils";

export const stripePromise = initStripe();

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-sky-50 min-h-screen text-slate-700">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
