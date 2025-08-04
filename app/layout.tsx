import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Geist, Concert_One } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";


const fontMain = Geist({
  variable: "--font-main",
  subsets: ["latin"],
});

const fontHeading = Concert_One({
  weight: "400",
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
  // HrefLang: "",
  authors: { name: "Carl Davidson", url: "https://codercarl.dev" },
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
        className={`${fontMain.variable} ${fontHeading.variable} antialiased font-main body-wrapper`}
      >
        <Header className="width-full" />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
