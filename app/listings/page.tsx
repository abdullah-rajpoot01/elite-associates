import ListingOverView from '@/components/listing/listing-overview'
import Listing from '@/components/listing/listings';
import { PropertyListing } from '@/content/data';

const listing: PropertyListing = {
    id: "PROP-1001",
    title: "Modern House in DHA Lahore",
    description: "Beautiful modern house with luxury interior, parking space, and premium location in DHA Lahore. \n Experience unparalleled luxury in this brand-new, architecturally stunning double-unit house located in a highly sought-after DHA block.The property features a striking contemporary elevation, expansive glass windows, and a beautifully landscaped front lawn.Step through the solid wood main entrance into a sprawling, naturally lit drawing and dining area with high ceilings.Features five generously sized bedrooms, each boasting premium attached bathrooms with imported fixtures and sleek glass shower cabins.The heart of the home is a fully equipped, state-of-the-art designer kitchen alongside a convenient grease kitchen.A spacious basement and a stylish TV lounge offer the perfect setting for seamless family gatherings and entertainment.Includes a dedicated maid’s room, a practical laundry area, and a secure, gated garage with ample parking space for multiple vehicles.Fully secured by DHA’s gated infrastructure, boasting a 24/7 internal patrol system for absolute peace of mind.Perfectly positioned just a short distance from major commercial hubs, renowned schools, parks, and the Lahore Ring Road.Offering a flawless blend of elegance and elite community living, this prime real estate asset is a must-view for discerning buyers.",
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
    images: [
        "https://media.zameen.com/thumbnails/281239814-800x600.webp",
        "https://media.zameen.com/thumbnails/297610782-800x600.webp",
        "https://media.zameen.com/thumbnails/297496378-800x600.webp",
        "https://media.zameen.com/thumbnails/297279234-800x600.webp",
        "https://media.zameen.com/thumbnails/297592759-800x600.webp",
    ],
    thumbnail: "https://media.zameen.com/thumbnails/297592759-800x600.webp",
    featured: true,
    createdAt: "2026-05-20T10:00:00Z"
};

const Page = () => {
    const fallbackContact = {
        email: "support@example.com",
        whatsapp: "+923009876543",
        phone: "+923009876543"
    };
    return (
        <div>
            <ListingOverView listing={listing} contact={fallbackContact} />
            <Listing />
        </div>
    )
}

export default Page