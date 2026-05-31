import BuySellSection from "@/components/buy-sell-section";
import Categories from "@/components/categories/categories-section";
import Hero from "@/components/main-hero";
import Testimonials from "@/components/testimonials";
import AboutFeatures from "@/components/about/about-features";
import Listing from "@/components/listing/listing-section";
import { listings } from "@/content/data";


export default function Home() {
  const slicedListing = listings.slice(0, 8);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Categories />
      <Listing listings={slicedListing} />
      <AboutFeatures />
      <BuySellSection />
      <Testimonials />
    </div>
  );
}
