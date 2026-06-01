"use client";

import {
    Menu,
    Building2,
    Phone,
    LayoutTemplate,
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
import ButtonNeon from "./ui/neon-button";

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
            title: "Properties", items: [
                {
                    title: "Property For Sale",
                    description: "High-converting, visually engaging pages.",
                    icon: <LayoutTemplate className="size-5 shrink-0" />,
                    url: "/listings/for-sale",
                },
                {
                    title: "Property For Rent",
                    description: "Modern websites that reflect your brand.",
                    icon: <Building2 className="size-5 shrink-0" />,
                    url: "/listings/for-rent",
                },
                {
                    title: "View All Properties",
                    description: "Modern websites that reflect your brand.",
                    icon: <Building2 className="size-5 shrink-0" />,
                    url: "/listings",
                },
            ], url: "#"
        },
        { title: "Categories", url: "/categories" },
        { title: "About", url: "/about-us" },
        { title: "Contact", url: "/contact-us" },

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
                        <Link href={logo.url} className="flex items-center  gap-2 hover:animate-tada hover:animate-iteration-count-once">
                            <img
                                src={logo.src}
                                className="max-h-10 dark:invert object-cover rounded-lg "
                                alt={logo.alt}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end  ">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-2">
                        <Link href={cta.primary.url} className="hover:animate-tada hover:animate-iteration-count-once" >
                            <ButtonNeon asChild size="lg">
                                <div className="flex gap-2">
                                    <Phone />{cta.primary.title}
                                </div>
                            </ButtonNeon>
                        </Link>
                        <Link href={"https://wa.me/923046954705"} className="hover:animate-tada hover:animate-iteration-count-once" target="_blank"
                            rel="noopener noreferrer">
                            <ButtonNeon asChild size="lg">
                                <WhatsApp className="w-10" />
                            </ButtonNeon>
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
                                className="max-h-10 dark:invert rounded-lg"
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
                                                    className="max-h-15 dark:invert rounded-lg"
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
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground hover:animate-tada hover:animate-iteration-count-once mr-1"
            >
                {item.title}
            </Link>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem, hideSidebar: () => void) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0!">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
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
