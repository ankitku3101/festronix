import React from 'react'
import CardNText from './CardNText'
import {Detail} from "@/types/TypeFile"

interface DetailProps{
    details:Detail[];
    odd?:boolean
}

const EventDetails : React.FC<DetailProps>  = ({details,odd}) => {
  return (
    <div className='space-y-12 md:space-y-20 w-full'>
    {
        details.map((item,index)=>{
            return <CardNText key={index+(odd?1:0)} index={index+(odd?1:0)} image={item.image} description={item.description} title={item.title} specification={item.specification} doclink={item.doclink}/>
        })
    }
    </div>
  )
}

export default EventDetails