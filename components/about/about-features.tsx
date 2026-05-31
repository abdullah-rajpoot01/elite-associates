import {
  Building2,
  Calendar,
  Camera,
  Clock,
  Heart,
  MapPin,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Premium Listings",
    description:
      "Browse hundreds of verified properties with high-quality photos, detailed descriptions, and accurate pricing information.",
    icon: Building2,
  },
  {
    title: "Interactive Maps",
    description:
      "Explore properties on an interactive map to find homes in your preferred neighborhoods, near schools, parks, and amenities.",
    icon: MapPin,
  },
  {
    title: "Virtual Tours",
    description:
      "Experience properties from anywhere with immersive 3D virtual tours and HD video walkthroughs of every listing.",
    icon: Camera,
  },
  {
    title: "Market Insights",
    description:
      "Stay informed with neighborhood market trends, price history, and comparable property values in your area.",
    icon: TrendingUp,
  },
  {
    title: "Expert Agents",
    description:
      "Connect with experienced local real estate agents who know the market and can guide you through every step.",
    icon: Users,
  },
  {
    title: "Trusted & Verified",
    description:
      "Every listing is verified by our team to ensure accuracy, transparency, and a secure home-buying experience.",
    icon: Shield,
  },
];


const AboutFeatures = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-6 py-20 overflow-x-hidden bg-secondary">
      <h2 className="text-pretty text-center font-medium tracking-[-0.04em] text-3xl sm:text-4xl">
       Find Your Dream Property With Confidence
      </h2>
      <p className="mt-3 text-pretty text-center text-muted-foreground text-xl sm:text-2xl tracking-[-0.01em] ">
        Everything you need to discover, compare, and secure your perfect property
      </p>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            className="relative rounded-xl border bg-card p-6 dark:border-card-foreground/7 hover:animate- hover:animate-iteration-count-infinite group"
            key={index}
          >
            <div className="absolute group-hover:animate-float group-hover:animate-duration-800 group-hover:animate-iteration-count-infinite -top-4 left-3 flex h-10 w-10 items-center justify-center rounded-full border-primary/90 bg-primary/90 text-primary-foreground shadow-indigo-400/70 shadow-lg hover:bg-primary dark:text-foreground dark:shadow-primary">
              <feature.icon />
            </div>
            <h3 className="mt-5 font-medium text-lg tracking-[-0.005em]">
              {feature.title}
            </h3>
            <p className="mt-2 text-foreground/80">{feature.description}</p>

            <div
              className="absolute inset-0 -top-px z-0"
              style={{
                backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 100% 0%, #000 50%, transparent 100%)
      `,
                WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
