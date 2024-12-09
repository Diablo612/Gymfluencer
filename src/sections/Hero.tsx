"use client"
import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from '@/assets/cog.png'
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from '@/assets/noodle.png'
import { motion, useAnimate, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export const Hero = () => {
  const [scope, animate] = useAnimate();
  const [cscope, canimate] = useAnimate();
  useEffect(() => {
    animate([
      [scope.current, { opacity: [0, 1] }, { duration: 0.5 }],
      [scope.current, { x:0, y: [0, 20, 0]}, {duration: 0.5} ]
    ])
  },)
  useEffect(() => {
    canimate([
      [cscope.current, { opacity: [0, 1] }, { duration: 0.5 }],
      [cscope.current, { x:0, y: [0, 20, 0]}, {duration: 0.5} ]
    ])
  },)
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])
  return (
  <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
    <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div 
          className="tag">Version 2.0</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-1">Pocket Size Fitness Coach</h1>
          <p className="text-xl text-[#010D3E] tracking tight mt-6">
            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">
              Login
            </button>
            <button className="btn btn-text">
              Sign Up
            <ArrowIcon className="h-5 w-5"/>
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img
          src={cogImage.src} 
          alt="Dumble" 
          className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg: left-0"
          animate={{
            translateY: [-30,30]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          />
          <motion.div
          ref={cscope}
          initial ={{ opacity:0, y: 100, x: -100}}
          drag
          >
          <motion.img 
          src={cylinderImage.src} alt="Barbell" draggable="false" width={220} height={220} className="hidden md:block -top-8 -left-32 md:absolute"
          style={{
            translateY: translateY,
          }}/>
          </motion.div>
          <motion.div
          ref={scope}
          initial ={{opacity: 0, y: 100, x: -100}}
          drag
          >
          <motion.img
          src={noodleImage.src} alt="weight" 
          draggable="false"
          width={220} className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
          style={{
            rotate: 30,
            translateY: translateY,
          }}/>
         </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};
