import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (pageProps && router.pathname) !== "/" ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <div className="bg-center bg-no-repeat bg-cover bg-landingPage">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
