import Features from "@/components/categories";
import Hero from "@/components/hero";
import Blog from "@/components/listings";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero/>
     <Features/>
     <Blog/>
    </div>
  );
}
