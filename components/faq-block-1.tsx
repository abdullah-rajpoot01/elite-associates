import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: "item-1",
    question: "What services does Elite Associates provide?",
    answer:
      "We help clients buy, sell, and rent residential and commercial properties, along with providing investment guidance and property consultation services.",
  },
  {
    value: "item-2",
    question: "Do you deal in both residential and commercial properties?",
    answer:
      "Yes, we deal in houses, apartments, villas, plots, and commercial properties including offices, shops, and buildings.",
  },
  {
    value: "item-3",
    question: "Can you help me find a property within my budget?",
    answer:
      "Absolutely. We help clients find properties based on their budget, location preference, and requirements to ensure the best match.",
  },
  {
    value: "item-4",
    question: "Do you offer property for rent as well?",
    answer:
      "Yes, we offer a wide range of rental properties including houses, apartments, and commercial spaces across different locations.",
  },
  {
    value: "item-5",
    question: "Is there any commission or service fee?",
    answer:
      "Yes, a standard commission is charged upon successful property deal completion. The exact fee depends on the property type and agreement.",
  },
  {
    value: "item-6",
    question: "Can I list my property with Elite Associates?",
    answer:
      "Yes, property owners can contact us to list their property for sale or rent. We handle marketing and buyer/renter matching.",
  },
  {
    value: "item-7",
    question: "How do I verify a property before buying?",
    answer:
      "We assist in verifying property documents, ownership details, and legal status to ensure a safe and transparent transaction.",
  },
  {
    value: "item-8",
    question: "Do you help with property investment guidance?",
    answer:
      "Yes, we provide investment advice based on market trends, location growth, and expected returns to help you make informed decisions.",
  },
  {
    value: "item-9",
    question: "Which locations do you operate in?",
    answer:
      "We operate in multiple cities and regions, helping clients find properties in prime residential and commercial areas.",
  },
  {
    value: "item-10",
    question: "How can I contact Elite Associates?",
    answer:
      "You can contact us via phone, WhatsApp, email, or through our website contact form. Our team responds quickly to all inquiries.",
  },
];
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
