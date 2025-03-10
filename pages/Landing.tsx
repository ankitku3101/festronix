import BGWrapper from '@/components/BGWrapper'
import Footer from '@/components/Footer'
import EventShowCase from '@/sections/EventShowCase'
import FAQSection from '@/sections/Faq'
import Hero from '@/sections/Hero'
import Sponsors from '@/sections/Sponsors'
import TechfestTimeline from '@/sections/techfest-timeline'
import React from 'react'

const Landing = () => {
  return (
    <>
        <BGWrapper>
          <Hero />
          <TechfestTimeline />
          <EventShowCase />
          <Sponsors />
          <FAQSection />
          <Footer />
        </BGWrapper>
    </>
  )
}

export default Landing