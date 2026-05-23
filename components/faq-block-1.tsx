import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'What services does your agency provide?',
    answer:
      'We specialize in web development, modern UI/UX design, Google Business Profile optimization, and professional graphic design solutions for businesses of all sizes.',
  },
  {
    value: 'item-2',
    question: 'Do you create mobile-friendly websites?',
    answer:
      'Yes, every website we build is fully responsive and optimized for mobile, tablet, and desktop devices to ensure the best user experience.',
  },
  {
    value: 'item-3',
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. We can redesign outdated websites with modern layouts, improved performance, better user experience, and conversion-focused design.',
  },
  {
    value: 'item-4',
    question: 'What is Google Business Profile optimization?',
    answer:
      'Google Business Profile optimization helps your business appear in local Google searches and maps, improving visibility, customer trust, and local lead generation.',
  },
  {
    value: 'item-5',
    question: 'Do you offer custom graphic design services?',
    answer:
      'Yes, we create logos, social media graphics, banners, brand assets, marketing materials, and other custom designs tailored to your business identity.',
  },
  {
    value: 'item-6',
    question: 'How long does a project usually take?',
    answer:
      'Project timelines depend on the scope and complexity. Most websites and branding projects are completed within a few days to a few weeks.',
  }, {
    value: 'item-7',
    question: 'Do you help with Google Business Profile setup?',
    answer:
      'Yes, we help businesses create, set up, and optimize their Google Business Profile to improve local visibility, attract more customers, and build trust online.',
  },
  {
    value: 'item-8',
    question: 'Can you manage and update my Google Business Profile?',
    answer:
      'Absolutely. We can update business information, add services, upload professional graphics, optimize descriptions, and keep your profile active for better local reach.',
  },
  {
    value: 'item-9',
    question: 'Do you provide SEO services for websites?',
    answer:
      'We implement basic on-page SEO best practices, including fast performance, responsive design, proper structure, and search-friendly content setup to help improve visibility.',
  },
  {
    value: 'item-10',
    question: 'Will my website be easy to manage after launch?',
    answer:
      'Yes, we build websites with clean structures and user-friendly management options so you can easily update content, images, and business information when needed.',
  },
  {
    value: 'item-11',
    question: 'Do you work with small businesses and startups?',
    answer:
      'Yes, we work with startups, local businesses, and growing brands looking to establish a professional and effective online presence.',
  },
  {
    value: 'item-12',
    question: 'How can I get started with your agency?',
    answer:
      'You can contact us through our website or social platforms to discuss your project, business goals, and the digital solutions you need.',
  }
]
const FaqBlock1 = () => {
  return (
    <div className='w-full py-16'>
      <div className='mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-4xl font-bold'>Frequently asked questions</h2>
          <p className='text-muted-foreground'>Everything you need to know about our different services.</p>
        </div>

        <Accordion type='multiple' className='flex flex-col gap-4'>
          {faqItems.map(item => (
            <AccordionItem key={item.value} value={item.value} className='rounded-md !border'>
              <AccordionTrigger className='cursor-pointer px-4 py-4'>{item.question}</AccordionTrigger>
              <AccordionContent className='text-muted-foreground px-4'>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FaqBlock1
