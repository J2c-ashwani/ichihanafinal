import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ichi Hana Chitwan Consultancy - Study Abroad Experts",
  description:
    "Expert study abroad consultancy services in Nepal. University selection, visa processing, and complete guidance for international education.",
  keywords:
    "study abroad, Nepal, consultancy, visa, university, international education",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Ichi Hana Chitwan Consultancy - Study Abroad Experts",
    description:
      "Expert study abroad consultancy services in Nepal. University selection, visa processing, and complete guidance for international education.",
    url: "https://www.ichihanachitwan.com", // replace with your domain
    siteName: "Ichi Hana Chitwan Consultancy",
    images: [
      {
        url: "/logo.png", // logo for social/Google previews
        width: 512,
        height: 512,
        alt: "Ichi Hana Chitwan Consultancy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ichi Hana Chitwan Consultancy - Study Abroad Experts",
    description:
      "Expert study abroad consultancy services in Nepal. University selection, visa processing, and complete guidance for international education.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
