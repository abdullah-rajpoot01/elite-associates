export type PropertyPurpose =
    | "for-sale"
    | "for-rent";

export type PropertyBadge =
    | "hot"
    | "new"
    | "price-drop"
    | "sold"
    | "rented";

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



type Category = {
    name: string;

    description: string;

    image: string;

    slug: string;
};
export const categories: Category[] = [
    {
        name: "Luxury Villas",
        description: "Premium villas with modern amenities, swimming pools, and prime locations in gated communities",
        image: "https://media.zameen.com/thumbnails/297592759-800x600.webp",
        slug: "luxury-villas"
    },
    {
        name: "Apartments",
        description: "Modern apartments ranging from studios to penthouses in prime city locations",
        image: "https://media.zameen.com/thumbnails/297496378-800x600.webp",
        slug: "apartments"
    },
    {
        name: "Family Homes",
        description: "Spacious houses perfect for families with gardens, servant quarters, and secure neighborhoods",
        image: "https://media.zameen.com/thumbnails/310541462-800x600.webp",
        slug: "family-homes"
    },
    {
        name: "Commercial",
        description: "Office spaces, retail shops, warehouses, and commercial buildings for business",
        image: "https://media.zameen.com/thumbnails/305749128-800x600.webp",
        slug: "commercial"
    },
    {
        name: "Luxury Apartments",
        description: "High-end apartments with premium finishes, rooftop gardens, and panoramic views",
        image: "https://media.zameen.com/thumbnails/303575906-800x600.webp",
        slug: "luxury-apartments"
    },
    {
        name: "Farm Houses",
        description: "Peaceful farm houses with orchards, swimming pools, and vast land for recreation",
        image: "https://media.zameen.com/thumbnails/308729418-800x600.webp",
        slug: "farm-houses"
    },
    {
        name: "Heritage",
        description: "Historic properties with traditional architecture, renovated with modern amenities",
        image: "https://media.zameen.com/thumbnails/310184665-800x600.webp",
        slug: "heritage"
    }
];
export const listings: PropertyListing[] = [
    {
        id: "PROP-1001",
        title: "Luxury Modern Villa in DHA Lahore",
        description: "Beautiful 5-bedroom luxury villa with modern architecture, swimming pool, and premium finishes. Located in the heart of DHA Phase 6.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 185000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Block C, Main Boulevard",
            coordinates: { lat: 31.4697, lng: 74.2728 }
        },
        contact: {
            email: "agent@example.com",
            whatsapp: "+923001234567",
            phone: "+923001234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area", value: "2 Kanal" },
            { name: "Parking", value: 4 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["swimming-pool", "gym", "garden", "security", "home-theater"],
        images: [
            "https://media.zameen.com/thumbnails/297592759-800x600.webp",
            "https://media.zameen.com/thumbnails/294016160-800x600.webp",
            "https://media.zameen.com/thumbnails/297279234-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/297592759-800x600.webp",
        featured: true,
        createdAt: "2026-05-15T10:00:00Z"
    },
    {
        id: "PROP-1002",
        title: "Modern Apartment in Gulberg",
        description: "Spacious 2-bedroom apartment with city views, central AC, and 24/7 security. Prime location near MM Alam Road.",
        category: "apartments",
        purpose: "for-rent",
        badge: "new",
        price: {
            amount: 150000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Lahore",
            area: "Gulberg III",
            address: "MM Alam Road",
            coordinates: { lat: 31.5204, lng: 74.3587 }
        },
        contact: {
            email: "rentals@cityliving.com",
            whatsapp: "+923001234568",
            phone: "+923001234568"
        },
        details: [
            { name: "Bedrooms", value: 2 },
            { name: "Bathrooms", value: 2 },
            { name: "Area", value: "1500 sq ft" },
            { name: "Parking", value: 1 },
            { name: "Furnished", value: "Semi" }
        ],
        amenities: ["central-ac", "elevator", "backup-power", "security", "parking"],
        images: [
            "https://media.zameen.com/thumbnails/297496378-800x600.webp",
            "https://media.zameen.com/thumbnails/297610782-800x600.webp",
            "https://media.zameen.com/thumbnails/281239814-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/297496378-800x600.webp",
        featured: false,
        createdAt: "2026-05-18T10:00:00Z"
    },
    {
        id: "PROP-1003",
        title: "Family Home with Garden in Islamabad",
        description: "Beautiful 4-bedroom family home with large garden, servant quarters, and modern amenities in prime location.",
        category: "family-homes",
        purpose: "for-sale",
        badge: "price-drop",
        price: {
            amount: 95000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "F-7",
            address: "Street 20, Sector F-7/4",
            coordinates: { lat: 33.7215, lng: 73.0607 }
        },
        contact: {
            email: "homes@islamabadrealty.com",
            whatsapp: "+923001234569",
            phone: "+923001234569"
        },
        details: [
            { name: "Bedrooms", value: 4 },
            { name: "Bathrooms", value: 4 },
            { name: "Area", value: "1.5 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "No" }
        ],
        amenities: ["garden", "play-area", "servant-room", "store-room", "lawn"],
        images: [
            "https://media.zameen.com/thumbnails/310541462-800x600.webp",
            "https://media.zameen.com/thumbnails/310184665-800x600.webp",
            "https://media.zameen.com/thumbnails/308729418-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/310541462-800x600.webp",
        featured: true,
        createdAt: "2026-05-10T10:00:00Z"
    },
    {
        id: "PROP-1004",
        title: "Studio Apartment in Clifton",
        description: "Fully furnished studio with ocean view, gym access, and rooftop lounge. Perfect for professionals.",
        category: "apartments",
        purpose: "for-rent",
        badge: "hot",
        price: {
            amount: 80000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Karachi",
            area: "Clifton",
            address: "Block 2, Near Beach Luxury",
            coordinates: { lat: 24.8104, lng: 67.0316 }
        },
        contact: {
            email: "studio@cityrentals.com",
            whatsapp: "+923001234570",
            phone: "+923001234570"
        },
        details: [
            { name: "Bedrooms", value: 1 },
            { name: "Bathrooms", value: 1 },
            { name: "Area", value: "650 sq ft" },
            { name: "Parking", value: 0 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["gym", "rooftop", "high-speed-wifi", "security", "maintenance"],
        images: [
            "https://media.zameen.com/thumbnails/308445329-800x600.webp",
            "https://media.zameen.com/thumbnails/306658007-800x600.webp",
            "https://media.zameen.com/thumbnails/306356672-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/308445329-800x600.webp",
        featured: false,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PROP-1005",
        title: "Commercial Office Space - DHA Lahore",
        description: "2000 sq ft prime commercial office space on main boulevard. Ideal for corporate offices or bank.",
        category: "commercial",
        purpose: "for-rent",
        badge: undefined,
        price: {
            amount: 350000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 6",
            address: "Commercial Area, Sector Y",
            coordinates: { lat: 31.4697, lng: 74.2728 }
        },
        contact: {
            email: "commercial@primeproperties.com",
            whatsapp: "+923001234571",
            phone: "+923001234571"
        },
        details: [
            { name: "Area", value: "2000 sq ft" },
            { name: "Parking", value: 10 },
            { name: "Washrooms", value: 3 },
            { name: "Floors", value: "Ground" }
        ],
        amenities: ["generator", "security", "cctv", "reception-area", "conference-room"],
        images: [
            "https://media.zameen.com/thumbnails/305749128-800x600.webp",
            "https://media.zameen.com/thumbnails/304999964-800x600.webp",
            "https://media.zameen.com/thumbnails/304559852-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/305749128-800x600.webp",
        featured: true,
        createdAt: "2026-05-12T10:00:00Z"
    },
    {
        id: "PROP-1006",
        title: "Penthouse with Rooftop Garden - Islamabad",
        description: "Exclusive 3-bedroom penthouse featuring private rooftop garden, Jacuzzi, and panoramic city views.",
        category: "luxury-apartments",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 125000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "E-7",
            address: "Margalla Road",
            coordinates: { lat: 33.7268, lng: 73.0765 }
        },
        contact: {
            email: "penthouse@luxuryislamabad.com",
            whatsapp: "+923001234572",
            phone: "+923001234572"
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 4 },
            { name: "Area", value: "3500 sq ft" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["rooftop-garden", "jacuzzi", "sauna", "home-automation", "elevator"],
        images: [
            "https://media.zameen.com/thumbnails/303575906-800x600.webp",
            "https://media.zameen.com/thumbnails/302699890-800x600.webp",
            "https://media.zameen.com/thumbnails/302217577-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/303575906-800x600.webp",
        featured: true,
        createdAt: "2026-05-19T10:00:00Z"
    },
    {
        id: "PROP-1007",
        title: "3-Bedroom Family Apartment - Rawalpindi",
        description: "Spacious apartment in quiet neighborhood close to schools, hospitals, and parks.",
        category: "apartments",
        purpose: "for-sale",
        badge: "price-drop",
        price: {
            amount: 45000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Rawalpindi",
            area: "Gulshan-e-Abbas",
            address: "Main Double Road",
            coordinates: { lat: 33.5651, lng: 73.0169 }
        },
        contact: {
            email: "sales@rawalpindihomes.com",
            whatsapp: "+923001234573",
            phone: "+923001234573"
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 3 },
            { name: "Area", value: "1800 sq ft" },
            { name: "Parking", value: 1 },
            { name: "Furnished", value: "No" }
        ],
        amenities: ["park", "mosque-nearby", "schools-nearby", "hospital-nearby"],
        images: [
            "https://media.zameen.com/thumbnails/301582064-800x600.webp",
            "https://media.zameen.com/thumbnails/297592759-800x600.webp",
            "https://media.zameen.com/thumbnails/294016160-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/301582064-800x600.webp",
        featured: false,
        createdAt: "2026-05-08T10:00:00Z"
    },
    {
        id: "PROP-1008",
        title: "Beach Front Villa - Karachi",
        description: "Luxury 6-bedroom villa with private beach access, infinity pool, and staff quarters.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 350000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Karachi",
            area: "Defence Phase 8",
            address: "Seaview Beach Road",
            coordinates: { lat: 24.8154, lng: 67.0327 }
        },
        contact: {
            email: "beach@luxuryestates.com",
            whatsapp: "+923001234574",
            phone: "+923001234574"
        },
        details: [
            { name: "Bedrooms", value: 6 },
            { name: "Bathrooms", value: 8 },
            { name: "Area", value: "3 Kanal" },
            { name: "Parking", value: 6 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["private-beach", "infinity-pool", "home-cinema", "gym", "spa", "staff-quarters"],
        images: [
            "https://media.zameen.com/thumbnails/297279234-800x600.webp",
            "https://media.zameen.com/thumbnails/297496378-800x600.webp",
            "https://media.zameen.com/thumbnails/297610782-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/297279234-800x600.webp",
        featured: true,
        createdAt: "2026-05-17T10:00:00Z"
    },
    {
        id: "PROP-1009",
        title: "Economical 1-Bedroom Flat - Johar Town",
        description: "Affordable flat ideal for bachelors or small families. Well-maintained building with security.",
        category: "apartments",
        purpose: "for-rent",
        badge: undefined,
        price: {
            amount: 45000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Lahore",
            area: "Johar Town",
            address: "Block B, Near Emporium Mall",
            coordinates: { lat: 31.4504, lng: 74.3078 }
        },
        contact: {
            email: "rentals@cityliving.com",
            whatsapp: "+923001234575",
            phone: "+923001234575"
        },
        details: [
            { name: "Bedrooms", value: 1 },
            { name: "Bathrooms", value: 1 },
            { name: "Area", value: "750 sq ft" },
            { name: "Parking", value: 0 },
            { name: "Furnished", value: "No" }
        ],
        amenities: ["security", "water-supply", "waste-disposal"],
        images: [
            "https://media.zameen.com/thumbnails/281239814-800x600.webp",
            "https://media.zameen.com/thumbnails/310541462-800x600.webp",
            "https://media.zameen.com/thumbnails/310184665-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/281239814-800x600.webp",
        featured: false,
        createdAt: "2026-05-21T10:00:00Z"
    },
    {
        id: "PROP-1010",
        title: "Farm House with Orchard - Multan",
        description: "Beautiful farm house on 4 acres with fruit orchard, swimming pool, and separate guest house.",
        category: "farm-houses",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 220000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Multan",
            area: "Multan Road",
            address: "Near Bahauddin Zakariya University",
            coordinates: { lat: 30.1989, lng: 71.4666 }
        },
        contact: {
            email: "farms@countryestates.com",
            whatsapp: "+923001234576",
            phone: "+923001234576"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 5 },
            { name: "Area", value: "4 Acres" },
            { name: "Parking", value: 10 },
            { name: "Furnished", value: "Semi" }
        ],
        amenities: ["orchard", "swimming-pool", "guest-house", "lawn", "tube-well"],
        images: [
            "https://media.zameen.com/thumbnails/308729418-800x600.webp",
            "https://media.zameen.com/thumbnails/308445329-800x600.webp",
            "https://media.zameen.com/thumbnails/306658007-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/308729418-800x600.webp",
        featured: false,
        createdAt: "2026-05-14T10:00:00Z"
    },
    {
        id: "PROP-1011",
        title: "Corporate Office Building - Karachi",
        description: "8-story commercial building with bank, offices, and restaurant space. Prime downtown location.",
        category: "commercial",
        purpose: "for-sale",
        badge: undefined,
        price: {
            amount: 850000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Karachi",
            area: "Shahrah-e-Faisal",
            address: "Near Airport",
            coordinates: { lat: 24.8802, lng: 67.1195 }
        },
        contact: {
            email: "commercial@primeproperties.com",
            whatsapp: "+923001234577",
            phone: "+923001234577"
        },
        details: [
            { name: "Floors", value: 8 },
            { name: "Area", value: "40000 sq ft" },
            { name: "Parking", value: 50 },
            { name: "Elevators", value: 3 }
        ],
        amenities: ["bank-strongroom", "generator", "cctv", "fire-safety", "central-ac"],
        images: [
            "https://media.zameen.com/thumbnails/306356672-800x600.webp",
            "https://media.zameen.com/thumbnails/305749128-800x600.webp",
            "https://media.zameen.com/thumbnails/304999964-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/306356672-800x600.webp",
        featured: true,
        createdAt: "2026-05-09T10:00:00Z"
    },
    {
        id: "PROP-1012",
        title: "Modern Guest House - Murree",
        description: "Fully furnished guest house with 6 rooms, common lounge, and kitchen. Perfect for Airbnb business.",
        category: "commercial",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 65000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Murree",
            area: "Mall Road",
            address: "Near GPO Chowk",
            coordinates: { lat: 33.9062, lng: 73.3903 }
        },
        contact: {
            email: "guesthouse@hillstations.com",
            whatsapp: "+923001234578",
            phone: "+923001234578"
        },
        details: [
            { name: "Rooms", value: 6 },
            { name: "Bathrooms", value: 7 },
            { name: "Area", value: "2 Kanal" },
            { name: "Parking", value: 4 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["heating", "common-lounge", "kitchen", "terrace", "security"],
        images: [
            "https://media.zameen.com/thumbnails/304559852-800x600.webp",
            "https://media.zameen.com/thumbnails/303575906-800x600.webp",
            "https://media.zameen.com/thumbnails/302699890-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/304559852-800x600.webp",
        featured: false,
        createdAt: "2026-05-16T10:00:00Z"
    },
    {
        id: "PROP-1013",
        title: "Retail Shop - DHA Lahore",
        description: "Corner shop on main road with high foot traffic. Perfect for clothing brand or mobile store.",
        category: "commercial",
        purpose: "for-rent",
        badge: "new",
        price: {
            amount: 120000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Lahore",
            area: "DHA Phase 5",
            address: "Commercial Zone, Sector C",
            coordinates: { lat: 31.4547, lng: 74.2987 }
        },
        contact: {
            email: "retail@shopproperties.com",
            whatsapp: "+923001234579",
            phone: "+923001234579"
        },
        details: [
            { name: "Area", value: "500 sq ft" },
            { name: "Width", value: "20 ft" },
            { name: "Electricity", value: "3-phase" }
        ],
        amenities: ["main-road", "high-footfall", "parking-nearby"],
        images: [
            "https://media.zameen.com/thumbnails/302217577-800x600.webp",
            "https://media.zameen.com/thumbnails/301582064-800x600.webp",
            "https://media.zameen.com/thumbnails/297592759-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/302217577-800x600.webp",
        featured: false,
        createdAt: "2026-05-19T10:00:00Z"
    },
    {
        id: "PROP-1014",
        title: "Luxury 4-Bedroom House with Pool - Islamabad",
        description: "Contemporary home with swimming pool, home theater, and modern architecture in prime location.",
        category: "luxury-villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 165000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "F-6",
            address: "Super Market Road",
            coordinates: { lat: 33.7225, lng: 73.0731 }
        },
        contact: {
            email: "luxury@islamabadrealty.com",
            whatsapp: "+923001234580",
            phone: "+923001234580"
        },
        details: [
            { name: "Bedrooms", value: 4 },
            { name: "Bathrooms", value: 5 },
            { name: "Area", value: "2 Kanal" },
            { name: "Parking", value: 3 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["swimming-pool", "home-theater", "gym", "smart-home", "garden"],
        images: [
            "https://media.zameen.com/thumbnails/294016160-800x600.webp",
            "https://media.zameen.com/thumbnails/297279234-800x600.webp",
            "https://media.zameen.com/thumbnails/297496378-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/294016160-800x600.webp",
        featured: true,
        createdAt: "2026-05-18T10:00:00Z"
    },
    {
        id: "PROP-1015",
        title: "2-Bedroom Apartment Near Airport - Karachi",
        description: "Conveniently located apartment close to airport, ideal for frequent travelers or airline staff.",
        category: "apartments",
        purpose: "for-rent",
        badge: undefined,
        price: {
            amount: 90000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Karachi",
            area: "Gulshan-e-Maymar",
            address: "Near Jinnah Terminal",
            coordinates: { lat: 24.8936, lng: 67.1556 }
        },
        contact: {
            email: "airport@cityrentals.com",
            whatsapp: "+923001234581",
            phone: "+923001234581"
        },
        details: [
            { name: "Bedrooms", value: 2 },
            { name: "Bathrooms", value: 2 },
            { name: "Area", value: "1200 sq ft" },
            { name: "Parking", value: 1 },
            { name: "Furnished", value: "No" }
        ],
        amenities: ["security", "elevator", "water", "power-backup"],
        images: [
            "https://media.zameen.com/thumbnails/297610782-800x600.webp",
            "https://media.zameen.com/thumbnails/281239814-800x600.webp",
            "https://media.zameen.com/thumbnails/310541462-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/297610782-800x600.webp",
        featured: false,
        createdAt: "2026-05-20T10:00:00Z"
    },
    {
        id: "PROP-1016",
        title: "Traditional Haveli - Lahore",
        description: "Historic property renovated with modern amenities while preserving original architecture.",
        category: "heritage",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 75000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Lahore",
            area: "Androon Shehr",
            address: "Near Badshahi Mosque",
            coordinates: { lat: 31.5882, lng: 74.3112 }
        },
        contact: {
            email: "heritage@lahorerealty.com",
            whatsapp: "+923001234582",
            phone: "+923001234582"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 5 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 0 },
            { name: "Furnished", value: "Semi" }
        ],
        amenities: ["courtyard", "woodwork", "traditional-architecture", "modern-kitchen"],
        images: [
            "https://media.zameen.com/thumbnails/310184665-800x600.webp",
            "https://media.zameen.com/thumbnails/308729418-800x600.webp",
            "https://media.zameen.com/thumbnails/308445329-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/310184665-800x600.webp",
        featured: false,
        createdAt: "2026-05-13T10:00:00Z"
    },
    {
        id: "PROP-1017",
        title: "3-Bedroom Corner House - Bahria Town",
        description: "Corner plot house with extra ventilation and natural light. Large lawn and separate drawing/dining.",
        category: "family-homes",
        purpose: "for-sale",
        badge: "price-drop",
        price: {
            amount: 85000000,
            currency: "PKR",
            period: null
        },
        location: {
            city: "Rawalpindi",
            area: "Bahria Town Phase 8",
            address: "Corner Plot, Sector B",
            coordinates: { lat: 33.5651, lng: 73.0169 }
        },
        contact: {
            email: "homes@bahriaproperties.com",
            whatsapp: "+923001234583",
            phone: "+923001234583"
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 3 },
            { name: "Area", value: "1 Kanal" },
            { name: "Parking", value: 2 },
            { name: "Furnished", value: "No" }
        ],
        amenities: ["corner-plot", "lawn", "separate-dining", "store-room"],
        images: [
            "https://media.zameen.com/thumbnails/306658007-800x600.webp",
            "https://media.zameen.com/thumbnails/306356672-800x600.webp",
            "https://media.zameen.com/thumbnails/305749128-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/306658007-800x600.webp",
        featured: false,
        createdAt: "2026-05-11T10:00:00Z"
    },
    {
        id: "PROP-1018",
        title: "Executive Apartment - Blue Area Islamabad",
        description: "High-end apartment with all furnishings included. Perfect for expatriates or executives.",
        category: "apartments",
        purpose: "for-rent",
        badge: "hot",
        price: {
            amount: 180000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Islamabad",
            area: "Blue Area",
            address: "Jinnah Avenue",
            coordinates: { lat: 33.7182, lng: 73.0733 }
        },
        contact: {
            email: "executive@cityliving.com",
            whatsapp: "+923001234584",
            phone: "+923001234584"
        },
        details: [
            { name: "Bedrooms", value: 2 },
            { name: "Bathrooms", value: 2 },
            { name: "Area", value: "1800 sq ft" },
            { name: "Parking", value: 1 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["wifi", "cable", "gym", "pool", "24/7-security"],
        images: [
            "https://media.zameen.com/thumbnails/304999964-800x600.webp",
            "https://media.zameen.com/thumbnails/304559852-800x600.webp",
            "https://media.zameen.com/thumbnails/303575906-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/304999964-800x600.webp",
        featured: true,
        createdAt: "2026-05-17T10:00:00Z"
    },
    {
        id: "PROP-1019",
        title: "Warehouse with Loading Dock - Lahore",
        description: "Large warehouse suitable for storage or distribution center. Easy access to motorway.",
        category: "commercial",
        purpose: "for-rent",
        badge: undefined,
        price: {
            amount: 250000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Lahore",
            area: "Sundar Industrial Estate",
            address: "Main Raiwind Road",
            coordinates: { lat: 31.4374, lng: 74.2257 }
        },
        contact: {
            email: "industrial@commercialproperties.com",
            whatsapp: "+923001234585",
            phone: "+923001234585"
        },
        details: [
            { name: "Area", value: "10000 sq ft" },
            { name: "Height", value: "30 ft" },
            { name: "Loading Docks", value: 2 }
        ],
        amenities: ["loading-dock", "24/7-security", "heavy-electricity", "office-space"],
        images: [
            "https://media.zameen.com/thumbnails/302699890-800x600.webp",
            "https://media.zameen.com/thumbnails/302217577-800x600.webp",
            "https://media.zameen.com/thumbnails/301582064-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/302699890-800x600.webp",
        featured: false,
        createdAt: "2026-05-15T10:00:00Z"
    },
    {
        id: "PROP-1020",
        title: "Cozy Studio Near University - Islamabad",
        description: "Perfect for students. Walking distance to university campus. All utilities included.",
        category: "apartments",
        purpose: "for-rent",
        badge: "new",
        price: {
            amount: 35000,
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Islamabad",
            area: "H-11",
            address: "Near NUST University",
            coordinates: { lat: 33.6452, lng: 73.0181 }
        },
        contact: {
            email: "student@campusrentals.com",
            whatsapp: "+923001234586",
            phone: "+923001234586"
        },
        details: [
            { name: "Bedrooms", value: 1 },
            { name: "Bathrooms", value: 1 },
            { name: "Area", value: "500 sq ft" },
            { name: "Parking", value: 0 },
            { name: "Furnished", value: "Fully" }
        ],
        amenities: ["study-area", "wifi", "laundry", "common-kitchen"],
        images: [
            "https://media.zameen.com/thumbnails/297592759-800x600.webp",
            "https://media.zameen.com/thumbnails/294016160-800x600.webp",
            "https://media.zameen.com/thumbnails/297279234-800x600.webp"
        ],
        thumbnail: "https://media.zameen.com/thumbnails/297592759-800x600.webp",
        featured: false,
        createdAt: "2026-05-21T10:00:00Z"
    }
];;