import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LangProvider } from "@/context/langContext";
import {Bebas_Neue} from "next/font/google"


const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
  variable: "--bebas",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider locale={pageProps.locale} locales={pageProps.locales}>
      <div className={`${bebas.variable}`}>
      <Component {...pageProps} />
      </div>
    </LangProvider>
  );
}
