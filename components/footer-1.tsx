import Link from "next/link";

interface FooterLink {
  label: string
  url: string
}
interface FooterLinksSection {
  title: string
  links: FooterLink[]
}

const Footer1 = () => {

  const linkSections: FooterLinksSection[] = [
    {
      title: "Quick Links",
      links: [
      { label: "Homes", url: "/" },
      { label: "Properties", url: "/listings" },
      { label: "Categories", url: "/categories" },
      { label: "For Sale", url: "/listings/for-sale" },
      { label: "For Rent", url: "/listings/for-rent" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "About Us", url: "/about-us" },
        { label: "Contact Us", url: "/contact-us" },
        { label: "FAQs", url: "/faqs" },
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "Terms And Conditions", url: "/terms-and-conditions" },
      ],
    },
    {
      title: "Social Platform",
      links: [
        { label: "Instagram", url: "#" },
        { label: "Facebook", url: "#" },
        { label: "Twitter", url: "#" },
        { label: "Olx", url: "#" },
        { label: "Zameen", url: "#" },
      ],
    },
  ];

  return (
    <div className="px-6 relative text-foreground bg-accent">
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#1a1a1c] bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] dark:bg-[radial-gradient(#f5f5f0_1px,transparent_1px)] bg-size-[16px_16px]"></div> */}

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 ">
        <div className="">
          <Link href={"/"} className="inline-flex items-center justify-center gap-2  rounded-full ">
            <img
              src={
                "/text-logo.png"
              }
              className="max-h-15 dark:invert rounded-lg hover:animate-tada hover:animate-iteration-count-once"
            />
          </Link>
          <p className="max-w-102 text-sm mt-6 ">
            Elite Associates Real Estate Agency helps you buy, sell, and invest in residential and commercial properties with expert guidance and transparent, hassle-free service.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base  md:mb-5 mb-2 ">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 ">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="hover:underline transition  text-sm ">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm   border-t border-t-background/20">
        Copyright 2026 © <Link href="/">Elite Associates .</Link> All
        Right Reserved.
      </p>
    </div>
  );
};

export default Footer1;
