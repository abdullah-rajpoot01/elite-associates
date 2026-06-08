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

import { X, ZoomIn } from "lucide-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface CarouselWithFooterProps {
    images: string[];
}

export function CarouselWithFooter({ images }: CarouselWithFooterProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

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
        <div className="mx-auto max-w-full py-4">
            <Carousel className="w-full " setApi={setApi}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <img
                                alt="dddepth-248"
                                className="size-full rounded-xl object-cover"
                                src={image}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="top-[calc(100%+0.5rem)] left-0 translate-y-0" />
                <CarouselNext className="top-[calc(100%+0.5rem)] right-0  translate-y-0" />
            </Carousel>
            <div className="mt-4 flex items-center justify-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        className={cn("h-3.5 w-3.5 rounded-full border-2", {
                            "border-primary": current === index + 1,
                        })}
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}



interface AlertDialogWithCustomizedHeaderProps {
    images: string[];
}

export default function AlertDialogWithCustomizedHeader({ images }: AlertDialogWithCustomizedHeaderProps) {
    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="hidden lg:flex gap-2 justify-center items-center absolute top-1 right-1 px-2 py-0"><ZoomIn className="size-4"/> zoom</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="h-[90vh]! w-[90vw]! max-w-none! p-0 hidden  lg:flex flex-col gap-0 ">

                {/* Customized Header */}
                <div className="flex items-center justify-between border-b px-4 py-3 shrink-0">
                    <AlertDialogTitle className="text-lg font-semibold">Images ({images.length})</AlertDialogTitle>
                    <AlertDialogPrimitive.Cancel asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                            <X className="h-4 w-4" />
                        </Button>
                    </AlertDialogPrimitive.Cancel>
                </div>

                {/* Main Content Body */}
                <div className="flex-1 min-h-0 overflow-hidden p-6">
                    <AlertDialogHeader className="h-full">
                        <AlertDialogTitle className="hidden" />
                        <CarouselWithFooter images={images} />
                    </AlertDialogHeader>
                </div>

            </AlertDialogContent>
        </AlertDialog>
    );
}