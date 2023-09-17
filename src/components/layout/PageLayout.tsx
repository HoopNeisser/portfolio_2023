// React-next:
import React from 'react'
import Head from "next/head";

interface Props {
    home?: boolean;
    description?: string;
    title?: string;
    children: React.ReactNode;
    image?: string;
  }

export default function PageLayout({
    title = "HoopNeisser's Portfolio",
  description = "Systems Engineering Student | Front-end Developer",
  image = "/images/next.svg",
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="HoopNeisser" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  )
}
