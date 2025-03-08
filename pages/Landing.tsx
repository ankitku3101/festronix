import BGWrapper from '@/components/BGWrapper'
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
          <Sponsors />
          <EventShowCase />
          <FAQSection />
        </BGWrapper>
    </>
  )
}

export default Landing