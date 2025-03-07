import EventDetails from '@/components/event-info/EventDetails'
import React from 'react'

interface Detail{
    image:string;
    title:string;
    description:string;
}

const details : Detail[] = [
    {
        image:"/hero1.jpg",
        title:"T0",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam maiores expedita molestiae facere repudiandae minus nihil vel beatae sit aut tempore autem labore, atque omnis quam accusantium. Eligendi, architecto",
    },
    {
        image:"/hero1.jpg",
        title:"T1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam maiores expedita molestiae facere repudiandae minus nihil vel beatae sit aut tempore autem labore, atque omnis quam accusantium. Eligendi, architecto",
    },
    {
        image:"/hero1.jpg",
        title:"T2",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam maiores expedita molestiae facere repudiandae minus nihil vel beatae sit aut tempore autem labore, atque omnis quam accusantium. Eligendi, architecto",
    },
    {
        image:"/hero1.jpg",
        title:"T3",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam maiores expedita molestiae facere repudiandae minus nihil vel beatae sit aut tempore autem labore, atque omnis quam accusantium. Eligendi, architecto",
    },
    {
        image:"/hero1.jpg",
        title:"T4",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam maiores expedita molestiae facere repudiandae minus nihil vel beatae sit aut tempore autem labore, atque omnis quam accusantium. Eligendi, architecto",
    },
]

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