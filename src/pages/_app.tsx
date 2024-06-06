import type {AppProps} from "next/app";
import {ReactElement, ReactNode} from "react";
import {HydrationBoundary, QueryClientProvider} from "@tanstack/react-query";
import {NextPage} from "next";
import {queryClient} from "@/shared/api/query-client";
import "@/app/styles/globals.css";

import { Fira_Sans } from 'next/font/google'

const fira = Fira_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function App({Component, pageProps}: AppPropsWithLayout) {

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <main className={fira.className}>
          <Component {...pageProps} />
        </main>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
