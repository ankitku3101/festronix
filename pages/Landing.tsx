import EventShowCase from '@/sections/EventShowCase'
import FAQSection from '@/sections/Faq'
import Hero from '@/sections/Hero'
import Sponsors from '@/sections/Sponsors'
import TechfestTimeline from '@/sections/techfest-timeline'
import React from 'react'

const Landing = () => {
  return (
    <>
        <Hero/>
        <TechfestTimeline/>
        <Sponsors/>
        <EventShowCase />
        <FAQSection/>
    </>
  )
}

export default Landing