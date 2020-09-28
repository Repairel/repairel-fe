import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    max-width: 1250px;
    font-family: sans-serif;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: 'black',
    secondary: 'green',
  },
};

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// Docs: https://nextjs.org/docs/advanced-features/custom-app
