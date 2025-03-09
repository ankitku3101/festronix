import React from 'react'
import CardNText from './CardNText'
import {Detail} from "@/types/TypeFile"

interface DetailProps{
    details:Detail[];
    odd?:boolean
}

const EventDetails : React.FC<DetailProps>  = ({details,odd}) => {
  return (
    <div className='space-y-20'>
    {
        details.map((item,index)=>{
            return <CardNText key={index+(odd?1:0)} index={index+(odd?1:0)} image={item.image} description={item.description} title={item.title} specification={item.specification}/>
        })
    }
    </div>
  )
}

export default EventDetails