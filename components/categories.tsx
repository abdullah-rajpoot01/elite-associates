import Link from "next/link";
import CarouselWithProgress from "./categories-carousal";

export interface CategoryType {
    title: string;
    description: string;
    image: string;
    url: string;
}

const categories: CategoryType[] = [
    {
        title: "Home Living",
        url: "#",
        description:
            "Residential houses and apartments.",
        image: "/categories/homes-category.png",
    },
    {
        title: "Plot Land",
        url: "#",
        description: "Plots for building or investment.",
        image: "/categories/plots-category.png",
    },
    {
        title: "Retail Shops",
        url: "#",
        description: "Prime shop locations ideal for starting or expanding your business.",
        image: "/categories/shops-category.png",
    },
    {
        title: "Open Land",
        url: "#",
        description: "Land for farming or investment.",
        image: "/categories/land-category.png",
    },
    {
        title: "Luxury Flats",
        url: "#",
        description: "Premium modern apartments.",
        image: "/categories/flats-category.png",
    },
    {
        title: "Commercial Space",
        url: "#",
        description: "Offices and business properties.",
        image: "/categories/commercial-category.png",
    },
    {
        title: "Farm Houses",
        url: "#",
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
                <div className=" mt-12  grid gap-6 sm:mt-18 sm:gap-y-8  grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <Link href="#" key={index}>
                            <div className=" flex flex-col sm:flex-row  md:max-w-lg items-start md:items-center gap-1 rounded-lg sm:mx-0 group">
                                <div className="aspect-square w-full md:w-auto md:h-24 shrink-0 overflow-hidden rounded-lg border border-border/20 bg-muted">
                                    <img
                                        alt=""
                                        className="size-full object-center scale-150"
                                       
                                        src={category.image}
                                        
                                    />
                                </div>
                                <div className="">
                                    <span className="font-medium text-[12px] md:text-lg tracking-[-0.015em] group-hover:text-primary transition-colors duration-100">
                                        {category.title} 
                                    </span>
                                    <p className="hidden md:inline-block mt-1 text-pretty text-muted-foreground group-hover:text-primary transition-colors duration-100 line-clamp-1 md:line-clamp-2">
                                        {category.description}
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
