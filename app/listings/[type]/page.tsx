import PropertyCard from '@/components/listing/card';
import { listings } from '@/content/data';
import { notFound } from 'next/navigation';
import React from 'react'
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
                <h2 className="text-pretty font-medium  tracking-[-0.04em] sm:mx-auto sm:max-w-xl  text-center md:text-[2.75rem] md:leading-[1.2] text-2xl  ">
                    Strengthen your strategy
                </h2>
                <p className="mt-3 text-pretty text-muted-foreground text-xl tracking-[-0.01em] text-center ">
                    No complex configs. Just copy, paste, and start building
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