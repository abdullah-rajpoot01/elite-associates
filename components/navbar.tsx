"use client";

import {
    LayoutTemplate,
    Menu,
    Palette,
    Building2,
    ShoppingCart,
    FolderOpen,
    RefreshCw,
    Code,
    Eye,
    Diamond,
    Megaphone,
    Image,
    CreditCard,
    Package,
    FileText,
    Presentation,
    MapPin,
    TrendingUp,
    Camera,
    Calendar,
    Star,
    BarChart,
    Users,
    Phone,
    HelpCircle,
    Shield,
    Home,
    LandPlot,
    Store,
    HouseIcon,
    Grid,
    Landmark,
} from "lucide-react";
import { } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { WhatsApp } from "./social-icons";
import { useState } from "react";
import Link from "next/link";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    className?: string;
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
        className?: string;
    };
    menu?: MenuItem[];
    cta?: {
        primary: {
            title: string;
            url: string;
        };
    };
}

const Navbar1 = ({
    logo = {
        url: "/",
        src: "/text-logo.png",
        alt: "logo",
        title: "Elite Associates",
    },
    menu = [
        { title: "Home", url: "/" },
        {
            title: "Properties",
            url: "#",
            items: [
                {
                    title: "Home Living",
                    description: "Residential houses and apartments.",
                    icon: <Home className="size-5 shrink-0" />,
                    url: "/website-design#landing-page-design",
                },
                {
                    title: "Plot Land",
                    description: "Plots for building or investment.",
                    icon: <LandPlot className="size-5 shrink-0" />,
                    url: "/website-design#business-website-design",
                },
                {
                    title: "Retail Shops",
                    description: "Shops for business use.",
                    icon: <Store className="size-5 shrink-0" />,
                    url: "/website-design#ecommerce-stores",
                },
                {
                    title: "Open Land",
                    description: "Land for farming or investment.",
                    icon: <Landmark className="size-5 shrink-0" />,
                    url: "/website-design#portfolio-websites",
                },
                {
                    title: "Luxury Flats",
                    description:
                        "Premium modern apartments.",
                    icon: <Grid className="size-5 shrink-0" />,
                    url: "/website-design#website-redesign",
                },
                {
                    title: "Commercial Space",
                    description:
                        "Offices and business properties.",
                    icon: <Building2 className="size-5 shrink-0" />,
                    url: "/website-design#custom-websites",
                },
                {
                    title: "Farm Houses",
                    description:
                        "Countryside luxury living spaces.",
                    icon: <HouseIcon className="size-5 shrink-0" />,
                    url: "/website-design#custom-websites",
                },
                {
                    title: "View all services",
                    description:
                        "Explore all our website design and development services.",
                    icon: <Eye className="size-5 shrink-0" />,
                    url: "/website-design",
                },
            ],
        },
        { title: "About Us", url: "/about-us" },
        { title: "Contact Us", url: "/contact-us" },
        {
            title: "More Pages",
            url: "#",
            items: [
                {
                    title: "About Us",
                    description:
                        "Learn about our story, mission, and the team behind our creative solutions.",
                    icon: <Users className="size-5 shrink-0" />,
                    url: "/about-us",
                },
                {
                    title: "Contact Us",
                    description:
                        "Get in touch with our team for inquiries, support, or project collaborations.",
                    icon: <Phone className="size-5 shrink-0" />,
                    url: "/contact-us",
                },
                {
                    title: "Frequently Asked Questions",
                    description:
                        "Find answers to common questions about our services and processes.",
                    icon: <HelpCircle className="size-5 shrink-0" />,
                    url: "/faq",
                },
                {
                    title: "Terms and Conditions",
                    description:
                        "Review the terms, conditions, and guidelines for using our services.",
                    icon: <FileText className="size-5 shrink-0" />,
                    url: "/terms-and-conditions",
                },
                {
                    title: "Privacy Policy",
                    description:
                        "Understand how we collect, use, and protect your personal information.",
                    icon: <Shield className="size-5 shrink-0" />,
                    url: "/privacy-policy",
                },
            ],
        },
    ],
    cta = {
        primary: { title: "Start a Call", url: "tel:+923046954705" },
    },
    className,
}: Navbar1Props) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const hideSidebar = () => {
        setTimeout(() => {
            setOpenSidebar(false);
        }, 50);
    };
    return (
        <section
            className={cn(
                "py-1  sticky top-0 z-50 bg-background shadow ",
                className,
            )}
        >
            <div className="container mx-auto px-1">
                {/* Desktop Menu */}
                <nav className="hidden items-center justify-between lg:flex">
                    <div className="flex items-center  gap-6 py-2">
                        {/* Logo */}
                        <Link href={logo.url} className="flex items-center  gap-2 ">
                            <img
                                src={logo.src}
                                className="max-h-10 dark:invert object-cover"
                                alt={logo.alt}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end ">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-2">
                        <Link href={cta.primary.url} >
                            <Button asChild size="lg">
                                <div className="flex gap-2">
                                    <Phone />{cta.primary.title}
                                </div>
                            </Button>
                        </Link>
                        <Link href={"https://wa.me/923046954705"} target="_blank"
                            rel="noopener noreferrer">
                            <Button asChild size="lg">
                                <WhatsApp className="w-10" />
                            </Button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className=" block lg:hidden">
                    <div className="flex items-center justify-between px-3 py-2 ">
                        {/* Logo */}
                        <Link
                            onClick={hideSidebar}
                            href={logo.url}
                            className="flex items-center gap-2"
                        >
                            <img
                                src={"/text-logo.png"}
                                className="max-h-10 dark:invert"
                                alt={logo.alt}
                            />
                        </Link>
                        <div className="flex gap-4">

                            <Link href={"https://wa.me/923046954705"} target="_blank"
                                rel="noopener noreferrer">
                                <Button asChild size="icon" className="p-2">
                                    <WhatsApp className="size-4" />
                                </Button>
                            </Link>

                            <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu className="size-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    style={{ width: "95%", maxWidth: "95%" }}
                                    className="overflow-y-auto"
                                >
                                    <SheetHeader>
                                        <SheetTitle>
                                            <Link
                                                onClick={hideSidebar}
                                                href={logo.url}
                                                className="flex items-center gap-2"
                                            >
                                                <img
                                                    src={"text-logo.png"}
                                                    className="max-h-24 dark:invert"
                                                    alt={logo.alt}
                                                />
                                            </Link>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-6 p-4">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="flex w-full flex-col gap-4"
                                        >
                                            {menu.map((item) =>
                                                renderMobileMenuItem(item, hideSidebar),
                                            )}
                                        </Accordion>

                                        <div className="flex flex-col gap-3">
                                            <Button asChild>
                                                <Link href={cta.primary.url}>{cta.primary.title}</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    <div className="grid grid-cols-2 gap-1 p-2 min-w-160">
                        {item.items.map((subItem) => (
                            <NavigationMenuLink asChild key={subItem.title} className="w-80 ">
                                <SubMenuLink item={subItem} />
                            </NavigationMenuLink>
                        ))}
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <Link
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </Link>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem, hideSidebar: () => void) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2  ">
                    {item.items.map((subItem) => (
                        <SubMenuLink
                            hideSidebar={hideSidebar}
                            key={subItem.title}
                            item={subItem}
                        />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link
            onClick={hideSidebar}
            key={item.title}
            href={item.url}
            className="text-md font-semibold no-underline"
        >
            {item.title}
        </Link>
    );
};

const SubMenuLink = ({
    item,
    hideSidebar,
}: {
    item: MenuItem;
    hideSidebar?: () => void;
}) => {
    return (
        <Link
            onClick={hideSidebar}
            className="flex w-full flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
            style={{ textDecoration: "none" }}
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold ">{item.title}</div>
                {item.description && (
                    <p className="text-sm leading-snug text-muted-foreground ">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    );
};

export { Navbar1 };
