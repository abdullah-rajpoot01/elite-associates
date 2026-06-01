import {
  ArrowUpRightIcon,
  BinocularsIcon,
  CogIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonNeon from "./ui/neon-button";

const plusPoints = [
  {
    ctaText: "Buy Now",
    ctaUrl: "/listings/for-sale",
    title: "Buy a property",
    image: "https://www.graana.com/home-page-images/buy.svg",
    description: "Find where \"perfect\" meets \"happy\"",
  },
  {
    ctaText: "Call Now",
    ctaUrl: "tel:+923049645507",
    title: "Sell a property",
    image: "https://www.graana.com/home-page-images/sell.svg",
    description: "Get the best value in any economy",
  },
  {
    ctaText: "Rent Property Now",
    ctaUrl: "/listings/for-rent",
    title: "Rent a property",
    image: "https://www.graana.com/home-page-images/rent.svg",
    description: "Live where you can love",
  },
];
export default function BuySellSection() {
  return (
    <div
      className="mx-auto max-w-(--breakpoint-xl)  px-2 lg:px-12 py-24 text-center bg-background">
      <h2 className="mx-auto mt-5 max-w-4xl text-balance font-medium  tracking-[-0.04em] text-3xl sm:text-4xl">
        Buy, Sell, or Rent With Confidence
      </h2>
      <p className="mt-5 text-muted-foreground tracking-[-0.01em] text-lg sm:text-2xl">
        Find your perfect property or get the best value for your home in any economy.
      </p>
      <div className="mt-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-background rounded-md p-5">
        {plusPoints.map((plusPoint) => (
          <div
            className="relative w-full overflow-hidden rounded-lg border bg-linear-to-b from-foreground/3 px-6 py-10 sm:max-w-xs group"
            key={plusPoint.title}
          >
            <BackgroundPattern />

            <div className="isolate flex flex-col items-center gap-2">
              <img src={plusPoint.image} className="size-40 stroke-[1.5px] text-foreground group-hover:animate-float group-hover:animate-iteration-count-infinite" />
              {/* <plusPoint.icon className="size-14 stroke-[1.5px] text-foreground" /> */}
              <h3 className="mt-8 font-medium text-xl tracking-[-0.005em]">
                {plusPoint.title}
              </h3>
              <p className="text-balance text-base text-muted-foreground">
                {plusPoint.description}
              </p>
              <Link href={plusPoint.ctaUrl}> <ButtonNeon className="mt-6 hover:animate-tada hover:animate-iteration-count-once">
                {plusPoint.ctaText} <ArrowUpRightIcon />
              </ButtonNeon>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
