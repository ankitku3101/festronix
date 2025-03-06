import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../styles/fonts/RapierZeroItalic.otf' })

const Hero = () => {
  return (
    <div 
    className='bg-center h-screen w-full flex items-center justify-center bg-[#180126]/78 '
    style={
        {
            backgroundImage:`url(${'/Hero.jpg'})`,
            backgroundSize:'cover',
            height:"100vh",
            backgroundPosition:"center",
            backgroundRepeat:'no-repeat',
            backgroundBlendMode: 'overlay',
        }
    }>
        <div className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-8'>
            {/* <div 
            className=' text-light font-bold'
            style={{
                fontSize: 'clamp(3rem, 9vw, 9rem)', // Scales between mobile and large screens
                textAlign: 'center',
            }}
            >
                FESTRONIX
            </div>
            <div 
            className='text-center text-light text-4xl' 
            style={{
                fontSize: 'clamp(1rem, 5vw, 4rem)', // Scales between mobile and large screens
                letterSpacing: '0.7em', // Adds even spacing around numbers
                textAlign: 'center'
            }}>
                2025
            </div> */}

{/* <h1 className={`${myFont.className} text-6xl md:text-7xl lg:text-9xl tracking-wide`} style={{fontSize: 'clamp(4rem, 9vw, 9rem)',}}>FESTR<span className='text-green-400'>O</span>N<span className='text-green-400'>I</span>X</h1>
<p className={`${myFont.className} text-[37px] md:text-[42px] lg:text-[85px] tracking-wider text-right mr-9 -mt-5 md:mr-11 md:-mt-6 lg:mr-18 lg:-mt-13`}>2<span className='text-green-400'>0</span>25</p> */}
            <h1 
            className={`${myFont.className} text-6xl md:text-7xl lg:text-9xl tracking-wide`} 
            style={
                {
                    fontSize: 'clamp(3rem, 9vw, 9rem)', // Scales between mobile and large screens
                    textAlign: 'center'
                }
            }
            >
                FESTR<span className='text-green-400'>O</span>N<span className='text-green-400'>I</span>X
            </h1>
            
            <p 
            className={`${myFont.className} text-[37px] md:text-[42px] lg:text-[85px] tracking-wider text-right mr-9 -mt-5 md:mr-11 md:-mt-6 lg:mr-18 lg:-mt-13`}
            style={
                {
                    fontSize: 'clamp(1.8rem, 5vw, 4rem)', // Scales between mobile and large screens
                     // Adds even spacing around numbers
                    
                }
            }
            >
                2<span className='text-green-400'>0</span>25
            </p>
        </div>
        
    </div>
  )
}

export default Hero