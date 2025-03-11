import EventDetails from '@/components/event-info/EventDetails'
import React from 'react'
import {Detail,indepthDetails} from "@/types/TypeFile"

const details : Detail[] = [
    { 
        image: "/techevents/hackathon1.jpg", 
        title: "CodeNexus - Hackathon", 
        description: "A 24-hour coding showdown where participants solve real-world problems, fostering innovation, teamwork, and technical excellence.",
        doclink:"https://codenexus-festronix.vercel.app",
    },
    { 
        image: "/techevents/aiml.jpg", 
        title: "AI & ML Model Contest", 
        description: "A fast-paced competition where developers and data scientists come together to showcase their build innovative AI-ML models.",
        doclink:"https://drive.google.com/file/d/18Zu2pLec5rbesWQejP_h_PBDVRqpW19n/view?usp=sharing",
    },
    { 
        image: "/techevents/webdesign1.jpg", 
        title: "Web Design Contest", 
        description: "A creative platform for building visually appealing and functional websites, focusing on UI/UX, design principles, and coding skills.",
        doclink:"https://drive.google.com/file/d/1ymHcfPEabGZpNT8TfpFl4P_DaXX0MAhq/view?usp=sharing"
    },
    { 
        image: "/techevents/mobileapp1.jpg", 
        title: "Mobile App Development Challenge", 
        description: "A fast-paced hackathon where developers and designers come together to build innovative mobile apps within 4 hours! Participants can work solo or in teams, using Android frameworks.",
        doclink:'https://drive.google.com/file/d/1Y_n2TciJPVqWCYmhkal2_6F253TAw4so/view?usp=sharing'
    },
    { 
        image: "/techevents/iot.jpg", 
        title: "IoT Innovation Challenge", 
        description: "Turn your ideas into reality! This challenge isn't just about building smart solutions — it's about creating innovations with real-world impact. The most promising ideas have the potential to be filed for patents, with full support from the organizing team for documentation, legal procedures, and filing. Selected participants will also receive expert mentorship on protecting and commercializing their innovations. If you dream of making a mark in the tech world, this is your chance!",
        doclink:"https://drive.google.com/file/d/1P6Ue-oy_ZOrjou_2zvohSUNtP7kJAssV/view?usp=sharing"
    }
];

const TechnicalEvents = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-light p-4 md:p-8 lg:p-20 mt-20'>
        <div className='w-full max-w-7xl'>
            <p className='text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-bold'>
                Coding & Tech Innovation
            </p>
            <EventDetails details={details}/>
        </div>
    </div>
  )
}

export default TechnicalEvents