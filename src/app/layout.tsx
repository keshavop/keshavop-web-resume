import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata = {
  title: 'Keshav Kumar • Developer',
  description: 'Full-Stack developer, Android enthusiast, and learner.',
  image: 'https://media.licdn.com/dms/image/D4D16AQFycrgrKsw5iQ/profile-displaybackgroundimage-shrink_350_1400/0/1698863301471?e=1711584000&v=beta&t=up03Y2Yo1T31Ax6ucF4CyX8x_xmsoY05xEFaQFxrcDY',
  type: 'website',
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <meta
                name="google-site-verification"
                content="jqwtQzOE-bW69-ERO_ADx1rvzBkrYXMCM_UEIdS78jE"
            />
      <meta name="robots" content="follow, index" />
            <meta content={metadata.description} name="description" />
            <meta
                property="og:url"
                content={`https://keshavop.vercel.app/`}
            />
            <link rel="canonical" href={`https://keshavop.vercel.app/`} />
            <meta property="og:type" content={metadata.type} />
            <meta property="og:site_name" content="Keshavop" />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:image" content={metadata.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@keshavkrop" />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content={metadata.image} />
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
