import ContactSection1 from '@/components/contact-section-1'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Elite Associates Real Estate",
  description:
    "Get in touch with Elite Associates Real Estate Agency. Contact us for buying, selling, or investing in properties. Our team is ready to assist you with expert guidance.",

  openGraph: {
    title: "Contact Us | Elite Associates Real Estate",
    description:
      "Get in touch with Elite Associates Real Estate Agency. Contact us for buying, selling, or investing in properties. Our team is ready to assist you with expert guidance.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Contact Elite Associates Real Estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Elite Associates Real Estate",
    description:
      "Get in touch with Elite Associates Real Estate Agency. Contact us for buying, selling, or investing in properties. Our team is ready to assist you with expert guidance.",
    images: ["/og-default.png"],
  },
};

const Page = () => {
    return (
        <ContactSection1 />
    )
}

export default Page