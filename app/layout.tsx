import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar1 } from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Elite Associates | Find Your Dream Land",
  description:
    "Elite Associates Real Estate Agency helps you buy, sell, and invest in residential and commercial properties with expert guidance and transparent, hassle-free service.",

  metadataBase: new URL("https://eliteassociates.pages.dev"),

  openGraph: {
    title: "Elite Associates | Find Your Dream Land",
    description:
      "Elite Associates Real Estate Agency helps you buy, sell, and invest in residential and commercial properties with expert guidance and transparent, hassle-free service.",
    type: "website",
    locale: "en_US",
    siteName: "Elite Associates",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Elite Associates Real Estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elite Associates | Find Your Dream Land",
    description:
      "Elite Associates Real Estate Agency helps you buy, sell, and invest in residential and commercial properties with expert guidance and transparent, hassle-free service.",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col max-w-7xl mx-auto">
        <Navbar1 />
        {children}
        <Footer1 />
        <NextTopLoader showForHashAnchor={false} />
      </body>
    </html>
  );
}
