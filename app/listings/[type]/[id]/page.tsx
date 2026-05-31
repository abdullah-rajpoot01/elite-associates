import ListingOverView from '@/components/listing/listing-overview';
import RelatedListing from '@/components/listing/related-listings';
import { listings } from '@/content/data';
import { notFound } from 'next/navigation';

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
