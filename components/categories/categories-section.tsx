import { categories } from "@/content/data";
import Link from "next/link";
import LoadMoreButton from "../listing/load-more";
import Image from "next/image";



const CategoriesSection = () => {
  const slicedCategories = categories.slice(0, 6);

  return (
    <div className="px-4 lg:px-8 py-20 overflow-x-hidden bg-background w-full">
      <div className="mx-auto w-full">
        <h2 className="text-pretty font-medium  tracking-[-0.04em] sm:mx-auto sm:max-w-3xl text-center md:leading-[1.2] text-3xl sm:text-4xl  ">
          Explore Properties by Category
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground  tracking-[-0.01em] text-center text-lg sm:text-2xl">
           Explore our wide range of property types and find your perfect match
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-18 sm:gap-y-8 md:grid-cols-5 lg:grid-cols-6 ">
          {slicedCategories.map((category, index) => (
            <Link href={`/categories/${category.slug}`} key={index}>
              <div className="-mx-2 flex flex-col max-w-lg  gap-6 rounded-lg sm:mx-0 group">
                <div className="relative aspect-square shrink-0 overflow-hidden rounded-lg border border-border/20 bg-muted group-hover:animate-sink group-hover:animate-iteration-count-infinite ">
                  <Image
                   fill
                    alt=""
                    className=" object-cover"
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
      <LoadMoreButton text="view all Categories" url="/categories" />

    </div>
  );
};

export default CategoriesSection;
