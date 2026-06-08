"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; 
import Image from "next/image";

interface CarouselPropType {
  images: string[];
}
export default function CarouselWithThumbs({images}:CarouselPropType) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="mx-auto max-w-lg ">
      <Carousel className="w-full  max-w-lg" setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <div className="relative w-full aspect-square">
              <Image 
                alt="dddepth-248"
                className="size-full rounded-xl object-cover"
                src={image}
                fill
                />
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel className="mt-4 w-full  mx-auto">
        <div className="mask-x-from-90%">
          <CarouselContent className="my-1 flex">
            {images.map((image, index) => (
              <CarouselItem
                className={cn(
                  "basis-1/4 cursor-pointer transition-opacity",
                  current === index + 1 ? "opacity-100" : "opacity-50"
                )}
                key={image}
                onClick={() => handleThumbClick(index)}
              >
                <img
                  alt="dddepth-248"
                  className="size-full rounded-xl object-cover"
                  src={image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="hidden md:block">
        <CarouselPrevious  />
        <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
