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
        description: "A challenge to develop AI/ML models that address practical issues, showcasing expertise in data science and algorithmic solutions.",
        specification:[
            {
                heading:"Team Composition",
                points:[
                    "Each team can have 2 to 4 members.",
                    "Participants must be from the same institution.",
                    "A team can have only one robot."
                ]
            },
            {
                heading: "Team Composition",
                points: [
                  "Each team can have 2 to 4 members.",
                  "Participants must be from the same institution.",
                  "A team can have only one robot."
                ]
            },
            {
                "heading": "Robot Specifications",
                "points": [
                  "The robot must be autonomous (no manual control allowed).",
                  "The weight should not exceed 2 kg.",
                  "The robot must be powered by an onboard power supply (no external power allowed).",
                  "Use of sensors (IR, LDR, etc.) for line detection is permitted.",
                  "The robot should not damage the track or the competition area."
                ]
            },
            {
                "heading": "Track Specifications",
                "points": [
                  "The track will have a black line (2 cm - 3 cm width) on a white surface.",
                  "The track may have curves, intersections, and sharp turns.",
                  "Some sections may have gaps (robot must predict and continue the path)."
                ]
            },
            {
                "heading": "Competition Rules",
                "points": [
                  "Each team gets 2 trials, and the best timing will be considered.",
                  "If the robot moves off the track:",
                  "First deviation: Warning and restart from the last checkpoint.",
                  "Second deviation: 5-second penalty.",
                  "Third deviation: Disqualification from that round.",
                  "External assistance during the run is not allowed.",
                  "The robot must complete the course within 3 minutes."
                ]
            },
            {
                "heading": "Scoring Criteria",
                "points": [
                  "Completion Time: Faster robots score higher.",
                  "Accuracy: Staying on track earns additional points.",
                  "Bonus Points: Additional points for successfully handling complex turns or gaps."
                ]
            },
            {
                "heading": "Disqualification Criteria",
                "points": [
                  "Any form of external control or remote operation.",
                  "Damaging the track or using destructive components.",
                  "Violating size or power specifications.",
                  "Teams found tampering with another team’s robot."
                ]
            }
        ]
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