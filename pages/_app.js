import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Top-Feed-Live-Icon.png" />
        <link rel="shortcut icon" href="/Top-Feed-Live-Icon.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
