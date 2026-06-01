import AboutFeatures from '@/components/about/about-features'
import Hero from '@/components/hero'
import Timeline from '@/components/team'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Elite Associates Real Estate",
  description:
    "Learn more about Elite Associates Real Estate Agency. We help clients buy, sell, and invest in residential and commercial properties with trusted guidance and professional service.",

  openGraph: {
    title: "About Us | Elite Associates Real Estate",
    description:
      "Learn more about Elite Associates Real Estate Agency. We help clients buy, sell, and invest in residential and commercial properties with trusted guidance and professional service.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "About Elite Associates Real Estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Elite Associates Real Estate",
    description:
      "Learn more about Elite Associates Real Estate Agency. We help clients buy, sell, and invest in residential and commercial properties with trusted guidance and professional service.",
    images: ["/og-default.png"],
  },
};

const Page = () => {
  return (
    <>
     {/* <AboutHero/> */}
     <Hero/>
     <AboutFeatures/>   
     <Timeline/>
    </>
  )
}

export default Page