"use client"
import Tag from "@/components/Tag"
import { useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
const text = `Designed to help you track your workouts with ease. Our application allows you to log exercises, count reps, and calculate calories burned, all through a user-friendly interface. Whether you’re a beginner or a seasoned athlete, our app will keep you motivated and on track.`;
const words = text.split(' ');

export default function Introduction() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    })
    const [currentWord, setCurrentWord] = useState(0)
    const wordIndex = useTransform(scrollYProgress, [0,1], [0, words.length])

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest);
        })
    })
    return (
        <section className="py-28 lg:40 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
            <div className="container">
              <div className="sticky top-20 md:top-28 lg:top-40">
                <div className="flex justify-center">
                <Tag>Introducing Gymfluencer</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:7xl text-center font-medium mt-10">
                    <span>Your Ultimate Fitness companion.</span>{" "}
                    <span>
                    {words.map((word, wordIndex) => (
                        <span key={wordIndex} className={twMerge("transition duration-500 text-black/25", wordIndex < currentWord && 'text-black')}>{`${word} `}</span>
                    ))}
                    </span>
                    <span className="text-[#183EC2] block">Built for perfection</span>
                </div>
              </div>
              <div className="h-[150vh]" ref={targetRef}></div>
            </div>
        </section>
    )
}
