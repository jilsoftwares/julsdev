// import "@/styles/globals.css";
import theme from "../styles/themes";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import Head from "next/head";
import Layout from "@/layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/logo.png"
        />
        <title>{"Jul's Dev"}</title>
        <meta
          name="description"
          content="Jul's Dev"
        />
      </Head>

      <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </>
  );
}
