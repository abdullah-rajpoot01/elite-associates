import BuySellSection from "@/components/buy-sell-section";
import Categories from "@/components/categories";
import Hero from "@/components/main-hero";
import Blog from "@/components/listing/listings";
import Testimonials from "@/components/testimonials";
import AboutFeatures from "@/components/about/about-features";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero/>
     <Categories/>
     <Blog/>
     <BuySellSection/>
     <AboutFeatures/>
     <Testimonials/>
    </div>
  );
}
