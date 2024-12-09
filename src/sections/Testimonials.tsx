"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Tag from "@/components/Tag";
import Image from "next/image";
import {motion} from "framer-motion"
import { twMerge } from "tailwind-merge";
import React from "react";

const testimonials = [
  {
    text: "As a fitness enthusiast, this AI workout app instantly became my go-to for tracking and optimizing my exercise routines.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamiefitnessfanatic",
  },
  {
    text: "Our team's gym sessions are more productive than ever with personalized workout plans from this app.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@joshgymguy",
  },
  {
    text: "This app has completely transformed how I approach fitness, helping me stay consistent and motivated.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganfitwhiz",
  },
  {
    text: "I was amazed at how quickly this app tailored a workout plan that perfectly matched my goals.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyfitjourney",
  },
  {
    text: "Tracking my reps, sets, and progress has never been easier. This app ensures I hit my fitness targets every week.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorlifts",
  },
  {
    text: "The AI-generated plans and detailed analytics make this app an indispensable part of my fitness routine.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysweats",
  },
  {
    text: "Adopting this app has revolutionized our group workouts. Everyone stays on track and motivated.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsfitness",
  },
  {
    text: "With this app, I can easily log workouts, monitor progress, and adjust my routine to maximize results.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsonworkout",
  },
  {
    text: "Its user-friendly interface and AI capabilities have simplified my fitness journey like never before.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@caseyfittrack",
  },
];

const firstColum = testimonials.slice(0,3)
const secondColum = testimonials.slice(3,6)
const thirdColum = testimonials.slice(6,9)

const TestimonialsColumn = (props: { 
  className?: string; 
  testimonials: typeof testimonials,
  duration?: number
}) => (
  <div className={props.className}>
  <motion.div 
  animate={{
    translateY: "-50%",
  }}
  transition={{
    duration: props.duration || 10,
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop",
  }}
  className="flex flex-col gap-6 pb-6">
    {[...new Array(2)].fill(0).map((_, index) => (
      <React.Fragment key={index}>
        {props.testimonials.map(({text, imageSrc, name, username}, testimonialIndex) => (
          <div
          key={testimonialIndex} 
          className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
              <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
          <Image 
          src={imageSrc} 
          alt={name} 
          width={40} 
          height={40}
          className="h-10 w-10 rounded-full"
          />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">{name}</div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
           ))}
      </React.Fragment>
    ))}
</motion.div>
</div>
)

export const Testimonials = () => {
  return (
  <section className="bg-gradient-to-t from-white to-[#D2DCFF]">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
        <Tag>Testimonials</Tag>
        </div>
        <h2 className="section-title mt-5">What our users say</h2>
      <p className="section-description mt-5">
        From our intuitive design to powerful features, our app has become an essential tool for users around the world.
      </p>
     </div>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        < TestimonialsColumn testimonials={firstColum} duration={15}/>
        < TestimonialsColumn testimonials={secondColum} className="hidden md:block" duration={19}/>
        < TestimonialsColumn testimonials={thirdColum}
        className="hidden md:block" duration={17}/>
     </div>
    </div>
  </section>
  )
};
