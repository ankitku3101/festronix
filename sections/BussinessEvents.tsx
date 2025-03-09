import EventDetails from '@/components/event-info/EventDetails'
import React from 'react'
import {Detail} from "@/types/TypeFile"

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
        description: "An academic platform for presenting technical papers, enhancing research, public speaking, and analytical skills.",
        specification:[
            {
              heading: "Team Composition",
              points: [
                "Each team must consist of 2 members.",
                "Participants must be from the same institution."
              ]
            },
            {
              heading: "Presentation Requirements",
              points: [
                "Poster Presentation:",
                "The poster should summarize the research concisely.",
                "Size: A1 (23.4 x 33.1 inches) or A2 (16.5 x 23.4 inches).",
                "It should include Title, Abstract, Key Findings, Problem Statement, Diagrams, and References.",
                "PPT Presentation:",
                "Maximum 10 slides.",
                "Time limit: 10 minutes for presentation + 2 minutes for Q&A.",
                "The PPT must be visually engaging and well-structured."
              ]
            },
            {
              heading: "Judging Criteria",
              points: [
                "Content Quality (Relevance & Depth of Research) – 30%",
                "Presentation Skills (Clarity, Engagement, and Confidence) – 25%",
                "Poster Design & Effectiveness – 20%",
                "Originality & Innovation – 15%",
                "Handling of Q&A – 10%"
              ]
            },
            {
              heading: "Rules & Regulations",
              points: [
                "Teams must submit their paper, poster, and PPT at least before the event.",
                "The poster and PPT should have the same content, but the poster should be a visual summary, while the PPT provides a detailed explanation.",
                "Copied content must be below 15%.",
                "No use of AI tools is allowed for content generation.",
                "The team should complete their topic within the given time. If they take too long, they will lose points.",
                "Judges’ decisions will be final and cannot be challenged."
              ]
            },
            {
              heading: "Disqualification Criteria",
              points: [
                "Participants must be present on time. Late arrival may lead to disqualification.",
                "If the content is copied more than the allowed limit (15%), the team may be disqualified.",
                "Exceeding the time limit by more than 2 minutes.",
                "Failure to submit the paper and poster on time.",
                "Misconduct or disrespect towards judges or other participants."
              ]
            }
        ]
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