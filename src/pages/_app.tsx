import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-sky-50 min-h-screen text-slate-700">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
