import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Zoya Khan",
    designation: "First-Time Home Buyer",
    company: "Bought in Brooklyn Heights",
    testimonial:
      "The team made finding our first home incredibly easy. The virtual tours and detailed listings helped us narrow down our choices before even stepping foot outside.",
  },
  {
    id: 2,
    name: "Muhammad Ahmad",
    designation: "Investment Property Owner",
    company: "Purchased 3 Properties",
    testimonial:
      "I've bought multiple investment properties through this agency. Their market insights and property comparisons are unmatched. Saved me thousands!",
  },
  {
    id: 3,
    name: "Ayesha Ali",
    designation: "Relocating Professional",
    company: "Moved from Chicago to Miami",
    testimonial:
      "Relocating to a new city was stressful, but the interactive maps and neighborhood insights helped me find the perfect area for my family.",
  },
  {
    id: 4,
    name: "Zeshan Malik",
    designation: "Selling Homeowner",
    company: "Sold in 2 Weeks",
    testimonial:
      "Our home sold in just 2 weeks! The professional photography and virtual tour attracted multiple offers above asking price.",
  },
  {
    id: 5,
    name: "Haider Ali",
    designation: "Growing Family",
    company: "Found Dream Home",
    testimonial:
      "After months of searching elsewhere, we found our dream home here. The saved searches and instant alerts made sure we didn't miss any listings.",
  },
  {
    id: 6,
    name: "Zohaib Khan",
    designation: "Retiree",
    company: "Downsizing to Condo",
    testimonial:
      "The agents were patient and knowledgeable. They helped us find a low-maintenance condo that fits our retirement lifestyle perfectly.",
  },
];

const Testimonials = () => (
  <div className="px-6 py-20 bg-background">
    <div>
      <h2 className="text-center font-medium text-4xl tracking-[-0.04em] md:text-[2.75rem]">
        Loved by Customers
      </h2>
      <p className="mt-4 text-center text-muted-foreground text-xl tracking-[-0.015em] md:text-2xl">
        See how Buyers and Seller are achieving more with us
      </p>
      <div className="mx-auto mt-8 w-full max-w-(--breakpoint-xl) sm:mt-14 lg:mt-16">
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              className={cn(
                "relative flex flex-col px-6 py-10 group",
                "before:absolute before:inset-0 before:-m-px before:border-border before:border-r before:border-b before:border-dashed before:content-['']"
              )}
              key={testimonial.id}
            >
              <div className="flex items-center justify-center gap-1 group-hover:animate-float group-hover:animate-iteration-count-infinite">
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                <StarIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
              </div>
              <p className="my-6 max-w-md text-pretty text-center text-[17px]">
                {testimonial.testimonial}
              </p>
              <div className="mt-auto flex items-center justify-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl group-hover:animate-pulse">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
