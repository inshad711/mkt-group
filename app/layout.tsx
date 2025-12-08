// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

import { Lexend } from "next/font/google";
import Footer2 from "./components/Footer2";
import FloatingIcon from "./components/FloatingIcon";
import NextTopLoader from "nextjs-toploader";



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
        url: "/image/mktlogo.webp", // Ensure this image exists in your public folder
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
        <NextTopLoader
          color="#D4AF37"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #D4AF37,0 0 5px #D4AF37"
        />
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
