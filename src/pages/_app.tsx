import type { AppProps } from 'next/app'

import { ReactElement, ReactNode } from 'react'

import { AppQueryClientProvider } from '@/app/providers/app-query-client-provider'
import { NextPage } from 'next'
import { Fira_Sans } from 'next/font/google'

import '@/app/styles/globals.css'

const fira = Fira_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <AppQueryClientProvider {...pageProps}>
      <main className={fira.className}>
        <Component {...pageProps} />
      </main>
    </AppQueryClientProvider>
  )
}
