"use client"
import Image from "next/image";
import productImage from "@/assets/Product.jpg"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Tag from "@/components/Tag";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])
  return (
    <section ref={productRef} className="bg-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center py-4">
          <Tag>Boost Your Workout</Tag>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#183EC2] text-transparent bg-clip-text mt-5">A more effective way to track progress</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tighter text-[#010D3E] mt-5">
            Just click on Get Started and start your journey. {" "}
            <span>Log your Exercises</span>{" "}
            <span>Count Your Reps</span>{" "}
            <span>Track Your Progess</span>{" "}
            <span>Review Your Progress</span>{" "}
          </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10"/>
        <motion.img src={pyramidImage.src} alt="Pyramid Image"
        height={262} width={262} className="hidden md:block absolute -right-36 -top-32"
        style={{
          translateY,
        }}
        />
        <motion.img src={tubeImage.src} alt="Tube Image"
        height={248} width={248} className="hidden md:block absolute -left-36 bottom-24"
        style={{
          translateY,
        }}/>
        </div>
      </div>
    </section>
  );
};
