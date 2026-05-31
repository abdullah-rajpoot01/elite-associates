import ListingOverView from '@/components/listing/listing-overview'
import RelatedListing from '@/components/listing/related-listings';
import { listings } from '@/content/data';
import { notFound } from 'next/navigation';

type PageProps = {
    params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
    const { id } = await params;
    const listing = listings.find((li) => li.id === id);

    if (!listing) {
        notFound();
    }

    // Exclude current listing from related listings
    const relatedListings = listings.filter(
        (list) => list.category === listing.category && list.id !== listing.id
    );
    
    const recommendedListing = relatedListings.length >= 1 
        ? relatedListings 
        : listings.filter(l => l.id !== listing.id).slice(0, 8);
    
    const imagesWithThumbnail = [listing.thumbnail, ...listing.images];
    const updatedListing = {
        ...listing,
        images: imagesWithThumbnail
    };
    
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
}

export default Page;