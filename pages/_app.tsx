import App, { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppLayout from "components/layout/appLayout";
import { PrismGlobal } from "components/ui/prism";
import { AnimatePresence } from "framer-motion";
import { theme } from "components/ui/theme";
import { AccentGlobal } from "components/Accent";
import { FontsGlobal } from "components/ui/theme/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <FontsGlobal />
      <AccentGlobal />
      <PrismGlobal />
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
