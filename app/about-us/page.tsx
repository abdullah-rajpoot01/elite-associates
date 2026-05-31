import AboutFeatures from '@/components/about/about-features'
import CTA from '@/components/about/cta'
import AboutHero from '@/components/about/hero'
import Hero from '@/components/hero'
import Timeline from '@/components/team'
import React from 'react'

const Page = () => {
  return (
    <>
     {/* <AboutHero/> */}
     <Hero/>
     <AboutFeatures/>   
     <Timeline/>
     <CTA/>
    </>
  )
}

export default Page