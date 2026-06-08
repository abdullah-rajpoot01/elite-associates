import { categories } from '@/content/data'
import Link from 'next/link'
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Property Categories | Elite Associates",
  description:
    "Browse property categories including houses, villas, offices, plots, and farm houses. Find the perfect property type with Elite Associates Real Estate.",

  openGraph: {
    title: "Property Categories | Elite Associates",
    description:
      "Browse property categories including houses, villas, offices, plots, and farm houses. Find the perfect property type with Elite Associates Real Estate.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Elite Associates Property Categories",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Property Categories | Elite Associates",
    description:
      "Browse property categories including houses, villas, offices, plots, and farm houses. Find the perfect property type with Elite Associates Real Estate.",
    images: ["/og-default.png"],
  },
};


const Page = () => {
    return (
        <div className='min-h-screen bg-background py-8 px-5 sm:px-8 '>
            <h2 className="text-pretty font-medium  tracking-[-0.04em] sm:mx-auto sm:max-w-4xl  text-center md:text-[2.75rem] md:leading-[1.2] text-2xl  ">
                Explore Properties by Category
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground text-xl tracking-[-0.01em] text-center ">
                Explore our wide range of property types and find your perfect match
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-18 sm:gap-y-8 md:grid-cols-5 lg:grid-cols-6 ">
                {categories.map((category, index) => (
                    <Link href={`/categories/${category.slug}`} key={index}>
                        <div className="-mx-2 flex flex-col max-w-lg  gap-6 rounded-lg sm:mx-0 group">
                            <div className="relative aspect-square shrink-0 overflow-hidden rounded-lg border border-border/20 bg-muted group-hover:animate-sink group-hover:animate-iteration-count-infinite ">
                                <Image fill
                                    alt={category.slug}
                                    className="size-full object-cover"
                                    src={category.image}
                                />
                            </div>
                            <div className="">
                                <span className="font-medium text-sm tracking-[-0.015em]">
                                    {category.name}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Page