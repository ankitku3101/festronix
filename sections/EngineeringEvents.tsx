import EventDetails from '@/components/event-info/EventDetails';
import React from 'react'
import { Detail } from "@/types/TypeFile"

const details : Detail[] = [
    { 
        image: "/hero1.jpg", 
        title: "Robo War", 
        description: "A combat-based robotics challenge where teams design and build robots to battle, testing engineering, control, and strategy." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Line Follower Robot Challenge", 
        description: "Participants build autonomous robots that follow a set path using sensors, showcasing their programming and control systems knowledge.",
        doclink:'https://docs.google.com/document/d/1y7eWhxu-XmNC8BRYQqbtRhP4JMehEQ82/edit?usp=sharing&ouid=104139874459412838561&rtpof=true&sd=true',
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
        title: "CAD Designing Contest", 
        description: "A creative competition to design 3D models using CAD software, emphasizing engineering design and product visualization." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Bridge Building Contest", 
        description: "An engineering challenge to construct miniature bridges, evaluating strength, stability, and structural integrity." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Circuit Designing Competition", 
        description: "A test of electronics knowledge where participants design and assemble functional electronic circuits."
    }
];

const EngineeringEvents = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-light p-20'>
        <div>
            <p className='text-center p-15 text-6xl font-bold'>
                Engineering & Design
            </p>
            <EventDetails details={details} odd={true}/>
        </div>
    </div>
  )
}

export default EngineeringEvents