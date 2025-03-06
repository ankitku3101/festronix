import React from 'react'
import { Button } from "@/components/ui/button"

const EventShowCase = () => {
    return (
    <div
    className='bg-center h-screen flex flex-col items-center justify-center bg-black'
    >
        <div className='h-3/10 flex items-center justify-center text-amber-50 w-full space-x-16'>
            <Button variant={'outline'} className='transition duration-300 ease-in-out hover:bg-[#303030]'>
                PAGE 1
            </Button>
            <Button variant={'outline'} className='transition duration-300 ease-in-out hover:bg-[#303030]'>
                PAGE 2
            </Button>
            <Button variant={'outline'} className='transition duration-300 ease-in-out hover:bg-[#303030]'>
                PAGE 3
            </Button>
        </div>
        <div className='h-7/10 bg-emerald-600 flex items-center justify-center text-amber-50 w-full'>
        z
        </div>
    </div>
  )
}

export default EventShowCase