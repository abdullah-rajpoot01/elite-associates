import PropertyCard from "./card";
import { PropertyListing } from "@/content/data";

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
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-8 xl:px-0">
            <div className="flex flex-col items-center text-center pb-8">
                <h2 className="mx-auto mt-5 w-full text-balance font-medium text-2xl tracking-[-0.04em] text-center">
                    Find Your Dream Property – Houses, Apartments & Plots
                </h2>
                <p className="mt-5 text-muted-foreground text-xl tracking-[-0.01em] ">
                    Browse Verified Properties for Sale & Rent
                </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listings.map((listing) => (
                    <PropertyCard
                        key={listing.id}
                        listing={listing}
                        contact={fallbackContact}
                    />
                ))}
            </div>
        </div>
    );
};

export default Listing;