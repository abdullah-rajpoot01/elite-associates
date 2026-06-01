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

// Data structure for the privacy policy page
const privacyPolicyData = {
  lastUpdated: 'May 11, 2026',
  heading: 'Privacy Policy',
  description:
    'We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you share with us when using our website and digital services.',

  policies: [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      description:
        'We may collect personal information such as your name, email address, phone number, business details, and project information when you contact us or use our services. We may also collect technical information such as browser type, IP address, and device information for analytics and website performance purposes.',
      icon: Database,
    },

    {
      id: 'information-usage',
      title: 'How We Use Your Information',
      description:
        'We use your information to communicate with you, provide our services, improve user experience, respond to inquiries, manage projects, and enhance our website functionality. We may also use your information for customer support and business-related updates.',
      icon: Eye,
    },

    {
      id: 'information-sharing',
      title: 'Information Sharing',
      description:
        'We do not sell, rent, or trade your personal information to third parties. Your information may only be shared with trusted service providers when necessary to deliver our services or comply with legal obligations.',
      icon: Users,
    },

    {
      id: 'data-security',
      title: 'Data Security',
      description:
        'We take appropriate security measures to protect your information against unauthorized access, misuse, or disclosure. While we strive to use commercially acceptable methods to safeguard data, no online system is completely secure.',
      icon: Lock,
    },

    {
      id: 'cookies',
      title: 'Cookies and Analytics',
      description:
        'Our website may use cookies and analytics tools to improve website performance, analyze visitor behavior, and enhance your browsing experience. You can disable cookies through your browser settings if preferred.',
      icon: Cookie,
    },

    {
      id: 'third-party-links',
      title: 'Third-Party Services',
      description:
        'Our website may include links to third-party websites or services. We are not responsible for the privacy practices or content of external websites and encourage users to review their policies separately.',
      icon: Globe,
    },

    {
      id: 'user-rights',
      title: 'Your Rights',
      description:
        'You have the right to request access to, correction of, or deletion of your personal information. If you would like to update or remove your information, please contact us directly.',
      icon: Shield,
    },

    {
      id: 'children-privacy',
      title: "Children's Privacy",
      description:
        'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.',
      icon: AlertTriangle,
    },

    {
      id: 'contact-us',
      title: 'Contact Us',
      description:
        'If you have any questions regarding this Privacy Policy or your personal data, you can contact us through our website contact form or official business email.',
      icon: Mail,
    },

    {
      id: 'policy-changes',
      title: 'Updates to This Policy',
      description:
        'We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. Updated versions will always be posted on this page with the latest revision date.',
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