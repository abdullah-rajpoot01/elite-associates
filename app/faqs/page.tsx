import FaqBlock1 from '@/components/faq-block-1'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Elite Associates Real Estate",
  description:
    "Find answers to frequently asked questions about buying, selling, renting, and investing in properties with Elite Associates Real Estate Agency.",

  openGraph: {
    title: "FAQs | Elite Associates Real Estate",
    description:
      "Find answers to frequently asked questions about buying, selling, renting, and investing in properties with Elite Associates Real Estate Agency.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Elite Associates FAQs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FAQs | Elite Associates Real Estate",
    description:
      "Find answers to frequently asked questions about buying, selling, renting, and investing in properties with Elite Associates Real Estate Agency.",
    images: ["/og-default.png"],
  },
};
const Page = () => {
  return (
    <>
      <FaqBlock1/>
    </>
  )
}

export default Page
