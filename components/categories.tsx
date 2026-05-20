import Link from "next/link";
import CarouselWithProgress from "./categories-carousal";
import { Building2, Home, HouseHeart, LandPlot, LandPlotIcon, LucideIcon, ShelvingUnit, Store } from "lucide-react";

export interface CategoryType {
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    url: string;
}

const categories: CategoryType[] = [
    {
        title: "Home Living",
        url: "#",
        icon: Home,
        description:
            "Residential houses and apartments.",
        image: "/categories/homes-category.png",
    },
    {
        title: "Plot Land",
        url: "#",
        icon: LandPlotIcon,
        description: "Plots for building or investment.",
        image: "/categories/plots-category.png",
    },
    {
        title: "Retail Shops",
        url: "#",
        icon: Store,
        description: "Prime shop locations ideal for starting or expanding your business.",
        image: "/categories/shops-category.png",
    },
    {
        title: "Open Land",
        url: "#",
        icon: LandPlot,
        description: "Land for farming or investment.",
        image: "/categories/land-category.png",
    },
    {
        title: "Luxury Flats",
        url: "#",
        icon: ShelvingUnit,
        description: "Premium modern apartments.",
        image: "/categories/flats-category.png",
    },
    {
        title: "Commercial Space",
        url: "#",
        icon: Building2,
        description: "Offices and business properties.",
        image: "/categories/commercial-category.png",
    },
    {
        title: "Farm Houses",
        url: "#",
        icon: HouseHeart,
        description: "Countryside luxury living spaces.",
        image: "/categories/farm-houses-category.png",
    }
];

const Features = () => {
    return (
        <div className="px-6 py-6">
            <div className="mx-auto w-full max-w-(--breakpoint-xl)">
                <h2 className="text-pretty font-medium text-xl tracking-[-0.04em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]">
                    Browse Categories
                </h2>
                <p className="mt-3 text-pretty text-muted-foreground text-sm tracking-[-0.01em] sm:text-center md:text-2xl">
                    Quickly explore all property types including residential, commercial, and investment options.
                </p>
                <div className=" mt-12  grid gap-6 sm:mt-18 sm:gap-y-8  grid-cols-3  lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <Link href="#" key={index}>
                            <div className=" flex flex-col md:flex-row  md:max-w-lg items-start md:items-center gap-2 rounded-lg sm:mx-0 group">
                                <div className="aspect-square w-full md:w-auto md:h-24 shrink-0 overflow-hidden rounded-lg border border-border/20 bg-muted flex justify-center items-center">
                                    {<category.icon className="w-1/2 h-1/2 group-hover:text-primary" />}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium text-[12px] md:text-sm  tracking-[-0.015em] group-hover:text-primary transition-colors duration-100">
                                        {category.title}
                                    </span>
                                    <p className="hidden md:inline-flex mt-1 text-muted-foreground group-hover:text-primary transition-colors duration-100 text-sm">
                                        <span className="text-pretty line-clamp-2">
                                            {category.description}
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
