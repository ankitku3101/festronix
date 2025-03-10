import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import LearnMore from './LearnMore';
import {indepthDetails} from "@/types/TypeFile"

interface CardNTextProps {
  image: string;
  title: string;
  description: string;
  index: number;
  specification?: indepthDetails[];
  doclink?:string;
}

const CardNText : React.FC<CardNTextProps> = ({image,title,description,index,specification,doclink}) => {

  return (
    <section key={index} className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 items-center">
      <div className={cn("flex flex-col space-y-4", index % 2 === 1 ? "md:order-1" : "md:order-0")}>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        
        <div 
        className={cn(
        "pt-4",
        index % 2 === 1 ? "md:text-right" : "md:text-left",
        "text-center md:text-left"
        )}>
          {/* <ModalComponent specification={specification}/> */}
          <LearnMore doclink={doclink}/>
        </div>

      </div>

      <div
        className={cn(
          "relative w-full aspect-video overflow-hidden rounded-lg",
          "sm:w-auto",
          index % 2 === 1 ? "md:order-0" : "md:order-1"
        )}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          layout="responsive"
          width={16}
          height={9}
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default CardNText