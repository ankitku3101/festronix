import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../styles/fonts/RapierZeroItalic.otf' })

const Hero = () => {
  return (
    <div 
        className='bg-center min-h-screen w-full flex items-center justify-center bg-[#180126]/90 '
        style={
            {
                backgroundImage:`url(${'/Hero.jpg'})`,
                backgroundSize:'cover',
                width:"100vw",
                backgroundPosition:"center",
                backgroundRepeat:'no-repeat',
                backgroundBlendMode: 'overlay',
            }
        }
    >
        <div>
            <div 
            className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-8'
            >
                <h1 className={`${myFont.className} text-6xl md:text-7xl lg:text-9xl tracking-wide`}>FESTR<span className='text-green-400'>O</span>N<span className='text-green-400'>I</span>X</h1>
                <p className={`${myFont.className} text-[37px] md:text-[42px] lg:text-[85px] tracking-wider text-right mr-9 -mt-5 md:mr-11 md:-mt-6 lg:mr-18 lg:-mt-13`}>2<span className='text-green-400'>0</span>25</p>
            </div>
        </div>
    </div>
  )
}

export default Hero