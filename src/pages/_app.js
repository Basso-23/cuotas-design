import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Cuotas 50y6</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
