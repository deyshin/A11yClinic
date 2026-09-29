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
  title: "Accessibility Practice | Making technology work for everyone",
  description: "Accessibility Practice is a 501(c)(3) nonprofit helping communities and teams improve software accessibility and user experience.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${breeSerif.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  )
}
