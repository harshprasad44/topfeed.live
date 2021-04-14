import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href="/Top-Feed-Live-Icon.png" />
        <link rel="shortcut icon" href="/Top-Feed-Live-Icon.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

// import Head from "next/head";
// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <link rel="icon" href="/Top-Feed-Live-Icon.png" />
//         <link rel="shortcut icon" href="/Top-Feed-Live-Icon.png"></link>
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
