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
        image: "/listings/Gemini_Generated_Image_x51bk6x51bk6x51b.webp",
        slug: "villas"
    },
    {
        name: "Apartments",
        description: "Modern apartments ranging from studios to penthouses in prime city locations",
        image: "/listings/a2i1.webp",
        slug: "apartments"
    },
    {
        name: "Homes",
        description: "Spacious houses perfect for families with gardens, servant quarters, and secure neighborhoods",
        image: "/listings/h2i1.webp",
        slug: "homes"
    },
    {
        name: "Commercial",
        description: "Office spaces, retail shops, warehouses, and commercial buildings for business",
        image: "/listings/p1i1.webp",
        slug: "commercial"
    },
    {
        name: "Shops",
        description: "Office spaces, retail shops, warehouses, and commercial buildings for business",
        image: "/listings/s1i1.webp",
        slug: "shops"
    },
    {
        name: "Offices",
        description: "Office spaces, retail shops, warehouses, and commercial buildings for business",
        image: "/listings/f2i1.webp",
        slug: "Offices"
    },
    {
        name: "Farm Houses",
        description: "Peaceful farm houses with orchards, swimming pools, and vast land for recreation",
        image: "/listings/fh1i1.webp",
        slug: "farm-houses"
    }
];
export const listings: PropertyListing[] = [
    {
        id: "prop_dha_2026_001",
        title: "1 Kanal Modern Luxury Ultra-Modern House for Sale",
        description: "A stunning, brand-new 1 Kanal ultra-modern architectural masterpiece located in DHA Phase 2, Islamabad. Features imported fittings, double-height lobby, smart home automation, high-end kitchen appliances, and a beautiful rooftop terrace with a scenic view of the Margalla foothills.",
        category: "homes",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 85000000, // 8.5 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Sector J, Street 14, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5352,
                lng: 73.1428
            }
        },
        contact: {
            email: "sales@eliteagents.com",
            whatsapp: "+923001234567",
            phone: "+92511234567"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area Size", value: "1 Kanal" },
            { name: "Stories", value: 2 },
            { name: "Year Built", value: 2026 },
            { name: "Parking Spaces", value: 3 }
        ],
        amenities: [
            "Smart Home Automation",
            "Servant Quarter",
            "Solar Panel System Setup",
            "CCTV Security",
            "Central Heating & Cooling",
            "Jacuzzi",
            "Rooftop BBQ Area"
        ],
        images: [
            "/listings/h1i2.webp",
            "/listings/h1i3.webp",
            "/listings/h1i4.webp"
        ],
        thumbnail: "/listings/h1i1.webp",
        featured: true,
        createdAt: "2026-06-01T09:12:26Z"
    }, {
        id: "prop_dha_2026_002",
        title: "10 Marla Designer House for Sale - Phase 5",
        description: "An elegant, structurally sound 10 Marla contemporary house situated in a highly secure block of DHA Phase 5, Islamabad. This property boasts a minimalist interior design, imported Spanish tile flooring, solid ash wood doors, and a compact manicured lawn. Perfect for a medium-sized family looking for a premium location near the commercial hub.",
        category: "homes",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 48000000, // 4.8 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 5",
            address: "Sector B, Sector Main Boulevard, DHA Phase 5, Islamabad",
            coordinates: {
                lat: 33.5189,
                lng: 73.1714
            }
        },
        contact: {
            whatsapp: "+923339876543",
            phone: "+92519876543" // Left out email to show it's optional
        },
        details: [
            { name: "Bedrooms", value: 4 },
            { name: "Bathrooms", value: 5 },
            { name: "Area Size", value: "10 Marla" },
            { name: "Kitchens", value: 2 },
            { name: "Facing", value: "Park Facing" },
            { name: "Parking Spaces", value: 2 }
        ],
        amenities: [
            "24/7 Security Patrol",
            "Gated Community",
            "Water Borehole",
            "Main Boulevard Access",
            "UPS/Inverter Wiring Complete",
            "Powder Room"
        ],
        images: [
            "/listings/h2i2.webp",
            "/listings/h2i3.webp",
            "/listings/h2i4.webp"
        ],
        thumbnail: "/listings/h2i1.webp",
        featured: false,
        createdAt: "2026-06-01T14:30:00Z"
    },
    {
        id: "prop_dha_2026_003",
        title: "Luxury 3-Bedroom Penthouse with Panoramic Views",
        description: "Experience high-rise luxury living in DHA Phase 2, Islamabad. This exclusive 3-bedroom penthouse features floor-to-ceiling windows, an expansive open-plan layout, a private plunge pool on the balcony, and dedicated basement parking. Located in a secure building right next to the major commercial plazas and fine dining outlets.",
        category: "apartments",
        purpose: "for-sale",
        badge: "price-drop",
        price: {
            amount: 65000000, // 6.5 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Emaar Canyon Views / Goldcrest Highrise, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5224,
                lng: 73.1591
            }
        },
        contact: {
            email: "info@dhahomes.pk" // Only email provided to test optional contact permutations
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 4 },
            { name: "Floor Level", value: "14th Floor" },
            { name: "Total Area", value: "3,200 Sq. Ft." },
            { name: "Maintenance Fee", value: "25,000 PKR/Month" }
        ],
        amenities: [
            "24/7 Power Backup",
            "Private Balcony Plunge Pool",
            "High-Speed Passenger Elevators",
            "Fitness Center & Gym Access",
            "Covered Basement Parking",
            "Fire Fighting System",
            "Concierge Desk"
        ],
        images: [
            "/listings/h3i2.webp",
            "/listings/h3i3.webp",
        ],
        thumbnail: "/listings/h3i1.webp",
        featured: true,
        createdAt: "2026-06-01T18:45:12Z"
    },
    {
        id: "prop_dha_2026_004",
        title: "4 Kanal Exquisite Modern Luxury Farmhouse",
        description: "An unparalleled 4 Kanal contemporary country farmhouse blending rustic charm with sleek modern architecture. Surrounded by lush greenery, this estate features expansive manicured lawns, an open-concept layout with massive glass facades, a private infinity pool, and an outdoor fireplace deck. Ideal for premium luxury living away from the city bustle.",
        category: "homes",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 165000000, // 16.5 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 4",
            address: "River View Block, Executive Farmhouse Enclave, DHA Phase 4, Islamabad",
            coordinates: {
                lat: 33.5041,
                lng: 73.1185
            }
        },
        contact: {
            email: "vip-listings@dharealty.com",
            whatsapp: "+923005551234",
            phone: "+92515551234"
        },
        details: [
            { name: "Bedrooms", value: 4 },
            { name: "Bathrooms", value: 5 },
            { name: "Land Area", value: "4 Kanal" },
            { name: "Covered Area", value: "7,500 Sq. Ft." },
            { name: "Swimming Pool Size", value: "20x40 Ft" },
            { name: "Lawn Area", value: "2.5 Kanal" }
        ],
        amenities: [
            "Private Infinity Pool",
            "Wrap-around Porch",
            "Boundary Wall with Laser Security",
            "Independent Guard Room",
            "Dedicated Water Boring & Filtration Plant",
            "Outdoor BBQ & Fire Pit Kitchen",
            "Fruit Orchard Area"
        ],
        images: [
            "/listings/h4i2.webp",
            "/listings/h4i3.webp",
        ],
        thumbnail: "/listings/h4i1.webp",
        featured: true,
        createdAt: "2026-06-01T21:15:44Z"
    }, {
        id: "prop_dha_2026_005",
        title: "1 Kanal Double Unit Investor House - Phase 1",
        description: "An excellent investment opportunity in DHA Phase 1, Islamabad. This 1 Kanal solid-construction double-unit house features independent entrance stairs for the first floor, dual gas and electricity meters, and premium woodwork throughout. Located in a mature, fully developed sector within walking distance to schools, parks, and the main commercial avenue.",
        category: "homes",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 72000000, // 7.2 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 1",
            address: "Sector F, Street 5, DHA Phase 1, Islamabad",
            coordinates: {
                lat: 33.5512,
                lng: 73.1145
            }
        },
        contact: {
            whatsapp: "+923215556789" // Just WhatsApp to test minimal defined fields
        },
        details: [
            { name: "Bedrooms", value: 6 },
            { name: "Bathrooms", value: 7 },
            { name: "Area Size", value: "1 Kanal" },
            { name: "Kitchens", value: 2 },
            { name: "Unit Type", value: "Independent Double Unit" },
            { name: "Servant Quarters", value: 2 }
        ],
        amenities: [
            "Dual Electricity Meters",
            "Separate Underground Water Tanks",
            "Independent Access Staircase",
            "Solid Ash Wood Cabinets",
            "Marbled Driveway",
            "Walking Distance to Commercial"
        ],
        images: [
            "/listings/h5i2.webp",
            "/listings/h5i3.webp",
        ],
        thumbnail: "/listings/h5i1.webp",
        featured: false,
        createdAt: "2026-06-01T23:40:10Z"
    }, {
        id: "prop_dha_2026_006",
        title: "Premium 2-Bedroom Family Apartment at Goldcrest Views",
        description: "A beautifully finished, vacant 2-bedroom luxury apartment available in the iconic Goldcrest Views towers, DHA Phase 2, Islamabad. Positioned on a middle floor, this corner unit provides abundant natural light and an unblocked view of the central courtyard. Located immediately adjacent to Giga Mall with direct urban highway connectivity.",
        category: "apartments",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 22000000, // 2.2 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Tower 3, Goldcrest Views, Sector A, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5251,
                lng: 73.1610
            }
        },
        contact: {
            email: "listings@giganetwork.pk",
            whatsapp: "+923211112233"
        },
        details: [
            { name: "Bedrooms", value: 2 },
            { name: "Bathrooms", value: 2 },
            { name: "Floor Level", value: "8th Floor" },
            { name: "Apartment Size", value: "1,230 Sq. Ft." },
            { name: "Balconies", value: 1 }
        ],
        amenities: [
            "24/7 Concierge Service",
            "Dedicated Covered Parking Slot",
            "Rooftop Gym Access",
            "Intercom System",
            "Dual Passenger Elevators",
            "High-Speed Internet Infrastructure",
            "Trash Chute System"
        ],
        images: [
            "/listings/a1i2.webp",
            "/listings/a1i3.webp",
        ],
        thumbnail: "/listings/a1i1.webp",
        featured: false,
        createdAt: "2026-06-01T23:55:00Z"
    },
    {
        id: "prop_dha_2026_007",
        title: "Chic 1-Bedroom Executive Flat in DHA Phase 3",
        description: "A masterfully designed 1-bedroom executive flat offering a seamless open-plan kitchen and living space. Features integrated hidden appliances, customized oak wood cabinets, micro-cement flooring, and smart climate zoning. Situated in a newly completed boutique building perfect for young professionals or corporate rentals.",
        category: "apartments",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 14500000, // 1.45 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 3",
            address: "Serene Heights Block, Sector C, DHA Phase 3, Islamabad",
            coordinates: {
                lat: 33.5115,
                lng: 73.1302
            }
        },
        contact: {
            whatsapp: "+923450009988",
            phone: "+92510009988"
        },
        details: [
            { name: "Bedrooms", value: 1 },
            { name: "Bathrooms", value: 1 },
            { name: "Flat Layout", value: "Studio Style Studio-Flat" },
            { name: "Total Area Size", value: "680 Sq. Ft." },
            { name: "Furnished Status", value: "Semi-Furnished" }
        ],
        amenities: [
            "Integrated Kitchen Appliances",
            "Smart Lock Keyless Entry",
            "Dedicated Storage Locker",
            "Secure Resident Access Controls",
            "Backup Generator Line",
            "Double Glazed Noise-Insulating Windows"
        ],
        images: [
            "/listings/a2i2.webp",
            "/listings/a2i3.webp",
        ],
        thumbnail: "/listings/a2i1.webp",
        featured: false,
        createdAt: "2026-06-01T10:00:18Z"
    }, {
        id: "prop_dha_2026_008",
        title: "Spacious 3-Bedroom Corner Flat with Double Balcony",
        description: "An expansive 3-bedroom corner flat located in one of DHA Phase 2's premier mid-rise complexes. This unit stands out with its dual wide balconies offering views of the central park, a completely separate dining lounge, and attached maid's quarters. Fully equipped with Turkish kitchen fittings and central gas lines already active.",
        category: "apartments",
        purpose: "for-sale",
        badge: "price-drop",
        price: {
            amount: 34000000, // 3.4 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Parkside Residences, Sector E, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5285,
                lng: 73.1552
            }
        },
        contact: {
            email: "contact@parkside-dha.pk",
            whatsapp: "+923124445566",
            phone: "+92514445566"
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 4 },
            { name: "Flat Size", value: "1,950 Sq. Ft." },
            { name: "Floor Level", value: "4th Floor" },
            { name: "Balconies", value: 2 },
            { name: "Maid Quarters", value: 1 }
        ],
        amenities: [
            "Dedicated Basement Parking",
            "Dedicated Cargo & Passenger Elevators",
            "Active Gas & Water Connections",
            "24/7 Monitored CCTV Security",
            "Community Park View",
            "In-house Maintenance Team"
        ],
        images: [
            "/listings/a3i2.webp",
            "/listings/a3i3.webp",
            "/listings/a3i4.webp",
        ],
        thumbnail: "/listings/a3i1.webp",
        featured: true,
        createdAt: "2026-06-01T15:20:45Z"
    },
    {
        id: "prop_dha_2026_013",
        title: "Spacious 3-Bedroom Corner Flat with Double Balcony",
        description: "An expansive 3-bedroom corner flat located in one of DHA Phase 2's premier mid-rise complexes. This unit stands out with its dual wide balconies offering views of the central park, a completely separate dining lounge, and attached maid's quarters. Fully equipped with Turkish kitchen fittings and central gas lines already active.",
        category: "apartments",
        purpose: "for-sale",
        badge: "price-drop",
        price: {
            amount: 34000000, // 3.4 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Parkside Residences, Sector E, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5285,
                lng: 73.1552
            }
        },
        contact: {
            email: "contact@parkside-dha.pk",
            whatsapp: "+923124445566",
            phone: "+92514445566"
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 4 },
            { name: "Flat Size", value: "1,950 Sq. Ft." },
            { name: "Floor Level", value: "4th Floor" },
            { name: "Balconies", value: 2 },
            { name: "Maid Quarters", value: 1 }
        ],
        amenities: [
            "Dedicated Basement Parking",
            "Dedicated Cargo & Passenger Elevators",
            "Active Gas & Water Connections",
            "24/7 Monitored CCTV Security",
            "Community Park View",
            "In-house Maintenance Team"
        ],
        images: [
            "/listings/a4i2.webp",
            "/listings/a4i3.webp",
            "/listings/a4i4.webp",
        ],
        thumbnail: "/listings/a4i1.webp",
        featured: true,
        createdAt: "2026-06-01T15:20:45Z"
    }, {
        id: "prop_dha_2026_011",
        title: "8 Marla Corporate Plaza Plot - DHA Phase 5 Main Boulevard",
        description: "A highly lucrative 8 Marla premium commercial plot located on the primary commercial loop of DHA Phase 5, Islamabad. This site offers an expansive 40-foot front facing the main boulevard, with pre-cleared permissions for an extensive multi-level retail and corporate office development. Fully developed with immediate utility connections available.",
        category: "commercial",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 120000000, // 12 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 5",
            address: "Commercial Broadway, Main Sector Boulevard, DHA Phase 5, Islamabad",
            coordinates: {
                lat: 33.5165,
                lng: 73.1742
            }
        },
        contact: {
            whatsapp: "+923335554433",
            phone: "+92515554433"
        },
        details: [
            { name: "Plot Size", value: "8 Marla" },
            { name: "Dimensions", value: "40 x 45 Ft" },
            { name: "Frontage Road Width", value: "120 Feet" },
            { name: "Permitted Height", value: "Basement + LG + G + 5 Floors" },
            { name: "Zoning Category", value: "Retail & Corporate Offices" },
            { name: "Transfer Type", value: "Direct Allocation / Immediate Transfer" }
        ],
        amenities: [
            "120-Ft Main Boulevard Facing",
            "Dual-Side Open (Front and Back Alley)",
            "Underground High-Voltage Power Grid",
            "High-Volume Fiber Optic Line Ready",
            "Pre-Installed Commercial Drainage",
            "Central Car Parking Arcade Access",
            "Water Boring Allowed"
        ],
        images: [
            "/listings/p1i1.webp", // Development/site context
        ],
        thumbnail: "/listings/p1i1.webp",
        featured: false,
        createdAt: "2026-06-01T21:10:15Z"
    },
    {
        id: "prop_dha_2026_012",
        title: "1 Kanal Residential Plot for Sale - Phase 4 Overseas Block",
        description: "An exceptional, fully leveled 1 Kanal residential plot located in the premium, highly elevated Overseas Block of DHA Phase 4, Islamabad. This plot offers panoramic views of the Soan River basin and is surrounded by rapid high-end villa construction. All development charges are fully paid, making it ready for immediate map approval and groundbreaking.",
        category: "commercial",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 1602500000, // 3.25 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 4",
            address: "Block C, Sector 2, DHA Phase 4, Islamabad",
            coordinates: {
                lat: 33.4985,
                lng: 73.1241
            }
        },
        contact: {
            email: "plots@dha-investments.pk",
            whatsapp: "+923015557788"
        },
        details: [
            { name: "Plot Size", value: "1 Kanal" },
            { name: "Dimensions", value: "50 x 90 Ft" },
            { name: "Street Width", value: "40 Feet" },
            { name: "Plot Type", value: "Regular / Category Plot" },
            { name: "Development Status", value: "100% Developed / Possession Ready" },
            { name: "Dues Status", value: "All Development Charges Paid" }
        ],
        amenities: [
            "Underground Utility Grid (Gas/Water/Electric)",
            "River View / Elevated Topology",
            "Walking Distance to Sector Mosque & Park",
            "Gated Block with 24/7 Security Checkpoint",
            "Pre-Cleared for Immediate Construction",
            "Sewerage System Hookup Ready"
        ],
        images: [
            "/listings/p2i1.webp", // Raw green land plot
        ],
        thumbnail: "/listings/p2i1.webp",
        featured: false,
        createdAt: "2026-06-01T22:45:00Z"
    }, {
        id: "prop_dha_2026_0110",
        title: "Modern Retail Shop in Luxury Commercial Mall",
        description: "An excellent investment opportunity or retail space setup in DHA Phase 2, Islamabad. This compact shop is situated on the first floor of a newly developed high-footfall commercial plaza. Perfectly suited for a boutique apparel studio, mobile franchise, or specialized electronics kiosk.",
        category: "shops",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 4500000, // 45 Lacs PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "First Floor, Central Business Arcade, Sector D, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5264,
                lng: 73.1578
            }
        },
        contact: {
            email: "retail@dhabusiness.pk",
            whatsapp: "+923125553344"
        },
        details: [
            { name: "Property Type", value: "Commercial Shop" },
            { name: "Total Area Size", value: "220 Sq. Ft." },
            { name: "Floor Level", value: "1st Floor" },
            { name: "Frontage Width", value: "12 Feet" },
            { name: "Monthly Rental Value", value: "25,000 PKR" }
        ],
        amenities: [
            "Central Air Conditioning Infrastructure",
            "Glass Front Facade Installed",
            "High-Visibility Corridor Placement",
            "24/7 Mall Security & CCTV",
            "Shared Commercial Restrooms",
            "Escalator & Elevator Proximity",
            "Backup Power Generator Connection"
        ],
        images: [
            "/listings/s1i2.webp", // Shop interior/retail vibe
            "/listings/s1i3.webp", // Shop interior/retail vibe
        ],
        thumbnail: "/listings/s1i1.webp",
        featured: false,
        createdAt: "2026-06-01T23:12:00Z"
    }, {
        id: "prop_dha_2026_014",
        title: "Ground Floor Premium Food Court Kiosk",
        description: "A high-visibility 180 Sq. Ft. commercial shop/kiosk tailored specifically for a fast-food franchise or dessert parlor. Located on the bustling lower ground level food enclave in DHA Phase 5. Benefits from an immediate shared seating layout and exceptional daily foot traffic.",
        category: "shops",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 5000000, // 50 Lacs PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 5",
            address: "Lower Ground Floor, Broadway Heights Mall, DHA Phase 5, Islamabad",
            coordinates: {
                lat: 33.5175,
                lng: 73.1728
            }
        },
        contact: {
            whatsapp: "+923347778811",
            phone: "+92517778811"
        },
        details: [
            { name: "Property Type", value: "Food Court Shop / Kiosk" },
            { name: "Total Area Size", value: "180 Sq. Ft." },
            { name: "Floor Level", value: "Lower Ground" },
            { name: "Utility Counter Meter", value: "Independent Commercial" },
            { name: "Estimated ROI", value: "7.5% Annually" }
        ],
        amenities: [
            "Dedicated Kitchen Gas Extraction Vent",
            "Pre-Installed Water Supply & Drainage Point",
            "Direct Access to Shared Food Court Seating",
            "24/7 Power Backup (Dual Generator)",
            "Fire Sprinkler & Smoke Detection System",
            "Central Mall Audio & Wi-Fi Network"
        ],
        images: [
            "/listings/s2i2.webp", // Shop interior/retail vibe
        ],
        thumbnail: "/listings/s2i1.webp",
        featured: true,
        createdAt: "2026-06-01T23:45:10Z"
    }, {
        id: "prop_dha_2026_015",
        title: "Premium Corporate Office Space in Business Hub Plaza",
        description: "An exceptional, fully corporate-ready office space occupying a prime corner position on the 5th floor of a prestigious commercial high-rise in DHA Phase 2. This space features massive double-glazed soundproof glass walls that overlook the main expressway, an executive suite layout, open-plan workstations, and an independent server room.",
        category: "Offices",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 44000000, // 4.4 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "5th Floor, Alpha Corporate Tower, Main World Trade Center Boulevard, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5228,
                lng: 73.1544
            }
        },
        contact: {
            email: "corporate@alphatowers.pk",
            whatsapp: "+923015559900",
            phone: "+92515559900"
        },
        details: [
            { name: "Property Type", value: "Commercial Office" },
            { name: "Total Area Size", value: "2,400 Sq. Ft." },
            { name: "Floor Level", value: "5th Floor" },
            { name: "Executive Cabins", value: 3 },
            { name: "Dedicated Parking Slots", value: 2 },
            { name: "Conference Rooms", value: 1 }
        ],
        amenities: [
            "High-Speed Fiber Optic Internet Infrastructure",
            "Dedicated Server Room with Independent Cooling",
            "24/7 Smart Card Access Control",
            "Centralized VRF Air Conditioning Setup",
            "Dedicated Executive Restrooms",
            "Dual Passenger & Cargo Elevators",
            "100% Uninterrupted Power Backup"
        ],
        images: [
            "/listings/f1i2.webp", // Corporate office open space
            "/listings/f1i3.webp", // Conference room / cabin view
            "/listings/f1i4.webp"  // Modern glass commercial exterior
        ],
        thumbnail: "/listings/f1i1.webp",
        featured: true,
        createdAt: "2026-06-01T10:35:22Z"
    }, {
        id: "prop_dha_2026_016",
        title: "9.5 Crore Luxury Corporate Headquarter Floor Wing",
        description: "An elite, sprawling corporate office layout spanning a massive half-floor wing in a Grade-A commercial tower within DHA Phase 2, Islamabad. Designed for multinatonal firms, tech hubs, or large financial institutes, this premium space includes fully integrated data cabling, a grand reception lounge, an expansive boardroom, and glass-partitioned managerial suites with panoramic city views.",
        category: "Offices",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 95000000, // 9.50 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "9th Floor, Apex Commercial Tower, Giga Downtown District, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5245,
                lng: 73.1595
            }
        },
        contact: {
            email: "institutional-sales@apexrealestate.pk",
            whatsapp: "+923215550099"
        },
        details: [
            { name: "Property Type", value: "Corporate Floor Wing" },
            { name: "Total Area Size", value: "4,850 Sq. Ft." },
            { name: "Floor Level", value: "9th Floor (Corner)" },
            { name: "Managerial Cabins", value: 8 },
            { name: "Conference Boardrooms", value: 2 },
            { name: "Reserved Basement Parking Slots", value: 5 }
        ],
        amenities: [
            "Dedicated Executive Elevator Access",
            "CAT-6 Network Structural Cabling Throughout",
            "Biometric Fingerprint & Face-ID Entry Gate",
            "Dual Zoned Central VRF Climate Control",
            "Private In-Office Kitchenette & Coffee Bar",
            "High-Capacity Server Room with Fire Suppressors",
            "24/7 Corporate Concierge & Building Management"
        ],
        images: [
            "/listings/f2i2.webp", // Corporate office open space
            "/listings/f2i3.webp", // Modern corporate conference boardroom
        ],
        thumbnail: "/listings/f2i1.webp",
        featured: true,
        createdAt: "2026-06-01T10:39:00Z"
    }, {
        id: "prop_dha_2026_017",
        title: "2 Kanal Compact Contemporary Farmhouse",
        description: "An elegant and modern 2 Kanal boutique farmhouse setup located in the scenic, serene outskirts of DHA Phase 4 Extension / Phase 3. This property offers the perfect balance of rustic farmhouse living and modern lifestyle amenities. Features an open-concept kitchen, manicured boundary lawns, an organic kitchen garden patch, and an elevated patio deck ideal for evening barbecues.",
        category: "farm-houses",
        purpose: "for-sale",
        badge: "new",
        price: {
            amount: 65000000, // 6.5 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 4",
            address: "Green Meadows Block, Phase 4 Extension, DHA, Islamabad",
            coordinates: {
                lat: 33.4912,
                lng: 73.1094
            }
        },
        contact: {
            email: "greenliving@dharealty.com",
            whatsapp: "+923334441122",
            phone: "+92514441122"
        },
        details: [
            { name: "Bedrooms", value: 3 },
            { name: "Bathrooms", value: 4 },
            { name: "Total Land Size", value: "2 Kanal" },
            { name: "Covered Area Size", value: "4,200 Sq. Ft." },
            { name: "Lawn Area Size", value: "1.2 Kanal" },
            { name: "Stories", value: 1 }
        ],
        amenities: [
            "Organic Kitchen Garden Patch",
            "Elevated Outdoor Barbecue Deck",
            "Dedicated Water Boring System",
            "Secured Boundary Wall with Razor Wire",
            "Detached Guard Room & Servant Quarter",
            "Pre-Installed Solar Inverter Wiring",
            "Perimeter Floodlight System"
        ],
        images: [],
        thumbnail: "/listings/fh1i1.webp",
        featured: false,
        createdAt: "2026-06-01T10:44:33Z"
    }, {
        id: "prop_dha_2026_018",
        title: "13.5 Crore Ultra-Luxury Designer Villa Overlooking Golf Course",
        description: "An architectural masterpiece in DHA Phase 2 (Emaar Canyon Views / Golf Enclave). This magnificent 1 Kanal designer villa features custom Spanish stone facades, double-height ceilings, a private glass-walled infinity pool, and a custom automated home theater system. Crafted for premium luxury living with breathtaking sunset views over the golf course.",
        category: "villas",
        purpose: "for-sale",
        badge: "hot",
        price: {
            amount: 135000000, // 13.5 Crore PKR
            currency: "PKR",
            period: null
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Golf Course Enclave, Sector View Block, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5298,
                lng: 73.1624
            }
        },
        contact: {
            email: "executive@signaturevillas.pk",
            whatsapp: "+923005554499",
            phone: "+92515554499"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Total Area Size", value: "1 Kanal" },
            { name: "Covered Area", value: "6,800 Sq. Ft." },
            { name: "Home Theater Capacity", value: "8 Seats" },
            { name: "Basement Level", value: "Fully Finished Lounge" }
        ],
        amenities: [
            "Private Glass-Walled Infinity Pool",
            "Full Smart Home Automation (Crestron)",
            "Premium Turkish/Italian Designer Kitchens",
            "Dedicated Soundproof Home Theater Room",
            "15kW Hybrid Solar Power System Installed",
            "Panoramic Golf Course Views",
            "Independent 2-Room Servant Quarter Wing"
        ],
        images: [
            "/listings/v1i2.webp", // Luxury villa exterior with pool
            "/listings/v1i3.webp", // Luxury villa exterior with pool
        ],
        thumbnail: "/listings/v1i1.webp",
        featured: true,
        createdAt: "2026-06-01T11:23:51Z"
    }, {
        id: "prop_dha_2026_019",
        title: "1 Kanal Beautiful Executive House for Rent - DHA Phase 2",
        description: "A meticulously maintained, beautifully designed 1 Kanal family home available for immediate rent in a peaceful block of DHA Phase 2, Islamabad. Features a spacious double-height lounge, a large separate dining hall, solid ash wood carpentry, and two independent kitchens. Perfectly suited for expatriates, corporate executives, or diplomatic staff.",
        category: "homes",
        purpose: "for-rent",
        badge: "new",
        price: {
            amount: 2400000, // 2.40 Lacs PKR
            currency: "PKR",
            period: "monthly" // 👈 Populated for rental structure tracking
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Sector G, Street 8, Near Central Park, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5278,
                lng: 73.1539
            }
        },
        contact: {
            email: "rentals@eliteagents.com",
            whatsapp: "+923009876543",
            phone: "+92519876543"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area Size", value: "1 Kanal" },
            { name: "Independent Kitchens", value: 2 },
            { name: "Servant Quarters", value: 1 },
            { name: "Advance Security Deposit", value: "3 Months Rental" }
        ],
        amenities: [
            "Separate Gas & Electricity Meters",
            "Large Covered Parking Garage (3 Cars)",
            "Underground & Overhead Water Storage Tanks",
            "Walking Distance to Main Commercial Corridor",
            "UPS/Inverter Line Configuration Complete",
            "High-Security Gated Block Street Patrol",
            "Beautiful Lawn and Patio Garden Area"
        ],
        images: [
            "/listings/rh1i2.webp", // Main house facade
            "/listings/rh1i3.webp", // Main house facade
            "/listings/rh1i4.webp", // Main house facade
        ],
        thumbnail: "/listings/rh1i1.webp",
        featured: false,
        createdAt: "2026-06-01T11:28:14Z"
    }, {
        id: "prop_dha_2026_020",
        title: "10 Marla Executive House for Rent - Sector A, Phase 5",
        description: "A beautifully constructed, structurally sound 10 Marla double-story house available for rent in DHA Phase 5, Islamabad. The property features a compact, smart-spatial layout including a brightly lit lounge, modern kitchen cabinets, and imported tile work. Located in a pristine, secured street just minutes away from the main commercial boulevard and sports complex.",
        category: "homes",
        purpose: "for-rent",
        badge: "hot",
        price: {
            amount: 145000, // 1.45 Lacs PKR
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 5",
            address: "Sector A, Street 3, DHA Phase 5, Islamabad",
            coordinates: {
                lat: 33.5142,
                lng: 73.1691
            }
        },
        contact: {
            whatsapp: "+923315558822",
            phone: "+92515558822"
        },
        details: [
            { name: "Bedrooms", value: 4 },
            { name: "Bathrooms", value: 5 },
            { name: "Area Size", value: "10 Marla" },
            { name: "Kitchens", value: 2 },
            { name: "Parking Spaces", value: 2 },
            { name: "Security Deposit", value: "2 Months Advance" }
        ],
        amenities: [
            "24/7 Gated Security Patrol",
            "Dedicated UPS & Inverter Wiring Setup",
            "Active Sui Gas Meter",
            "Compact Front Manicured Lawn",
            "Powder Room for Guests",
            "Walking Distance to Sector Park & Mosque"
        ],
        images: [
            "/listings/rh2i1.webp", // Main house facade
            "/listings/rh2i3.webp", // Main house facade
        ],
        thumbnail: "/listings/rh2i2.webp",
        featured: false,
        createdAt: "2026-06-01T11:33:00Z"
    }, {
        id: "prop_dha_2026_021",
        title: "Luxurious 20 Marla Brand New House for Rent",
        description: "An ultra-modern, newly constructed 20 Marla (1 Kanal) double-story residence available for immediate lease in DHA Phase 2, Islamabad. Designed with an expansive open-layout concept, this high-end property boasts massive drawing and dining halls, solid Turkish tile finishes, a premium dirty-kitchen annex, and a wonderfully landscaped front lawn area. Perfect for elite diplomatic or executive families.",
        category: "homes",
        purpose: "for-rent",
        badge: "hot",
        price: {
            amount: 310000, // 3.10 Lacs PKR
            currency: "PKR",
            period: "monthly"
        },
        location: {
            city: "Islamabad",
            area: "DHA Phase 2",
            address: "Sector B, Main Park Avenue, DHA Phase 2, Islamabad",
            coordinates: {
                lat: 33.5251,
                lng: 73.1567
            }
        },
        contact: {
            email: "leasing@dhapremier.com",
            whatsapp: "+923219994455"
        },
        details: [
            { name: "Bedrooms", value: 5 },
            { name: "Bathrooms", value: 6 },
            { name: "Area Size", value: "20 Marla / 1 Kanal" },
            { name: "Covered Area", value: "5,400 Sq. Ft." },
            { name: "Servant Quarters", value: 2 },
            { name: "Security Deposit", value: "3 Months Advance" }
        ],
        amenities: [
            "10kW Net-Metered Solar Panel Grid",
            "Smart App-Controlled CCTV Network",
            "Secured Covered Garage (Up to 4 Cars)",
            "Premium Imported Jacuzzi Baths",
            "Dedicated Laundry and Storage Rooms",
            "Active Independent Gas and Water Meters",
            "Breathtaking Skyline and Park View Deck"
        ],
        images: [
            "/listings/rh3i2.webp", // Main house facade
        ],
        thumbnail: "/listings/rh3i1.webp",
        featured: true,
        createdAt: "2026-06-01T11:38:35Z"
    }
];