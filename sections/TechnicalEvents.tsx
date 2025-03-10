import EventDetails from '@/components/event-info/EventDetails'
import React from 'react'
import {Detail,indepthDetails} from "@/types/TypeFile"

const details : Detail[] = [
    { 
        image: "/hero1.jpg", 
        title: "Hackathon", 
        description: "A 24-hour coding showdown where participants solve real-world problems, fostering innovation, teamwork, and technical excellence." 
    },
    { 
        image: "/hero1.jpg", 
        title: "AI & ML Model Contest", 
        description: "A fast-paced competition where developers and data scientists come together to showcase their build innovative AI-ML models.",
        doclink:"https://drive.google.com/file/d/1py0VvcyFOmLnnkEXXYrMHNlsbGn7nAcD/view?usp=sharing",
    },
    { 
        image: "/hero1.jpg", 
        title: "Web Design Contest", 
        description: "A creative platform for building visually appealing and functional websites, focusing on UI/UX, design principles, and coding skills." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Mobile App Development Challenge", 
        description: "A fast-paced hackathon where developers and designers come together to build innovative mobile apps within 4 hours! Participants can work solo or in teams, using Android frameworks.",
        doclink:'https://drive.google.com/file/d/1Awv3wcjQkfOhBHrxW07EkCD033LOgrKP/view?usp=sharing'
    },
    { 
        image: "/hero1.jpg", 
        title: "IoT Innovation Challenge", 
        description: "A contest to develop IoT-based prototypes addressing real-world problems, integrating sensors, automation, and networking."
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