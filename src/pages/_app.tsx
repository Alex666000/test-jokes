import type {AppProps} from "next/app";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import "@/app/styles/globals.css";

import {Fira_Sans} from "next/font/google";
import {AppQueryClientProvider} from "@/app/providers/app-query-client-provider";

const fira = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function App({Component, pageProps}: AppPropsWithLayout) {

  return (
    <AppQueryClientProvider {...pageProps}>
      <main className={fira.className}>
        <Component {...pageProps} />
      </main>
    </AppQueryClientProvider>
  );
}
