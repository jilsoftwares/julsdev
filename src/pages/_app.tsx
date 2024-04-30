// import "@/styles/globals.css";
import theme from "../styles/themes";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import Head from "next/head";
import Layout from "@/layout";
import { Saira_Condensed } from "next/font/google";
const SairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <main className={SairaCondensed.className}>
      <Head>
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
    </main>
  );
}
