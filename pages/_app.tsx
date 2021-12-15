import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import { store } from "../client/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
