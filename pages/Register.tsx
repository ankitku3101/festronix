import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <div className='min-h-screen flex justify-center text-light p-4 md:p-8 lg:p-20 mt-10'>
        <div className='w-full max-w-7xl'>
            <h1 className='text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-bold'>
                Registeration
            </h1>
            <p className='text-center m-8 text-xl md:text-2xl lg:text-3xl '>
                Follow these steps to register for the events at Festronix 2025
            </p>
            <p className='text-center m-8 text-lg md:text-xl lg:text-2xl '>
                <span className='text-red-300 font-semibold'>Note</span><br/> One student can only partcitpate in a maximum of 3 events.<br/>
                Kindly check the event schedule to avoid any issues.<br/>
            </p>
            <p className='text-center m-8 text-lg md:text-xl lg:text-2xl '>
                <span className='text-green-300 font-semibold'>Step 1</span><br/> Click on this link & fill out all the details.<br/> Then you will get an unique ID. <br/>
                <Link href={'https://festronix-registration.vercel.app'} className='text-blue-300'>https://festronix-registration.vercel.app</Link>
            </p>
            <p className='text-center m-8 text-lg md:text-xl lg:text-2xl '>
                <span className='text-green-300 font-semibold'>Step 2</span><br/> After getting the ID, go to this link and download your ticket.<br/> Tickets will be issued only after verification. <br/>
                <Link href={'https://festronix-downloadtickets.vercel.app'} className='text-blue-300'>https://festronix-downloadtickets.vercel.app</Link>
            </p>
        </div>
    </div>
  )
}

export default Register