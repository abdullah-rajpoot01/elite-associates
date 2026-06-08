import BuySellSection from "@/components/buy-sell-section";
import Categories from "@/components/categories/categories-section";
import Hero from "@/components/main-hero";
import Testimonials from "@/components/testimonials";
import AboutFeatures from "@/components/about/about-features";
import Listing from "@/components/listing/listing-section";
import { listings } from "@/content/data";


export default function Home() {
  
let featuredListing = listings.filter((listing) => listing.featured).slice(0, 8);
const itemsNeeded = 8 - featuredListing.length;

if (itemsNeeded > 0) {
  // Get featured IDs to avoid duplicates
  const featuredIds = new Set(featuredListing.map(item => item.id));
  
  // Get non-featured listings that aren't already in featuredListing
  const nonFeaturedListings = listings.filter(
    listing => !featuredIds.has(listing.id)
  );
  
  const slicedListings = nonFeaturedListings.slice(0, itemsNeeded);
  featuredListing = [...featuredListing, ...slicedListings];
}
  return (
    <div className="w-full h-full flex flex-col flex-1 items-center justify-center px-">
      <Hero />
      <Categories />
      <Listing listings={featuredListing} />
      <BuySellSection />
      <AboutFeatures />
      <Testimonials />
    </div>
  );
}
