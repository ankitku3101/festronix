import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <div className='min-h-screen flex justify-center text-light p-4 md:p-8 lg:p-20 mt-10'>
        <div className='w-full max-w-7xl'>
            <h1 className='text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-bold'>
                Registration
            </h1>
            <p className='text-center m-8 text-xl md:text-2xl lg:text-3xl text-white '>
                Follow these steps to register for the events at Festronix 2025
            </p>
            <p className='text-center m-8 text-lg md:text-xl lg:text-2xl text-white '>
                <span className='text-red-300 font-semibold'>Note</span><br/> One student can only partcitpate in a maximum of 3 events.<br/>
                Kindly check the event schedule to avoid any issues.<br/>
            </p>
            <p className='text-center m-8 text-lg md:text-xl lg:text-2xl text-white '>
                <span className='text-green-300 font-semibold'>Step 1</span><br/> Click on this link & fill out all the details.<br/> Then you will get an unique ID. <br/>
                <button type="button" className="my-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={'https://festronix-registration.vercel.app'}>Register Here</Link>
                </button>
            </p>
            <p className='text-center m-8 text-lg md:text-xl lg:text-2xl text-white '>
                <span className='text-green-300 font-semibold'>Step 2</span><br/> After getting the ID, go to this link and download your ticket.<br/> Tickets will be issued only after verification. <br/>
                <button type="button" className="my-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link href={'https://festronix-downloadtickets.vercel.app'}>Download Ticket</Link>
                </button>
            </p>
        </div>
    </div>
  )
}

export default Register