export type PropertyPurpose =
    | "for-sale"
    | "for-rent";

export type PropertyBadge =
    | "hot"
    | "new"
    | "price-drop"
    | "sold" 
    | "rented" ;

export type PropertyDetail = {
    name: string;
    value: string | number;
};

export type ContactInfo = {
    email?: string;
    whatsapp?: string;
    phone?: string;
};


export type PropertyListing = {
    id: string;

    title: string;

    description?: string;

    category?: string;

    purpose?: PropertyPurpose;

    badge?: PropertyBadge;

    price: {
        amount: number;
        currency: string;
        period: string | null;
    };

    location: {
        city: string;
        area: string;
        address: string;

        coordinates?: {
            lat: number;
            lng: number;
        };
    };

    contact?: ContactInfo; // 👈 optional field

    details: PropertyDetail[];

    amenities: string[];

    images: string[];

    thumbnail: string;

    featured: boolean;

    createdAt: string;
};


const listing: PropertyListing = {
    id: "PROP-1001",

    title: "Modern House in DHA Lahore",

    description:
        "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore.",

    category: "luxury-villas",

    purpose: "for-sale", // for-sale | for-rent


    badge: "hot",
    // hot | featured | new | sold | price-drop

    price: {
        amount: 85000000,
        currency: "PKR",
        period: null // monthly for rent
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
        {
            name: "Bedrooms",
            value: 5
        },
        {
            name: "Bathrooms",
            value: 6
        },
        {

            name: "Area",
            value: "1 Kanal"
        },
        {
            name: "Parking",
            value: 2
        },
        {
            name: "Furnished",
            value: "Yes"
        }
    ],

    amenities: [
        "gym",
        "pool",
        "garden",
        "security"
    ],

    images: [
        "/images/property-1.jpg",
        "/images/property-2.jpg",
        "/images/property-3.jpg"
    ],

    thumbnail: "/images/property-1.jpg",

    featured: true,

    createdAt: "2026-05-20T10:00:00Z"
};


type Category = {
    name: string;

    description: string;

    icon: string;

    slug: string;
};

const category: Category = {
    name: "Luxury Villas",

    description:
        "Premium high-end villas with modern architecture and luxury amenities.",

    icon: "Villa", // icon name from your icon library

    slug: "luxury-villas"
};