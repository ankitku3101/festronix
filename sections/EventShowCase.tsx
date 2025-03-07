"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    // Sample image URLs - replace with your actual images
    const images = [
      "/Hero.jpg?height=600&width=800",
      "/Hero1.jpg?text=Image+2",
      "/Hero2.jpg?text=Image+3",
      "/Hero3.jpg?text=Image+4",
      "/Hero4.jpg?text=Image+5",
      "/Hero5.jpg?text=Image+6",
      "/Hero6.jpg?text=Image+7",
      "/Hero7.jpg?text=Image+8",
    ]
  
    // Auto-shuffle images every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      }, 3000)
  
      return () => clearInterval(interval)
    }, [images.length])
  
    return (
      <div className="relative w-full h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Slideshow image ${index + 1}`}
              fill
              className="object-cover" // This ensures the image covers the area without overflow
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    )
  }

const EventShowCase = () => {
    return (
    <div
    className='bg-center h-screen flex flex-col items-center justify-center bg-black'
    >
        <div className='h-3/10 flex flex-col sm:flex-row items-center justify-center text-amber-50 w-full space-y-4 sm:space-y-0 sm:space-x-16'>
            {/* <Button variant={'ghost'} className='transition duration-300 ease-in-out hover:bg-[#303030]'>
                PAGE 1
            </Button>
            <Button variant={'ghost'} className='transition duration-300 ease-in-out hover:bg-[#303030]'>
                PAGE 2
            </Button>
            <Button variant={'ghost'} className='transition duration-300 ease-in-out hover:bg-[#303030]'>
                PAGE 3
            </Button> */}
            <Button variant={'ghost'} className='text-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-[#303030] hover:outline'>
              <Link href={'/events/tech/'}>
                Coding & Tech Innovation
              </Link>
            </Button>
            <Button variant={'ghost'} className='text-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-[#303030] hover:outline'>
              <Link href={'/events/engineering'}>
                Engineering & Design
              </Link>
            </Button>
            <Button variant={'ghost'} className='text-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-[#303030] hover:outline'>
              <Link href={'/events/non-tech'}>
                Business, Creativity & Knowledge
              </Link>
            </Button>
        </div>
        <div className='h-7/10 flex flex-col sm:flex-row items-center justify-center text-amber-50 w-full'>
            <div className="flex items-center justify-center text-amber-50 sm:w-7/10 w-full sm:h-full h-7/10 p-10">
                <ImageCarousel/>
            </div>

            <div className="flex items-center justify-center text-amber-50 sm:w-3/10 w-full sm:h-full h-3/10 p-10 text-center sm:text-left">
                <article>
                    <p className="text-3xl font-bold">Lorem ipsum dolor</p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, inventore corrupti, molestias dignissimos placeat
                    </p>
                </article>
            </div>
        </div>
    </div>
  )
}

export default EventShowCase