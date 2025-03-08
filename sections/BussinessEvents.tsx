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
        title: "Treasure Hunt", description: "A tech-driven scavenger hunt where teams solve puzzles and decode clues, promoting teamwork and logical thinking." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Digital Doodle Contest", description: "A digital art competition that encourages creativity and design skills through unique digital illustrations." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Tech Quiz", 
        description: "A knowledge-based competition testing participants on advancements in technology, engineering, and science." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Paper Presentation", 
        description: "An academic platform for presenting technical papers, enhancing research, public speaking, and analytical skills." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Tech Debate", 
        description: "A spirited debate on emerging technologies, encouraging critical thinking, communication, and awareness." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Smart Businessman", 
        description: "A business simulation where participants set up stalls and strategize to make profits, honing marketing and financial management skills." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Smart Investor", 
        description: "A virtual investment challenge where participants build portfolios and showcase their day-trading expertise." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Pitch Deck Through Canva Video", 
        description: "A creative pitch deck competition where participants present innovative startup ideas using Canva."
    }
];

const BussinessEvents = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-light p-20'>
        <div>
            <p className='text-center p-15 text-6xl font-bold'>
                Engineering & Design
            </p>
            <EventDetails details={details} odd={false}/>
        </div>
    </div>
  )
}

export default BussinessEvents