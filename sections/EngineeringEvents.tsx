import EventDetails from '@/components/event-info/EventDetails';
import React from 'react'

interface Detail{
    image:string;
    title:string;
    description:string;
}

const details : Detail[] = [
    { 
        image: "/hero1.jpg", 
        title: "Robo War", 
        description: "A combat-based robotics challenge where teams design and build robots to battle, testing engineering, control, and strategy." 
    },
    { 
        image: "/hero1.jpg", 
        title: "Line Follower Robot Challenge", 
        description: "Participants build autonomous robots that follow a set path using sensors, showcasing their programming and control systems knowledge." 
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