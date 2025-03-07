import EventDetails from '@/components/event-info/EventDetails'
import React from 'react'

interface Detail{
    image:string;
    title:string;
    description:string;
}

const details : Detail[] = [
    { 
        image: "/hero1.jpg", 
        title: "Hackathon", 
        description: "A 24-hour coding showdown where participants solve real-world problems, fostering innovation, teamwork, and technical excellence." 
    },
    { 
        image: "/hero1.jpg", 
        title: "AI & ML Model Contest", 
        description: "A challenge to develop AI/ML models that address practical issues, showcasing expertise in data science and algorithmic solutions." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Web Design Contest", 
        description: "A creative platform for building visually appealing and functional websites, focusing on UI/UX, design principles, and coding skills." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Mobile App Development Challenge", 
        description: "Teams innovate and build user-centric mobile applications with a focus on functionality, design, and problem-solving." 
    },
    { 
        image: "/hero1.jpg", 
        title: "IoT Innovation Challenge", 
        description: "A contest to develop IoT-based prototypes addressing real-world problems, integrating sensors, automation, and networking."
    }
];

const TechnicalEvents = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-light p-20'>
        <div>
            <p className='text-center p-15 text-6xl font-bold'>
                Coding & Tech Innovation
            </p>
            <EventDetails details={details}/>
        </div>
    </div>
  )
}

export default TechnicalEvents