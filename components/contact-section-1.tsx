'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import { WhatsApp } from './social-icons'
import Link from 'next/link'

export default function ContactSection1() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })


  // Alternative cleaner approach using name attributes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSendToWhatsApp = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields (First name, Last name, Email, and Message)')
      return
    }

    // Format the message for WhatsApp
    const message = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject || 'Not provided'}%0A` +
      `*Message:*%0A${formData.message}%0A%0A` +
      `*Sent from:* Company Website Contact Form`

    // WhatsApp number (without '+' sign for URL)
    const phoneNumber = '923001243890' // 0300 1243890 -> 923001243890

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    // Optional: Reset form after sending
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   subject: '',
    //   message: ''
    // })
  }

  return (
    <section className='py-16'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-balance md:text-4xl'>Get in Touch</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-2 lg:items-stretch'>
          {/* Contact Form */}
          <Card className='h-full py-6'>
            <CardHeader className='px-6'>
              <CardTitle className='text-balance'>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-6 px-6'>
              <FieldGroup>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <Field>
                    <FieldLabel htmlFor='first-name'>First name *</FieldLabel>
                    <Input
                      id='first-name'
                      name='firstName'
                      placeholder='John'
                      className='h-9'
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='last-name'>Last name *</FieldLabel>
                    <Input
                      id='last-name'
                      name='lastName'
                      placeholder='Doe'
                      className='h-9'
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor='email'>Email *</FieldLabel>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='john@example.com'
                    className='h-9'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor='subject'>Subject</FieldLabel>
                  <Input
                    id='subject'
                    name='subject'
                    placeholder='How can we help?'
                    className='h-9'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor='message'>Message *</FieldLabel>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Tell us more about your project...'
                    className='min-h-30'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Field>
              </FieldGroup>
              <Button
                className="h-9 px-4 py-2 w-full cursor-pointer"
                onClick={handleSendToWhatsApp}
              >
                Send Message On WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information & Additional Info */}
          <div className='flex h-full flex-col gap-6'>
            {/* Contact Information */}
            <Card className='flex-1 gap-3 py-6'>
              <CardHeader className='px-6'>
                <CardTitle className='text-lg text-balance'>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 px-6'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <Mail className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Email</h4>
                    <p className='text-muted-foreground text-xs'>hello@company.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <Phone className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Phone</h4>
                    <p className='text-muted-foreground text-xs'>+92 (300) 5690120</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <WhatsApp className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Whatsapp</h4>
                    <p className='text-muted-foreground text-xs'>+92 (300) 5690120</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className='gap-3 py-6'>
              <CardHeader className='px-6'>
                <CardTitle className='text-lg text-balance'>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className='px-6'>
                <div className='flex flex-col gap-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span className='text-muted-foreground'>8:00 AM - 11:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday</span>
                    <span className='text-muted-foreground'>9:00 AM - 10:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span className='text-muted-foreground'>Available for project discussions only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <Card className='gap-3 py-6'>
              <CardHeader className='px-6'>
                <CardTitle className='text-lg text-balance'>Prefer to Call?</CardTitle>
              </CardHeader>
              <CardContent className='px-6'>
                <p className='text-muted-foreground mb-3 text-sm'>
                  Speak directly with our team for immediate assistance.
                </p>
                <Link href={"tel:+923005690120"}>
                  <Button variant='outline' className="h-9 px-4 py-2 w-full cursor-pointer">
                    <Phone />
                    Schedule a Call
                  </Button>
                  </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}