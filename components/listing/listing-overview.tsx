"use client"
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactInfo, PropertyListing } from "@/content/data";
import CarouselWithProgress from "../listoverview-images-carousal";
import { WhatsApp } from "../social-icons";
import ShowMoreCollapsible from "../collapsible-02";
import ImagesGalleryDialog from "./zoom-images";
import { Badge } from "../ui/badge";

const formatSlug = (category: string): string => {
    return category.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
};

const formatPKRAmount = (amount: number): string => {
    if (amount >= 10000000) { // 1 Crore = 10,000,000
        const crores = amount / 10000000;
        return `${crores.toFixed(2)} Crore`;
    } else if (amount >= 100000) { // 1 Lac = 100,000
        const lacs = amount / 100000;
        return `${lacs.toFixed(2)} Lac`;
    } else {
        return amount.toLocaleString();
    }
};

interface ListingOverViewProps {
    listing: PropertyListing,
    contact: ContactInfo,
}

const ListingOverView = ({ listing, contact }: ListingOverViewProps) => {
    const contactInfo = listing.contact || contact;

    const formattedAmount = formatPKRAmount(listing.price.amount);

    const handleWhatsAppClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (contactInfo?.whatsapp) {
            window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
        }
    };

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (contactInfo?.email) {
            window.location.href = `mailto:${contactInfo.email}`;
        }
    };

    const handleCallClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (contactInfo?.phone) {
            window.location.href = `tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`;
        }
    };

    return (
        <section className={cn("py-10 px-6 md:px-14")}>
            <div className="container mx-auto">
                <div className="grid gap-10 lg:grid-cols-3 lg:gap-20">
                    {/* Sticky Image Section */}
                    <div className="lg:col-span-1 lg:sticky lg:top-18 lg:self-start relative">
                        <CarouselWithProgress />
                        <ImagesGalleryDialog images={listing.images} />
                    </div>

                    {/* Scrollable Content Section */}
                    <div className="flex flex-col gap-4 lg:col-span-2">
                        <div className="flex items-center gap-1 mb-1">
                            {listing.category && <Badge className="bg-primary/5 text-[10px] text-primary shadow-none hover:bg-primary/5">
                                {formatSlug(listing.category)}
                            </Badge>}
                            {listing.purpose && <Badge className="bg-primary/5 text-[10px] text-primary shadow-none hover:bg-primary/5">
                                {formatSlug(listing.purpose)}
                            </Badge>}
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl text-pretty text-foreground/90">
                                {listing.title}
                            </h1>
                            <h3 className="font-bold text-2xl tracking-[-0.02em] line-clamp-1 mt-2">
                                <span className="">{listing.price.currency}</span> {formattedAmount}
                            </h3>
                            <div className="flex gap-2 flex-wrap justify-center lg:justify-start pt-4" onClick={(e) => e.stopPropagation()}>
                                {contactInfo?.whatsapp && <Button
                                    variant="outline"
                                    className="shadow-none border border-primary text-primary hover:text-primary/90 hover:animate-tada hover:animate-iteration-count-twice"
                                    onClick={handleWhatsAppClick}
                                >
                                    <WhatsApp className="size-4 text-primary" /> Whatsapp
                                </Button>}
                                {contactInfo?.email && <Button
                                    variant="outline"
                                    className="shadow-none border border-primary text-primary hover:text-primary/90 hover:animate-tada hover:animate-iteration-count-twice"
                                    onClick={handleEmailClick}
                                >
                                    <Mail className="size-4" /> Email
                                </Button>}
                                {contactInfo?.phone && <Button
                                    className="shadow-none bg-primary text-primary-foreground hover:animate-tada hover:animate-iteration-count-twice"
                                    onClick={handleCallClick}
                                >
                                    <Phone className="size-4" /> Call
                                </Button>}
                            </div>
                        </div>

                        <div className="space-y-4 mt-8">
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Details
                                </h3>
                                <span className="text-sm text-gray-500">{listing.details.length} items</span>
                            </div>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                                {listing.details.map((detail, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 px-3 py-2 rounded-lg"
                                    >
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {detail.name}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            {detail.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2 mt-6">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Description
                            </h3>
                            {/* <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {listing.description}
                            </p> */}
                            <ShowMoreCollapsible description={listing.description} />
                        </div>

                        <div className="space-y-3 mt-6">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Amenities
                            </h3>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {listing.amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        <svg className="size-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="capitalize">{amenity.replace(/-/g, ' ')}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3 mt-6">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Location
                            </h3>

                            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-primary" />
                                <div>
                                    <p>{listing.location.address}</p>
                                    <p>{listing.location.area}, {listing.location.city}</p>
                                </div>
                            </div>

                            {/* Google Maps Iframe */}
                            {listing.location.coordinates && (
                                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                                    <iframe
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={`https://www.google.com/maps?q=${listing.location.coordinates.lat},${listing.location.coordinates.lng}&z=15&output=embed`}
                                        title="Property location map"
                                        className="w-full"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListingOverView;