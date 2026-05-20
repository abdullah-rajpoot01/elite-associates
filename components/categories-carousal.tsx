"use client";

import * as React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { CategoryType } from "./categories";
import Link from "next/link";

const images = [
  "/categories/homes-category.png",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-038.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
];
export default function CarouselWithProgress({ categories }: { categories: CategoryType[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const progress = (current * 100) / count;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs py-6">
      <Carousel className="w-[95%] max-w-xs" setApi={setApi}>
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Link href="#" key={index}>
                <div className="flex">
                  <div className="aspect-square h-24 shrink-0 overflow-hidden rounded-lg border border-border/20 bg-muted">
                    <img
                      alt=""
                      className="size-full object-center scale-150"
                      height={96}
                      src={category.image}
                      width={96}
                    />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-[calc(100%+0.5rem)] left-0 translate-y-0" />
        <CarouselNext className="top-[calc(100%+0.5rem)] left-2 translate-x-full translate-y-0" />
      </Carousel>
      <Progress className="mt-5 ml-auto w-24" value={progress} />
    </div>
  );
}
