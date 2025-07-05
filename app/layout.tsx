import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trevor Evans - IMIS Global",
  description: "Chief Executive Officer at International Maritime Information Systems",
  keywords: "Trevor Evans, IMIS Global, CEO, Maritime Technology, International Maritime Information Systems",
  authors: [{ name: "IMIS Global" }],
  openGraph: {
    title: "Trevor G Evans - CEO, IMIS Global",
    description: "Connect with Trevor G Evans, Chief Executive Officer at IMIS Global.",
    url: "https://your-domain.com",
    siteName: "IMIS Global",
    images: [
      {
        url: "/images/trevor-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Trevor G Evans - CEO, IMIS Global",
      },
    ],
    locale: "en_GB",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trevor G Evans - CEO, IMIS Global",
    description: "Connect with Trevor G Evans, Chief Executive Officer at IMIS Global.",
    images: ["/images/trevor-photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
