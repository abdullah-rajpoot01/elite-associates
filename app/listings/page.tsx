import Listing from '@/components/listing/listings'
import { listings } from '@/content/data'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Properties for Sale & Rent | Elite Associates",
  description:
    "Browse all available properties including houses, villas, apartments, plots, and commercial spaces for sale and rent. Find your ideal property with Elite Associates.",

  metadataBase: new URL("https://eliteassociates.pages.dev"),

  openGraph: {
    title: "All Properties for Sale & Rent | Elite Associates",
    description:
      "Browse all available properties including houses, villas, apartments, plots, and commercial spaces for sale and rent. Find your ideal property with Elite Associates.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Elite Associates Listings",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "All Properties for Sale & Rent | Elite Associates",
    description:
      "Browse all available properties including houses, villas, apartments, plots, and commercial spaces for sale and rent. Find your ideal property with Elite Associates.",
    images: ["/og-default.png"],
  },
};

const Page = () => {

  return (
    <Listing listings={listings} />
  )
}

export default Page