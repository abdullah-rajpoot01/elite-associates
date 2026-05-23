// Listing.tsx
import PropertyCard from "./card";
import { PropertyListing } from "@/content/data";

const listings: PropertyListing[] = [
    {
        id: "PROP-10012",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/297592759-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PROP-10021",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/294016160-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PROP-21001",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/297592759-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "2ROP-1001",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/297279234-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PRO2P-1001",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/297496378-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PR2OP-1001",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/297610782-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PROP-10201",
        title: "Modern House in DHA Lahore",
        description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C",
            coordinates: {
                lat: 31.4697,
                lng: 74.2728
            }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Yes" }
        ],
        amenities: ["gym", "pool", "garden", "security"],
        images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
        thumbnail: "https://media.zameen.com/thumbnails/281239814-800x600.webp",
        featured: true,
        createdAt: "2026-05-20T10:00:00Z"
    },
];

const Listing = () => {
    // Optional: Define fallback contact data to use across all cards
    const fallbackContact = {
        email: "support@example.com",
        whatsapp: "+923009876543",
        phone: "+923009876543"
    };

    return (
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-12 xl:px-0">
            <div className="flex items-end justify-between">
                <h2 className="font-medium text-[1.5rem] tracking-tight">
                    Recommended Properties
                </h2>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listings.map((listing) => (
                    <PropertyCard
                        key={listing.id}
                        listing={listing}
                        // Option 1: Use specific contact per card (overrides listing's own contact)
                        contact={fallbackContact}

                    // Option 2: Let the card use listing's own contact
                    // contact={listing.contact}

                    // Option 3: If you want to use fallback only when listing has no contact
                    // contact={listing.contact || fallbackContact}
                    />
                ))}
            </div>
        </div>
    );
};

export default Listing;