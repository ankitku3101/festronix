'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const BGWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bg1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); 
  const bg2Opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]); 

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-2]" 
        style={{
          backgroundImage: `url('/Hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: bg1Opacity,
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-blue-800/30 z-[-1]" 
        style={{ opacity: bg1Opacity }}
      />

      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url('/HeroBG4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: bg2Opacity,
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/60 z-0" 
        style={{ opacity: bg2Opacity }}
      />

      <div className="absolute inset-0 bg-dark/70 z-0" />

      <div className="relative z-10 space-y-20">
        {children}
      </div>
    </div>
  );
}

export default BGWrapper;
