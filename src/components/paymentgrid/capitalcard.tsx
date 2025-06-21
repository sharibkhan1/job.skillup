"use client"
import { ArrowRight } from "lucide-react";
import { TextScramble } from "../text-scamble";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GyngerCapitalCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useMotionValue(0);
  const backSpring = useSpring(scrollDirection, { stiffness: 100, damping: 20 });

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

  return (
    <section ref={containerRef} className="flex mt-6 flex-col-reverse max-xl:pb-7 py-10 xl:flex-row justify-between gap-10 relative overflow-hidden rounded-3xl bg-[#f2f8f8] shadow-sm">
      <div className="absolute text-[15rem] md:text-[20rem] font-light text-[#d6e6e6] opacity-30 top-[-6rem] left-[2rem] leading-none select-none pointer-events-none z-0">
        Capital
      </div>

      {/* LEFT */}
      <div
        className="relative px-5 xl:px-12 pt-5 xl:pl-20 xl:pt-10 md:pb-20 z-10 w-full text-center xl:text-left flex flex-col justify-between"
      >
        <h2 className="text-3xl md:text-5xl text-[#0c1a1a] font-medium">Gynger Capital</h2>
        <p className="xl:mt-[40%] mt-6 text-base md:text-xl text-[#0c4242] mx-auto xl:mx-0">
          Access fast, non-dilutive capital with Gynger Capitals embedded AP and AR financing solutions.
        </p>
        <div className="mt-6 flex flex-col xl:flex-row gap-4 w-full xl:w-auto items-center xl:items-start">
          <button className="inline-flex items-center gap-2 bg-[#EBF2F2] text-black text-sm font-medium px-5 py-3 rounded-lg shadow hover:bg-[#e0eeee] transition-all w-full xl:w-auto justify-center xl:justify-start">
            <Image src="/svgs/inline_svg_35.1.svg" alt="AP" width={20} height={20} className="object-contain" />
            AP Financing <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 bg-[#EBF2F2] text-black text-sm font-medium px-5 py-3 rounded-lg shadow hover:bg-[#e0eeee] transition-all w-full xl:w-auto justify-center xl:justify-start">
            <Image src="/svgs/inline_svg_35.1.svg" alt="AR" width={20} height={20} className="object-contain" />
            AR Financing <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.2 }}
        style={{ y: backSpring }}
        className="relative z-10 w-full flex justify-center items-center p-6 xl:p-12"
      >
        <div className="relative w-[250px] ml-10 md:ml-10 sm:w-[400px] md:w-[400px] lg:w-[450px] xl:w-[500px]">
          <Image
            src="/images/67e2ec6ff072b4bc5eab6f4a_gynger-card.avif"
            alt="Gynger Card"
            width={700}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
          <div className="absolute -left-[15%] -bottom-14 md:-bottom-20 bg-white/10 backdrop-blur-3xl rounded-xl px-6 md:px-10 py-2 md:py-7 shadow-xl max-w-[320px]">
            <div className="text-sm md:text-lg flex items-center justify-center font-medium text-center text-white gap-2">
              <Image src="/svgs/inline_svg_35.1.svg" alt="Icon" width={20} height={20} className="object-contain" />
              Available capital
            </div>
            <div className="text-2xl text-center md:text-4xl font-medium text-[#0c1a1a] mt-2">
              <TextScramble>$400,000.00</TextScramble>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-3 overflow-hidden">
              <div className="w-[70%] h-full bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
