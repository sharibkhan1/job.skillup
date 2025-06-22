"use client";

import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from "next/image";
import Inputcostomw from '../inputcostomw';
import { ArrowRight } from 'lucide-react';

export interface ImageAsset {
  url: string;
}

export interface PrefooterData {
  title: string;
  frontimg: ImageAsset;
  backimg: ImageAsset;
  buttitle: string;
  bottomtitle: string;
  bottombuttext: string;
}

export interface BlockData {
  block?: Array<{
    prefooter?: PrefooterData;
  }>;
}

const SecFoot = ({data}:{data: BlockData }) => {

  const scrollDirection = useMotionValue(0);
  const frontSpring = useSpring(scrollDirection, { stiffness: 100, damping: 20 });
   
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      const clamped = Math.max(Math.min(delta, 20), -20);
      scrollDirection.set(clamped);
      setTimeout(() => scrollDirection.set(0), 100);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const prefooter = data?.block?.find((b) => b.prefooter)?.prefooter;
  if (!prefooter) return null;



  return (
    <div className="bg-[#DAE8E8] text-black w-full py-10 md:py-32">
      <div className="px-4 sm:px-6 md:px-12 xl:px-20 2xl:px-[18rem]">
        <div className="flex flex-col p-4 md:p-20 md:flex-col lg:flex-row justify-between gap-10 relative overflow-hidden rounded-t-3xl bg-[#F2F6F7] shadow-sm">

      {/* RIGHT CONTENT */}
          <div className="relative mb-20 z-10 w-full flex justify-center lg:justify-end items-center order-1 lg:order-2">
                    <motion.div
              style={{ y: frontSpring }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
              }}className="relative w-[250px] ml-10 md:ml-10 sm:w-[300px] md:w-[350px] lg:w-[350px] xl:w-[400px]">
          <Image
                src={prefooter.backimg.url}
            alt="Gynger Card"
            width={700}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />

          {/* Overlay Card */}
          <div className=" w-[200px] backdrop-blur-sm sm:w-[240px] md:w-[300px] lg:w-[300px] absolute -left-[25%] -bottom-14 md:-bottom-20">
             <Image
                  src={prefooter.frontimg.url}
            alt="Gynger Card"
            width={250}
            height={150}
            className="rounded-xl object-cover w-full h-auto"
          />
          </div>
            </motion.div>
      </div> 
      {/* LEFT CONTENT */}
<div className="relative space-y-8  z-10 w-full text-center lg:text-left flex flex-col max-lg:items-center justify-center order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#0c1a1a] font-normal">
              {prefooter.title}
            </h2>
            <Inputcostomw/>
          </div>
          </div>

        <div className='bg-[#f2f8f8] rounded-b-3xl' >
        {/* ✅ BOTTOM GRADIENT BORDER */}
        <div className="h-2 w-full bg-gradient-to-r from-[#FBE8DB] via-[#F5F2DC] to-[#F5E7DF]" />
        {/* ✅ BOTTOM TEXT */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm sm:text-md md:text-xl gap-4 py-10 px-10">
          <p className="text-[#3b6e6e] font-medium text-center md:text-left">
              {prefooter.bottomtitle}
          </p>
            <div className="inline-flex items-end gap-2  font-medium text-[#254e4e] hover:text-[#0c4242] group transition-colors duration-300 cursor-pointer">
              {prefooter.bottombuttext}
 <ArrowRight
    className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1"
  />
</div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default SecFoot;
