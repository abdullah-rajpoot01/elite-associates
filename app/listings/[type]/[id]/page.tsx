import ListingOverView from '@/components/listing/listing-overview';
import RelatedListing from '@/components/listing/related-listings';
import { listings } from '@/content/data';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";


type Props = {
  params: Promise<{
    type: "for-sale" | "for-rent";
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { type, id } = await params;

  const listing = listings.find(
    (item) => item.id === id && item.purpose === type
  );

  if (!listing) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  const title = `${listing.title} | ${listing.location.city}`;

  const description =
    listing.description ??
    `${listing.category} available ${
      type === "for-sale" ? "for sale" : "for rent"
    } in ${listing.location.area}, ${listing.location.city}.`;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: [
        {
          url: listing.thumbnail,
          alt: listing.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [listing.thumbnail],
    },
  };
}

// 1. Define the structural type matching your route parameters
export type ListingParams = {
  type: "for-sale" | "for-rent";
  id: string;
};

// 2. Generate static paths instantly from your static array
export async function generateStaticParams(): Promise<ListingParams[]> {
  return listings.map((property) => ({
    type: property.purpose as "for-sale" | "for-rent", // maps to [type]
    id: property.id,                                   // maps to [id]
  }));
}

// 3. Keep this false if you only want to allow paths present in your static data array
export const dynamicParams = false;



type PageProps = {
  params: Promise<{ 
    type: "for-sale" | "for-rent" | string; // Stricter typing
    id: string; 
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { type, id } = await params;

  // 1. Route validation guard
  if (type !== "for-sale" && type !== "for-rent") {
    notFound();
  }

  // 2. Find current listing
  const listing = listings.find((li) => li.id === id && li.purpose === type);
  if (!listing) {
    notFound();
  }

  // 3. FIX: Filter related items by category AND purpose, excluding current ID
  const relatedListings = listings.filter(
    (list) => 
      list.category === listing.category && 
      list.purpose === type && 
      list.id !== listing.id
  );

  // 4. Fallback recommended items if no matching category found
  const recommendedListing = relatedListings.length >= 1 
    ? relatedListings 
    : listings.filter(l => l.id !== listing.id).slice(0, 8);

  // 5. De-duplicate images if thumbnail is already inside the images array
  const uniqueImages = Array.from(new Set([listing.thumbnail, ...listing.images]));
  const updatedListing = { ...listing, images: uniqueImages };

  const fallbackContact = {
    email: "support@example.com",
    whatsapp: "+923009876543",
    phone: "+923009876543"
  };

  return (
    <div>
      <ListingOverView listing={updatedListing} contact={fallbackContact} />
      <RelatedListing listings={recommendedListing} />
    </div>
  );
};

export default Page;
