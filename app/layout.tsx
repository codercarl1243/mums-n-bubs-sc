import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-main",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-accent",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#5c9dff',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: { 
    default: "Bumps Babies and Beyond", 
    template: '%s | Bumps Babies and Beyond' 
  },
  openGraph: {
    title: "Bumps Babies and Beyond",
  description: "TBA",
  url: "TBA",
  siteName: "Bumps Babies and Beyond",
  // images: [{ url: 'https://TBA.og.png' }]


  },
  description: "TBA",
  keywords: ["TBA"],
  viewport: "TBA",
  // HrefLang: "",
  authors: {name: "Carl Davidson", url: "https://codercarl.dev"},
  robots: "TBA"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-main body-wrapper`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
