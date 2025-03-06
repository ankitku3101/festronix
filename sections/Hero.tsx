import React from 'react'

const Hero = () => {
  return (
    <div 
    className='bg-center h-screen w-full flex items-center justify-center bg-[#180126]/78 '
    style={
        {
            backgroundImage:`url(${'/Hero.jpg'})`,
            backgroundSize:'cover',
            height:"100vh",
            width:"100vw",
            backgroundPosition:"center",
            backgroundRepeat:'no-repeat',
            backgroundBlendMode: 'overlay',
        }
    }>
        <div>
            <div 
            className=' text-light font-bold'
            style={{
                fontSize: 'clamp(3rem, 9vw, 9rem)', // Scales between mobile and large screens
                textAlign: 'center'
            }}
            >
                FESTRONIX
            </div>
            <div className='text-center text-light text-4xl'>
                2025
            </div>
        </div>
    </div>
  )
}

export default Hero