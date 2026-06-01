// app/privacy-policy/page.tsx
import { Metadata } from 'next';
import { 
  Shield, 
  Eye, 
  Database, 
  Cookie, 
  Mail, 
  FileText, 
  Users, 
  Lock, 
  Globe, 
  AlertTriangle 
} from 'lucide-react';


export const metadata: Metadata = {
  title: "Privacy Policy | Elite Associates Real Estate",
  description:
    "Read the Privacy Policy of Elite Associates Real Estate Agency to understand how we collect, use, and protect your personal information when you use our services.",
  openGraph: {
    title: "Privacy Policy | Elite Associates Real Estate",
    description:
      "Read the Privacy Policy of Elite Associates Real Estate Agency to understand how we collect, use, and protect your personal information when you use our services.",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Elite Associates Privacy Policy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Elite Associates Real Estate",
    description:
      "Read the Privacy Policy of Elite Associates Real Estate Agency to understand how we collect, use, and protect your personal information.",
    images: ["/og-default.png"],
  },
};

const privacyPolicyData = {
  lastUpdated: "June 1, 2026",
  heading: "Privacy Policy",
  description:
    "At Elite Associates Real Estate, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website or real estate services.",

  policies: [
    {
      id: "information-collection",
      title: "Information We Collect",
      description:
        "We may collect personal details such as your name, phone number, email address, and property preferences when you inquire about buying, selling, or renting a property. We may also collect technical data such as IP address, browser type, and device information to improve website performance and user experience.",
      icon: Database,
    },

    {
      id: "information-usage",
      title: "How We Use Your Information",
      description:
        "We use your information to respond to property inquiries, connect buyers and sellers, provide rental and investment assistance, and improve our real estate services. Your data also helps us personalize property recommendations and improve communication.",
      icon: Eye,
    },

    {
      id: "information-sharing",
      title: "Information Sharing",
      description:
        "We do not sell or rent your personal data. Your information may be shared only with trusted agents, property owners, or legal authorities when necessary to complete a real estate transaction or comply with legal requirements.",
      icon: Users,
    },

    {
      id: "data-security",
      title: "Data Security",
      description:
        "We use reasonable security measures to protect your personal information from unauthorized access or misuse. However, no digital transmission or storage system can be guaranteed 100% secure.",
      icon: Lock,
    },

    {
      id: "cookies",
      title: "Cookies and Analytics",
      description:
        "Our website uses cookies and analytics tools to understand user behavior, improve property search experience, and optimize performance. You may disable cookies in your browser settings at any time.",
      icon: Cookie,
    },

    {
      id: "third-party-links",
      title: "Third-Party Services",
      description:
        "Our website may contain links to third-party platforms such as property portals or external listings. We are not responsible for their privacy practices and encourage users to review their policies separately.",
      icon: Globe,
    },

    {
      id: "user-rights",
      title: "Your Rights",
      description:
        "You have the right to access, update, or request deletion of your personal information. For any such requests related to property inquiries or listings, you may contact our support team directly.",
      icon: Shield,
    },

    {
      id: "children-privacy",
      title: "Children's Privacy",
      description:
        "Our services are intended for individuals aged 18 and above. We do not knowingly collect personal information from minors.",
      icon: AlertTriangle,
    },

    {
      id: "contact-us",
      title: "Contact Us",
      description:
        "If you have any questions about this Privacy Policy or how your data is handled, you can contact Elite Associates through our official email, phone, or website contact form.",
      icon: Mail,
    },

    {
      id: "policy-changes",
      title: "Updates to This Policy",
      description:
        "We may update this Privacy Policy from time to time to reflect changes in legal requirements or our real estate services. Any updates will be posted on this page with a revised date.",
      icon: FileText,
    },
  ],
};
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white shadow-sm dark:bg-gray-900/50">
        <div className="absolute inset-0 bg-grid-slate-100 mask-[radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-700/10" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-2xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
                <Shield className="h-8 w-8 text-primary dark:text-primary/70" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {privacyPolicyData.heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {privacyPolicyData.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Last Updated: {privacyPolicyData.lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Policies Grid */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {privacyPolicyData.policies.map((policy, index) => {
              const IconComponent = policy.icon;
              return (
                <article
                  key={policy.id}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900/50 sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-primary transition-colors group-hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-primary/70 dark:group-hover:bg-indigo-900/50">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        {policy.title}
                      </h2>
                      <div className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                        {policy.description.split('\n').map((paragraph, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative line */}
                  {index < privacyPolicyData.policies.length - 1 && (
                    <div className="absolute bottom-0 left-20 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-12 rounded-2xl bg-indigo-50 p-6 text-center dark:bg-indigo-950/30">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              By using our services, you acknowledge that you have read and understood this Privacy Policy.
              <br />
              For any privacy-related concerns, please contact our Data Protection Officer at{' '}
              <a
                href="mailto:dpo@yourcompany.com"
                className="font-medium text-primary underline-offset-2 hover:underline dark:text-primary/70"
              >
                dpo@yourcompany.com
              </a>
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}