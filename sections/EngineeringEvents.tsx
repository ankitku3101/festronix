import EventDetails from '@/components/event-info/EventDetails';
import React from 'react'
import { Detail } from "@/types/TypeFile"

const details : Detail[] = [
    { 
        image: "/engineer/dronecompetition.jpg", 
        title: "Aerox - The Ultimate Drone Challenge", 
        description: "An adrenaline-packed competition where innovation takes flight! Participants design, build, and pilot high-performance drones through challenging obstacle courses and precision tasks. Test your engineering skills, control accuracy, and strategic planning as you navigate your drone to victory. Only the most skilled and creative minds will conquer the skies!",
        doclink:"https://drive.google.com/file/d/1KunMmjy2f1dTJUcmc8NlvM2KlMDd6LkU/view?usp=sharing",
    },
    { 
        image: "/engineer/robowar.jpg", 
        title: "Sumo Robo Competition", 
        description: "A combat-based robotics challenge where teams design and build robots to battle, testing engineering, control, and strategy.",
        doclink:"https://drive.google.com/file/d/1GWpZ6HG3jHHiw5QboecPV2Q_vbzM_M9z/view?usp=sharing"
    },
    { 
        image: "/engineer/linefollowingrobot.webp", 
        title: "Line Follower Robot Challenge", 
        description: "The Line Follower Robot Challenge is a robotics competition where autonomous robots must follow a predefined path marked by a black or white line on a contrasting background. The robots should complete the track as quickly and accurately as possible.",
        doclink:'https://drive.google.com/file/d/1idNBjj47Q16gQU0YmlMAZes_hpVFufDz/view?usp=sharing',
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
        image: "/engineer/cad2.jpg", 
        title: "CAD Designing Contest", 
        description: "A creative competition to design 3D models using CAD software, emphasizing engineering design and product visualization.",
        doclink:"https://drive.google.com/file/d/11Xc7AH5IfYE7-gvkFeyXVDMIeCUMTq_d/view?usp=sharing"
    },
    { 
        image: "/engineer/bridge.jpg", 
        title: "Bridge Building Contest", 
        description: "An engineering challenge to construct miniature bridges, evaluating strength, stability, and structural integrity." ,
        doclink:"https://docs.google.com/document/d/1yXnKg1P6TBsx0hPuA_qRXeS9bKXkv1En/edit?usp=sharing&ouid=104139874459412838561&rtpof=true&sd=true"
    },
    { 
        image: "/engineer/circuitdesign2.jpg", 
        title: "Circuit Designing Competition", 
        description: "A test of electronics knowledge where participants design and assemble functional electronic circuits.",
        doclink:"https://drive.google.com/file/d/1eaZAY2qcN7pOBtIWxU75SqWs11mhKFLo/view?usp=sharing"
    }
];

const EngineeringEvents = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-light p-4 md:p-8 lg:p-20 mt-20'>
        <div className='w-full max-w-7xl'>
            <p className='text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-bold'>
                Engineering & Design
            </p>
            <EventDetails details={details} odd={true}/>
        </div>
    </div>
  )
}

export default EngineeringEvents