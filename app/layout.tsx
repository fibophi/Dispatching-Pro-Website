import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dispatching.Pro - Professional Truck Dispatch Services",
  description:
    "Professional dispatch services for Dry Van & Reefer carriers running USA Interstate and Cross-Border freight. 24/7 support, higher rates, no contracts.",
  keywords: "truck dispatch, freight dispatch, dry van, reefer, cross border, USA interstate, trucking services",
  authors: [{ name: "Dispatching.Pro" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Dispatching.Pro - Professional Truck Dispatch Services",
    description:
      "Professional dispatch services for Dry Van & Reefer carriers. 24/7 support, higher rates, no contracts.",
    url: "https://dispatching.pro",
    siteName: "Dispatching.Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dispatching.Pro - Professional Truck Dispatch Services",
    description:
      "Professional dispatch services for Dry Van & Reefer carriers. 24/7 support, higher rates, no contracts.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5QW4MHEM7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C5QW4MHEM7');
            `,
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
