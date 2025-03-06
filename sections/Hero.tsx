import React from 'react'

const Hero = () => {
  return (
    <div 
    className='flex items-center justify-center min-h-screen'
    style={
        {
            backgroundImage:`url(${'/Hero.jpg'})`,
            
        }
    }>
        <div >
            <div className=' text-light font-bold text-7xl'>
                FESTRONIX
            </div>
            <div className='text-center text-light font-bold' style={{ letterSpacing: '0.7em' }}>
                2025
            </div>
        </div>
    </div>
  )
}

export default Hero