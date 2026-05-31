import { EmptyCategory } from '@/components/categories/empty-category';
import Listing from '@/components/listing/listings';
import { categories, listings } from '@/content/data';
import { notFound } from 'next/navigation';
import React from 'react'
type PageProps = {
    params: Promise<{ slug: string }>;
};
const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const category = categories.find((cta) => cta.slug === slug);
    if (!category) {
        notFound();
    }
    const categoryListing = listings.filter((list) => list.category === category.slug);
    
    if (categoryListing.length !== 0) {
        return <EmptyCategory />
    }
    return (
        <div>

            <div className='flex flex-col justify-center items-center text-center'>

                <h2 className="mx-auto mt-5 max-w-4xl text-balance font-medium text-4xl/tight tracking-[-0.04em] sm:text-2xl">
                    {category.name}
                </h2>
                <p className="mt-5 max-w-4xl text-muted-foreground text-xl tracking-[-0.01em] ">
                    {category.description}
                </p>
            </div>
            {/* <Listing /> */}
            <div></div>

        </div>
    )
}

export default Page