import PropertyCard from "./card";
import { PropertyListing } from "@/content/data";
import LoadMoreButton from "./load-more";

interface ListingSectionProp {
    listings: PropertyListing[]
}
const Listing = ({ listings }: ListingSectionProp) => {
    // Optional: Define fallback contact data to use across all cards
    const fallbackContact = {
        email: "support@example.com",
        whatsapp: "+923009876543",
        phone: "+923009876543"
    };

    return (
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-12 xl:px-0">
            <div className="flex items-end justify-between">
                <h2 className="font-medium text-[1.5rem] sm:text-3xl tracking-tight">
                    Recommended Properties
                </h2>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listings.map((listing) => (
                    <PropertyCard
                        key={listing.id}
                        listing={listing}
                        // Option 1: Use specific contact per card (overrides listing's own contact)
                        contact={fallbackContact}
                    />
                ))}
            </div>

            <LoadMoreButton text="view all listing" url="/listings" />

        </div>
    );
};

export default Listing;