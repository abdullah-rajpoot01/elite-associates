import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative flex   justify-center overflow-hidden px-6 py-8">
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="mx-auto mt-10  w-full font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2]">
          Elite Associates | About Us
        </h1>
        <p className="mx-auto mt-6 w-full text-muted-foreground text-xl md:text-2xl/normal">
          Elite Associates Real Estate Agency helps you buy, sell, and invest in residential and commercial properties with expert guidance and transparent, hassle-free service.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href={"/listings"} className="hover:animate-tada hover:animate-iteration-count-once">
            <Button  size="lg">
              Listings <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </Link>
          <Link href={"/contact-us"} className="hover:animate-tada hover:animate-iteration-count-once">
            <Button
              className="shadow-none"
              size="lg"
              variant="outline"
            >
              <CirclePlay className="h-5! w-5!" /> Contact With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
