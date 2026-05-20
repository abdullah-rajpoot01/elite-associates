import { ExternalLink, ImageIcon, LucideShare, Mail, MapPin, Phone, Share } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { WhatsApp } from "./social-icons";
import { IconRenderer } from "./icon_map";

const blogPosts = [
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "2.5 Crore",
        category: "Technology",
        title: "A beginner's guide to blockchain for engineers",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/297592759-800x600.webp",
        features: [
            { icon: "Bed", name: "Bed Rooms", value: "5" },
            { icon: "Toilet", name: "Wash Rooms", value: "3" },
            { icon: "RulerDimensionLine", name: "Area", value: "5" },
            { icon: "Building2", name: "Area", value: "459 sqft to 15394 sqft" },
        ]
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "4.5 Crore",
        category: "Business",
        title: "Understanding React Server Components",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/296928876-800x600.webp",
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "1 Crore",
        category: "Finance",
        title: "10 Useful Shadcn UI Components You Should Know",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/296988233-800x600.webp",
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "65 lacs",
        category: "Health",
        title: "Building a Personal Blog with Next.js",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/296298370-800x600.webp",
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "12.5 Crore",
        category: "Lifestyle",
        title: "The Complete Guide to TypeScript for Beginners",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/293265066-800x600.webp",
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "6.2 Crore",
        category: "Politics",
        title: "Optimizing Web Performance with Next.js",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/293319800-800x600.webp",
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Sold",
        price: "2 Crore",
        category: "Science",
        title: "Deploying Full-Stack Apps on Vercel",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/298062087-800x600.webp",
    },
    {
        location: "Lahore DHA Phase 1",
        status: "For Sale",
        badge: "Super Hot",
        price: "1.8 Crore",
        category: "Sports",
        title: "Getting Started with Modern Web Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image:
            "https://media.zameen.com/thumbnails/296759009-800x600.webp",
        features: [
            { icon: "User", name: "Bed Rooms", value: "5" },
            { icon: "User", name: "Wash Rooms", value: "3" },
        ]
    },
];

const Blog = () => {
    return (
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-5 xl:px-0">
            <div className="flex items-end justify-between">
                <h2 className="font-medium text-[1.5rem] tracking-tight">
                    Recommended Properties
                </h2>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogPosts.map((post) => (
                    <Card
                        className="w-full gap-0 overflow-hidden rounded-lg py-0 shadow-none flex flex-col h-full"
                        key={post.title}
                    >
                        <CardHeader className="relative p-0 shrink-0">
                            <div className="relative aspect-video w-full border-b overflow-hidden bg-gray-100">
                                <img
                                    alt={post.title}
                                    className="object-cover w-full h-full"
                                    src={post.image}
                                />
                                {post.badge && <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10 capitalize">
                                    {post.badge}
                                </div>}
                                {/* Bottom Left Image Count Badge */}
                                <div className="absolute bottom-1 left-1 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-1.5 py-0.5 rounded-sm z-10 flex items-center gap-1">
                                    <ImageIcon className="size-4" />
                                    <span>1</span>
                                </div>
                                {/* Bottom Right Share and location Badge */}
                                <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-1.5 py-0.5 rounded-sm z-10 flex items-center gap-2">
                                    <ExternalLink className="size-4" />
                                    <MapPin className="size-4" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 flex flex-col grow gap-1">
                            <div className="flex items-center gap-3">
                                <Badge className="bg-primary/5 text-[10px] text-primary shadow-none hover:bg-primary/5">
                                    {post.category}
                                </Badge>
                            </div>


                            <h3 className="font-medium text-sm tracking-[-0.02em] line-clamp-1">
                                <span className="text-md">PKR</span>  {post.price}
                            </h3>
                            <h3 className="font-medium text-sm tracking-[-0.02em] line-clamp-1">
                                {post.title}
                            </h3>
                            {post.features && <div className="flex flex-wrap gap-2">
                                {
                                    post.features.map((feature, index) => (<div key={index} className="flex gap-1 text-[10px]">
                                        <IconRenderer className="size-3" name={feature.icon} /><span>{feature.value}</span>
                                    </div>))
                                }
                            </div>}
                            <div className="text-primary text-sm font-bold ">{post.status}</div>
                            <div className="flex gap-2 mt-auto pt-4">
                                <Button variant={"outline"} className="shadow-none border border-primary">
                                    <WhatsApp className="size-4 text-primary" />
                                </Button>
                                <Button variant={"outline"} className="shadow-none border border-primary text-primary">
                                    <Mail className="size-4 " /> Email
                                </Button>
                                <Button className="shadow-none bg-primary text-primary-foreground">
                                    <Phone className="size-4" /> Call
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Blog;