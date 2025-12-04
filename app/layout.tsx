// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

import { Lexend } from "next/font/google";
import Footer2 from "./components/Footer2";
import FloatingIcon from "./components/FloatingIcon";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const MainFont = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});



export const metadata = {
  title: "MKT",
  description: "MKT description",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/`,
  },
  openGraph: {
    title: "MKT",
    description: "MKT description",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/`,
    },
    url: "https://mktgroupaebck.demo-web.live",
    siteName: "MKT",
    images: [
      {
        url: "/image/mktlogo.png", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "MKT Group",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={`${MainFont.className} antialiased`}>
        <Header />
        {children}

        {/* <Footer /> */}
        <Footer2 />
        <FloatingIcon />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
