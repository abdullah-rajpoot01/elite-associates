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
  title: 'Terms and Conditions | Your Company Name',
  description: 'Read our terms and conditions to understand the rules and regulations governing your use of our services.',
};

// Data structure for the terms and conditions page
const termsData = {
  lastUpdated: 'May 11, 2026',
  effectiveDate: 'May 11, 2026',

  heading: 'Terms and Conditions',

  description:
    'Please read these Terms and Conditions carefully before using our website or digital services. By accessing our platform or working with our agency, you agree to comply with these terms.',

  terms: [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      description:
        'By using our website or services, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our services.',
      icon: FileText,
    },

    {
      id: 'services',
      title: 'Our Services',
      description:
        'We provide digital services including website development, UI/UX design, graphic design, branding, and Google Business Profile Setup, optimization. Service details, timelines, and pricing are discussed individually with each client.',
      icon: Briefcase,
    },

    {
      id: 'client-responsibilities',
      title: 'Client Responsibilities',
      description:
        'Clients are responsible for providing accurate information, project requirements, content, and feedback required for project completion. Delays in communication or approvals may affect delivery timelines.',
      icon: UserCheck,
    },

    {
      id: 'payments',
      title: 'Payments and Pricing',
      description:
        'All project payments must be completed according to the agreed payment terms. Prices may vary depending on project scope and requirements. Work may be paused if payments are delayed beyond the agreed schedule.',
      icon: DollarSign,
    },

    {
      id: 'revisions',
      title: 'Project Revisions',
      description:
        'Reasonable revisions are included based on the selected service package. Additional revisions or major scope changes may require extra charges.',
      icon: RefreshCw,
    },

    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      description:
        'All final approved designs and website assets become the client’s property after full payment is completed. We reserve the right to showcase completed projects in our portfolio unless otherwise agreed.',
      icon: Scale,
    },

    {
      id: 'prohibited-use',
      title: 'Prohibited Use',
      description:
        'You may not use our services for illegal, fraudulent, harmful, or unethical activities. We reserve the right to refuse or terminate services that violate applicable laws or community standards.',
      icon: AlertCircle,
    },

    {
      id: 'third-party',
      title: 'Third-Party Tools and Services',
      description:
        'Some projects may involve third-party platforms, plugins, hosting providers, or external services. We are not responsible for outages, limitations, or policy changes made by third-party providers.',
      icon: Shield,
    },

    {
      id: 'project-delivery',
      title: 'Project Delivery',
      description:
        'Project timelines are estimated based on the agreed scope. Delivery times may vary depending on revisions, client feedback, or unforeseen technical issues.',
      icon: Zap,
    },

    {
      id: 'limitations',
      title: 'Limitation of Liability',
      description:
        'While we strive to provide high-quality services, we are not liable for indirect losses, business interruptions, lost profits, or damages resulting from the use of our services or website.',
      icon: Lock,
    },

    {
      id: 'termination',
      title: 'Termination of Services',
      description:
        'We reserve the right to suspend or terminate services if a client violates these terms, engages in abusive behavior, or fails to complete agreed payments.',
      icon: AlertCircle,
    },

    {
      id: 'changes',
      title: 'Changes to Terms',
      description:
        'We may update these Terms and Conditions at any time. Updated versions will be published on this page with the latest revision date.',
      icon: RefreshCw,
    },

    {
      id: 'contact',
      title: 'Contact Information',
      description:
        'If you have any questions regarding these Terms and Conditions, you can contact us through our website contact form or official business email.',
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