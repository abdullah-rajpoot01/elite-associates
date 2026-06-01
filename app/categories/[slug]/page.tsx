import { EmptyCategory } from '@/components/categories/empty-category';
import PropertyCard from '@/components/listing/card';
import Listing from '@/components/listing/listings';
import { categories, listings } from '@/content/data';
import { Search } from 'lucide-react';
import { notFound } from 'next/navigation';

// 1. Define the parameters type based on the folder [slug]
export type CategoryPageParams = {
  slug: string;
};

// 2. Generate static paths from your predefined category slugs
export async function generateStaticParams(): Promise<CategoryPageParams[]> {
  return categories.map((category) => ({
    slug: category.slug, // maps directly to [slug] (handles "villas", "Offices", "farm-houses", etc.)
  }));
}

// 3. Enforce 404 for any unregistered slugs (e.g., /categories/penthouses)

type PageProps = {
    params: Promise<{ slug: string }>;
};
const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const category = categories.find((cta) => cta.slug === slug);
    if (!category) {
        notFound();
    }

    const fallbackContact = {
        email: "support@example.com",
        whatsapp: "+923009876543",
        phone: "+923009876543"
    };

    const categoryListing = listings.filter((list) => list.category === category.slug);

    if (categoryListing.length === 0) {
        return <EmptyCategory
            Icon={Search}
            title="No Properties Found"
            description="We couldn't find any properties matching your search. Try adjusting your filters or check back later for new listings."
            primaryBtnTxt="Categories"
            primaryBtnUrl="/categories"
            secondaryBtnTxt="Browse All Properties"
            secondaryBtnUrl="/listings"
        />
    }
    return (
        <div className='px-6 flex flex-col gap-8 py-8'>

            <div className='flex flex-col justify-center items-center text-center'>

                <h2 className="mx-auto mt-5 max-w-4xl text-balance font-medium tracking-[-0.04em]  text-3xl sm:text-4xl">
                    {category.name}
                </h2>
                <p className="mt-5 max-w-4xl text-muted-foreground text-xl sm:text-2xl tracking-[-0.01em] ">
                    {category.description}
                </p>
            </div>
            {/* <Listing /> */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categoryListing.map((listing) => (
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