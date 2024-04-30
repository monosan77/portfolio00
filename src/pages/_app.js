import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/index-IMG/turu-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
