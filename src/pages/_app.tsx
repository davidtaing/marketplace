import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-sky-50 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
