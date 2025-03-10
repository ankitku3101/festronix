'use client'

import React from 'react'
import localFont from 'next/font/local'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const myFont = localFont({ src: '../styles/fonts/RapierZeroItalic.otf' })

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full flex items-center justify-center ">
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity,
        }}
      />

      <div className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-8">
        <h1
          className={`${myFont.className} text-6xl md:text-7xl lg:text-9xl tracking-wide`}
          style={{ fontSize: 'clamp(3rem, 9vw, 9rem)', textAlign: 'center' }}
        >
          FESTR<span className="text-green-400">O</span>N
          <span className="text-green-400">I</span>X
        </h1>
        <p
          className={`${myFont.className} text-[37px] md:text-[42px] lg:text-[85px] tracking-wider text-right mr-9 -mt-5 md:mr-11 md:-mt-6 lg:mr-20 lg:-mt-10`}
          style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}
        >
          2<span className="text-green-400">0</span>25
        </p>
      </div>
    </div>
  )
}

export default Hero
