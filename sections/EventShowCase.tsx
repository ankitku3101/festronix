"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    // Sample image URLs - replace with your actual images
    const images = [
      "/techevents/hackathon1.jpg",
      "/techevents/aiml.jpg",
      "/techevents/webdesign1.jpg",
      "/techevents/mobileapp1.jpg",
      "/techevents/iot.jpg",
      "/engineer/dronecompetition.jpg",
      "/engineer/robowar.jpg",
      "/engineer/linefollowingrobot.webp",
      "/engineer/cad2.jpg",
      "/engineer/bridge.jpg",
      "/engineer/circuitdesign2.jpg",
      "/Bussiness/treasurehunt3.jpg",
      "/Bussiness/digitaldoodle1.jpg",
      "/Bussiness/quiz2.jpg",
      "/Bussiness/paperpresentation.jpg",
      "/Bussiness/debate1.jpg",
      "/Bussiness/debate1.jpg",
      "/Bussiness/smartbussiness.jpg",
      "/Bussiness/smartinvestor1.jpg",
      "/Bussiness/pitchdeck1.webp",
      "/Bussiness/smartgamer1.jpg",
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
              className="object-cover rounded-lg" // This ensures the image covers the area without overflow
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    )
  }

const EventShowCase = () => {
    return (
    <div id="EventShowCase"
    className='bg-center h-screen flex flex-col items-center justify-center'
    >
        <h2 className="text-3xl md:text-6xl font-bold text-center text-light m-6">Events</h2>
        <h2 className="text-lg md:text-2xl text-center text-light px-4">From coding to creativity, we've got something for everyone</h2>
        <div className='h-4/10 flex flex-col sm:flex-row items-center justify-center text-amber-50 w-full space-y-4 sm:space-y-0 sm:space-x-6'>
            <Button variant={'ghost'} className='text-xl md:text-2xl font-semibold p-6 md:p-10 bg-[#303030]/80 transition duration-300 ease-in-out hover:bg-[#303030] hover:outline hover:text-blue-500'>
              <Link href={'/events/tech/'}>
                Coding & Tech Innovation
              </Link>
            </Button>
            <Button variant={'ghost'} className='text-xl md:text-2xl font-semibold p-6 md:p-10 bg-[#303030]/80 transition duration-300 ease-in-out hover:bg-[#303030] hover:outline hover:text-blue-500'>
              <Link href={'/events/engineering'}>
                Engineering & Design
              </Link>
            </Button>
            <Button variant={'ghost'} className='text-xl md:text-2xl font-semibold p-6 md:p-10 bg-[#303030]/80 transition duration-300 ease-in-out hover:bg-[#303030] hover:outline hover:text-blue-500'>
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
                    <p className="text-2xl font-bold">Prize Pool</p>
                    <p className="text-5xl font-bold text-green">&#8377; 100000</p>
                    <br />
                    <p className="text-justify">
                      Win exciting prizes, cool goodies, and internship opportunities. Show your talent, beat the competition, and take a step closer to your dream career!
                    </p>
                </article>
            </div>
        </div>
    </div>
  )
}

export default EventShowCase