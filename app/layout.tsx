import type React from "react"
import type { Metadata } from "next"
import { Bree_Serif, Inter } from "next/font/google"
import "./globals.css"

// Define fonts
const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bree-serif",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "A11y Clinic",
  description: "Making the web accessible for everyone",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${breeSerif.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

