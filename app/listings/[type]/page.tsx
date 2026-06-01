import PropertyCard from '@/components/listing/card';
import { listings } from '@/content/data';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";

type Props = {
  params: Promise<{ type: "for-sale" | "for-rent" | string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { type } = await params;

  const isForSale = type === "for-sale";
  const isForRent = type === "for-rent";

  if (!isForSale && !isForRent) {
    return {
      title: "Properties | Elite Associates",
      description: "Browse real estate properties with Elite Associates.",
    };
  }

  const title = isForSale
    ? "Properties for Sale | Elite Associates Real Estate"
    : "Properties for Rent | Elite Associates Real Estate";

  const description = isForSale
    ? "Explore properties available for sale including houses, villas, plots, and commercial spaces. Find your perfect investment with Elite Associates."
    : "Browse rental properties including houses, apartments, and commercial spaces. Find affordable and premium rentals with Elite Associates.";

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: isForSale
            ? "Properties for Sale"
            : "Properties for Rent",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.png"],
    },
  };
}
// 1. Define the parameters type
export type CategoryParams = {
  type: "for-sale" | "for-rent";
};

export async function generateStaticParams(): Promise<CategoryParams[]> {
  return [
    { type: "for-sale" },
    { type: "for-rent" },
  ];
}

// 3. Prevent any fallback paths (e.g., /listing/anything-else returns 404)
export const dynamicParams = false;

type PageProps = {
    params: Promise<{ type: string }>;
};

const Page = async ({ params }: PageProps) => {
    const { type } = await params;

    if (type !== "for-sale" && type !== "for-rent") {
        notFound()
    }
    const filteredListings = listings.filter((list) => list.purpose === type);

    const fallbackContact = {
        email: "support@example.com",
        whatsapp: "+923009876543",
        phone: "+923009876543"
    };

    return (
        <div className="min-h-screen flex flex-col gap-8 bg-background py-8 px-5 sm:px-8 ">
            <div>
                <h2 className="text-pretty font-medium  tracking-[-0.04em] sm:mx-auto sm:max-w-5xl  text-center md:text-[2.75rem] md:leading-[1.2] text-2xl  ">
                    Find Properties for {type === "for-sale" ? "Sale" : "Rent"} in your desired location

                </h2>
                <p className="mt-3 text-pretty text-muted-foreground text-xl tracking-[-0.01em] text-center ">
                    Explore our wide range of property types and find your perfect match
                </p>
            </div>
            {/* <Listing /> */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredListings.map((listing) => (
                    <PropertyCard
                        key={listing.id}
                        listing={listing}
                        contact={fallbackContact}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page