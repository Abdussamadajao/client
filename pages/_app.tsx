import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { globalTheme } from "styles/themes";
import Wrapper from "components/Layout/Wrapper";
import { init } from "emailjs-com";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={globalTheme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
