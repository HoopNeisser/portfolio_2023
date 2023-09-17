import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LangProvider } from "@/context/langContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider locale={pageProps.locale} locales={pageProps.locales}>
      <Component {...pageProps} />
    </LangProvider>
  );
}
