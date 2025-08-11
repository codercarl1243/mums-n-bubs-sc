import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


const fontMain = Montserrat({
  weight: ["400", "600", "700"],
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
    <html lang="en" className="bg-light">
      <body
        className={`${fontMain.variable} antialiased font-main layout-wrapper`}
      >
        <Header className="width-full" />
        <main id="main-content" className=" width-full layout-wrapper ">
          {children}
        </main>
        <Footer  className="width-full"/>
      </body>
    </html>
  );
}
