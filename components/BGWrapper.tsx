'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const BGWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const opacity = useTransform(scrollYProgress, [0.02, 0.3], [0, 1]); 

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]), 
        }}
      />

      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/HeroBG4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity, 
        }}
      />

      <div className="absolute inset-0 bg-dark/70 z-5" />

      <div className="relative z-10 space-y-20">
        {children}
      </div>
    </div>
  );
}

export default BGWrapper;
