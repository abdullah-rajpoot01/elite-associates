// app/terms-and-conditions/page.tsx
import { Metadata } from 'next';
import { 
  FileText, 
  Scale, 
  ShoppingCart, 
  UserCheck, 
  AlertCircle, 
  Shield, 
  Smartphone, 
  Briefcase, 
  Mail, 
  RefreshCw,
  Lock,
  MessageSquare,
  DollarSign,
  Zap,
  HeartHandshake
} from 'lucide-react';


export const metadata: Metadata = {
  title: "Terms & Conditions | Elite Associates Real Estate",
  description:
    "Read the Terms & Conditions of Elite Associates Real Estate Agency to understand the rules, responsibilities, and conditions for using our services.",

  openGraph: {
    title: "Terms & Conditions | Elite Associates Real Estate",
    description:
      "Read the Terms & Conditions of Elite Associates Real Estate Agency to understand the rules, responsibilities, and conditions for using our services.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Elite Associates Terms and Conditions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Elite Associates Real Estate",
    description:
      "Read the Terms & Conditions of Elite Associates Real Estate Agency to understand the rules and usage policies of our services.",
    images: ["/og-default.png"],
  },
};

const termsData = {
  lastUpdated: "June 1, 2026",
  effectiveDate: "June 1, 2026",

  heading: "Terms and Conditions",

  description:
    "Please read these Terms and Conditions carefully before using the Elite Associates Real Estate website or engaging in any property-related services. By accessing our platform or using our services, you agree to comply with these terms.",

  terms: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      description:
        "By using our website or real estate services, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, you should stop using our services immediately.",
      icon: FileText,
    },

    {
      id: "services",
      title: "Our Services",
      description:
        "Elite Associates provides real estate services including buying, selling, and renting residential and commercial properties, along with property consultation and investment assistance. Service availability may vary based on location and market conditions.",
      icon: Briefcase,
    },

    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      description:
        "Clients are responsible for providing accurate personal details, property requirements, and relevant documentation when engaging in property transactions. Delays in response or incorrect information may affect service outcomes.",
      icon: UserCheck,
    },

    {
      id: "payments",
      title: "Payments and Commission",
      description:
        "Commission or service fees are applicable upon successful completion of property transactions. The exact percentage or amount will be agreed upon before finalizing any deal.",
      icon: DollarSign,
    },

    {
      id: "revisions",
      title: "Property Listings and Updates",
      description:
        "We strive to keep property listings accurate and up to date. However, availability, pricing, and property details may change without prior notice due to market activity.",
      icon: RefreshCw,
    },

    {
      id: "intellectual-property",
      title: "Property Information Usage",
      description:
        "All property listings, images, and content on our website are for informational purposes. Unauthorized copying, redistribution, or commercial use of our listings is not permitted.",
      icon: Scale,
    },

    {
      id: "prohibited-use",
      title: "Prohibited Use",
      description:
        "Users must not use our platform for fraudulent, illegal, or misleading property activities. Any attempt to manipulate listings or provide false information may result in service termination.",
      icon: AlertCircle,
    },

    {
      id: "third-party",
      title: "Third-Party Listings and Services",
      description:
        "Some properties or services may involve third-party agents, developers, or platforms. We are not responsible for external service policies, delays, or changes.",
      icon: Shield,
    },

    {
      id: "project-delivery",
      title: "Transaction Timelines",
      description:
        "Property buying, selling, or renting timelines may vary depending on legal procedures, documentation, and buyer/seller agreement processes.",
      icon: Zap,
    },

    {
      id: "limitations",
      title: "Limitation of Liability",
      description:
        "While we aim to provide accurate property information and professional service, we are not liable for financial loss, market fluctuations, or third-party transaction issues.",
      icon: Lock,
    },

    {
      id: "termination",
      title: "Termination of Services",
      description:
        "We reserve the right to refuse or terminate services if any client engages in fraudulent activity, provides false information, or violates legal property regulations.",
      icon: AlertCircle,
    },

    {
      id: "changes",
      title: "Changes to Terms",
      description:
        "We may update these Terms and Conditions at any time to reflect legal, operational, or business changes. Updates will be posted on this page with a revised date.",
      icon: RefreshCw,
    },

    {
      id: "contact",
      title: "Contact Information",
      description:
        "If you have any questions regarding these Terms and Conditions, you can contact Elite Associates through our official phone, email, or website contact form.",
      icon: Mail,
    },
  ],
};
export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-sm dark:bg-gray-900/50">
        <div className="absolute inset-0 bg-grid-slate-100 mask-[radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-700/10" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-2xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
                <FileText className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {termsData.heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {termsData.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Last Updated: {termsData.lastUpdated}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                Effective: {termsData.effectiveDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Terms Sections */}
          <div className="space-y-6">
            {termsData.terms.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <article
                  key={term.id}
                  id={term.id}
                  className="group relative scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900/50 sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:group-hover:bg-indigo-900/50">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        {term.title}
                      </h2>
                      <div className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                        {term.description.split('\n').map((paragraph, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative line */}
                  {index < termsData.terms.length - 1 && (
                    <div className="absolute bottom-0 left-20 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Acknowledgement Section */}
          <div className="mt-12 rounded-2xl bg-indigo-50 p-6 text-center dark:bg-indigo-950/30">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-indigo-100 p-2 dark:bg-indigo-900/50">
                <HeartHandshake className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              These terms constitute the entire agreement between you and Your Company Name regarding our services.
              <br />
              For legal inquiries, please contact{' '}
              <a
                href="mailto:legal@yourcompany.com"
                className="font-medium text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400"
              >
                legal@yourcompany.com
              </a>
            </p>
          </div>

          {/* Last Updated Notice */}
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p className="mt-1">Version 2.0 | Last reviewed: {termsData.lastUpdated}</p>
          </div>
        </div>
      </div>
    </main>
  );
}