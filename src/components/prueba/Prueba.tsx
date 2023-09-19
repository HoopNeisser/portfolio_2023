// React-Next:
import React from 'react';
import { useContext } from "react";
// Context:
import { langContext } from "@/context/langContext";
// Texts:
import { TEXTS_PRUEBA } from '@/languages/texts_prueba';
// getStaticProps:
export { getStaticProps } from "@/tools/getStaticProps";

export default function Prueba() {
  const { locale } = useContext(langContext);
  const { example } = TEXTS_PRUEBA[locale];
  return (
    <div className='font-bebas text-base text-center'>{example}</div>
  )
}
