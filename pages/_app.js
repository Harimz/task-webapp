import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Layout from "../components/layout";
import theme from "../styles/theme";
import { store } from "../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
