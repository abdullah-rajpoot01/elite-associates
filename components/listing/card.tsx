"use client"
// PropertyCard.tsx
import { ExternalLink, ImageIcon, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PropertyListing, ContactInfo } from "@/content/data";
import { WhatsApp } from "../social-icons";
import Link from "next/link";

interface PropertyCardProps {
    listing: PropertyListing;
    contact: ContactInfo; // Optional override contact info
}

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

const formatSlug = (category: string): string => {
    return category.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
};

const PropertyCard: React.FC<PropertyCardProps> = ({ listing, contact }) => {
    // Use provided listing contact or fallback to contact 
    const contactInfo = listing.contact || contact;

    const details = listing.details.slice(0, 5);

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
        <Card className="w-full gap-0 overflow-hidden rounded-lg py-0 shadow-none flex flex-col h-full">
            <CardHeader className="relative p-0 shrink-0">
                <Link href={`/listings/${listing.id}`} className="block">
                    <div className="relative aspect-video w-full border-b overflow-hidden bg-gray-100">
                        <img
                            alt={listing.title}
                            className="object-cover w-full h-full"
                            src={listing.thumbnail}
                        />
                        {listing.badge && (
                            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10 capitalize">
                                {listing.badge}
                            </div>
                        )}
                        {/* Bottom Left Image Count Badge */}
                        {listing.images && listing.images.length > 0 && (
                            <div className="absolute bottom-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-1.5 py-0.5 rounded-sm z-10 flex items-center gap-1">
                                <ImageIcon className="size-4" />
                                <span>{listing.images.length}</span>
                            </div>
                        )}
                    </div>
                </Link>
            </CardHeader>
            <CardContent className="p-4 flex flex-col grow gap-1">
                <Link href={`/listings/${listing.id}`} className="flex flex-col grow gap-1">
                    {listing.category && <div className="flex items-center gap-3">
                        <Badge className="bg-primary/5 text-[10px] text-primary shadow-none hover:bg-primary/5">
                            {formatSlug(listing.category)}
                        </Badge>
                    </div>}

                    <h3 className="font-medium text-sm tracking-[-0.02em] line-clamp-1">
                        <span className="text-md">{listing.price.currency}</span> {formattedAmount}
                    </h3>
                    <h3 className="font-medium text-sm tracking-[-0.02em] line-clamp-1">
                        {listing.title}
                    </h3>
                    {details && (
                        <div className="flex flex-wrap gap-2">
                            {details.map((detail, index) => (
                                <div key={index} className="flex gap-1 text-[10px]">
                                    <span>{detail.name} : </span>
                                    <span>{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    {/* {listing.purpose && <div className="text-primary text-sm font-bold">{formatSlug(listing.purpose)}</div>} */}
                </Link>

                <div className="flex gap-2 mt-auto pt-4" onClick={(e) => e.stopPropagation()}>
                    {contactInfo?.whatsapp && <Button
                        variant="outline"
                        className="shadow-none border border-primary hover:animate-pop hover:animate-iteration-count-infinite"
                        onClick={handleWhatsAppClick}
                    >
                        <WhatsApp className="size-4 text-primary" />
                    </Button>}
                    {contactInfo?.email && <Button
                        variant="outline"
                        className="shadow-none border border-primary text-primary hover:text-primary hover:animate-pop hover:animate-iteration-count-infinite"
                        onClick={handleEmailClick}
                    >
                        <Mail className="size-4" /> Email
                    </Button>}
                    {contactInfo?.phone && <Button
                        className="shadow-none bg-primary text-primary-foreground hover:animate-pop hover:animate-iteration-count-infinite"
                        onClick={handleCallClick}
                    >
                        <Phone className="size-4" /> Call
                    </Button>}
                </div>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;