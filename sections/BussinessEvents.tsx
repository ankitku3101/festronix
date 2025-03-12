import EventDetails from '@/components/event-info/EventDetails'
import React from 'react'
import {Detail} from "@/types/TypeFile"

const details : Detail[] = [
    { 
        image: "/Bussiness/treasurehunt3.jpg", 
        title: "Treasure Hunt", 
        description: "Participants must follow the given clues, solve puzzles, search for hidden hints and find the next locations.They should work quickly, either individually or in teams, to reach the final treasure.",
        doclink:'https://drive.google.com/file/d/1HUZUYdpwrcksOT_p3Mwhtbo2fdxkazC4/view?usp=sharing',
    },
    { 
        image: "/Bussiness/digitaldoodle1.jpg", 
        title: "Digital Doodle Contest", 
        description: "The Digital Doodle Contest is an exciting one-round competition open to students from all colleges. Participants will showcase their creativity by designing a unique doodle using digital tools such as mobile devices, laptops, or tablets. The doodle must be created for a specific application.",
        doclink:"https://drive.google.com/file/d/1k6POPUT05MEWUkAajkimIWm43LyePp75/view?usp=sharing",
    },
    { 
        image: "/Bussiness/quiz2.jpg", 
        title: "Tech Quiz", 
        description: "A knowledge-based competition testing participants on advancements in technology, engineering, and science.",
        doclink:'https://drive.google.com/file/d/1A6hVs9ZUs-Oy-I0Tb7kNbr8sGLIO9Rc1/view?usp=sharing',
    },
    { 
        image: "/Bussiness/paperpresentation.jpg", 
        title: "Paper Presentation", 
        description: "The Paper Presentation Challenge is a competition where participants showcase their research or innovative ideas on a technical or business-related topic of their choice. Each team must prepare both a poster and a PowerPoint presentation (PPT) to effectively communicate their findings.",
        doclink:'https://drive.google.com/file/d/1c7yiSD3K1l9Y3RwDKSdSKT8OXWZ-0F5n/view?usp=sharing',
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
        image: "/Bussiness/debate1.jpg", 
        title: "Tech Debate", 
        description: "A spirited debate on emerging technologies, encouraging critical thinking, communication, and awareness.",
        doclink:"https://drive.google.com/file/d/1aND5SUBlWufmfL3LKnNT7v7wYxNQB_Jb/view?usp=sharing",
    },
    { 
        image: "/Bussiness/smartbussiness.jpg", 
        title: "Best Business Personal", 
        description: "A business simulation where participants set up stalls and strategize to make profits, honing marketing and financial management skills.",
        doclink:"https://docs.google.com/document/d/1CZrA2aoIkI8N24vT9VlYIxRjcZndROmX/edit?usp=sharing&ouid=104139874459412838561&rtpof=true&sd=true"
    },
    { 
        image: "/Bussiness/smartinvestor1.jpg", 
        title: "Smart Investor", 
        description: "A virtual investment challenge where participants build portfolios and showcase their day-trading expertise.",
        doclink:"https://drive.google.com/file/d/1-poEhHuQEKDYPFhwqB17gXV7EARSv2_m/view?usp=sharing"
    },
    { 
        image: "/Bussiness/pitchdeck1.webp", 
        title: "Pitch Deck Through Canva Video", 
        description: "'Pitch Deck Through Canva Video' is an inter-college event aimed at enhancing participants' entrepreneurial and presentation skills. Participants will create compelling pitch decks using Canva and present innovative startup ideas. The event encourages creativity, business acumen, and effective communication.",
        doclink:"https://drive.google.com/file/d/1mkSXITxDNQPm-J7bPWt76AW1LWENTyUK/view?usp=sharing",
    },
    {
      image:"/Bussiness/smartgamer1.jpg",
      title:"Smart Gamer",
      description:"A high-stakes battle royale showdown inspired by Free Fire and BGMI, where participants showcase their strategic gameplay, quick reflexes, and team coordination. Compete in intense matches, demonstrate your survival instincts, and prove your mastery in tactical decision-making and in-game strategy. Only the smartest and most skilled gamers will rise to the top!",
      doclink:"https://drive.google.com/file/d/1xnz5IcSO45JO52KoY6IAIzNuZBCD_0HJ/view?usp=sharing"
    }
];

const BussinessEvents = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-light p-4 md:p-8 lg:p-20 mt-20'>
        <div className='w-full max-w-7xl'>
            <p className='text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-bold'>
              Business, Creativity & Knowledge
            </p>
            <EventDetails details={details} odd={false}/>
        </div>
    </div>
  )
}

export default BussinessEvents