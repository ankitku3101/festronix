import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardNTextProps {
    image:string;
    title:string;
    description:string;
    index:number;
}

const CardNText : React.FC<CardNTextProps> = ({image,title,description,index}) => {
  return (
    <section key={index} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className={cn("flex flex-col space-y-4", index % 2 === 1 ? "md:order-1" : "md:order-0")}>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div
            className={cn(
              "relative aspect-video overflow-hidden rounded-lg",
              index % 2 === 1 ? "md:order-0" : "md:order-1",
            )}
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </section>
  )
}

export default CardNText