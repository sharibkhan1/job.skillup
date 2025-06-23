"use client"
import { ArrowRight } from "lucide-react";
import { TextScramble } from "../text-scamble";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { SecondCards } from "@/lib/types";

export default function GyngerCapitalCard({ secondcard }: { secondcard: SecondCards }) {
      const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useMotionValue(0);
  const backSpring = useSpring(scrollDirection, { stiffness: 200, damping: 50 });

    // Intersection Observer to trigger animation when component is visible
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          root: null,
          rootMargin: "-40px",
          threshold: 0.1, // Trigger when 10% of component is visible
        }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);

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
    <section ref={containerRef} className="flex mt-6 flex-col-reverse max-lg:pb-7 py-10 lg:flex-row justify-between gap-10 relative overflow-hidden rounded-3xl bg-[#f2f8f8] shadow-sm">
      <div className="absolute text-[15rem] md:text-[20rem] font-light text-[#d6e6e6] opacity-30 top-[-6rem] left-[2rem] leading-none select-none pointer-events-none z-0">
        Capital
      </div>

      {/* LEFT */}
      <div
        className="relative px-5 lg:px-12 pt-5 lg:pl-20 lg:pt-10 lg:pb-20 z-10 w-full text-center lg:text-left flex flex-col justify-between"
      >
        <h2 className="text-3xl md:text-5xl text-[#0c1a1a] font-medium">{secondcard.title}</h2>
        <p className="lg:mt-[40%] mt-6 text-base md:text-xl text-[#0c4242] mx-auto lg:mx-0">
{secondcard.subtitle}
        </p>
        <div className="mt-6 flex flex-col xl:flex-row gap-4 w-full xl:w-auto items-center xl:items-start">
          {secondcard.button.map((btn, idx) => (
            <button key={idx} className="inline-flex items-center justify-between gap-2 bg-[#EBF2F2] text-black text-sm font-medium px-5 py-4 rounded-lg shadow hover:bg-[#e0eeee] transition-all w-full xl:w-auto">
              <Image src={btn.buticon.url} alt={btn.buttutle} width={20} height={20} className="object-contain" />
              {btn.buttutle} <ArrowRight className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT */}
        <AnimatePresence>
          {isVisible && (
                    <motion.div
              key="ssec-card"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
transition={{ type: "spring", stiffness: 100, damping: 50, delay: 0.2 }}
        style={{ y: backSpring }}
        className="relative z-10 w-full flex justify-center items-center p-6 lg:p-12"
      >
        <div className="relative w-[250px] ml-10 md:ml-10 sm:w-[400px] md:w-[400px] lg:w-[450px] xl:w-[500px]">
          <Image
            src={secondcard.imagew.url}
            alt="Gynger Card"
            width={700}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
          <div className="absolute -left-[15%] -bottom-14 md:-bottom-20 bg-white/10 backdrop-blur-3xl rounded-xl px-6 md:px-10 py-2 md:py-7 shadow-xl max-w-[320px]">
            <div className="text-sm md:text-lg flex items-center justify-center font-medium text-center text-white gap-2">
              <Image src="/svgs/inline_svg_35.1.svg" alt="Icon" width={20} height={20} className="object-contain" />
              {secondcard.cardd.cartitle}
            </div>
            <div className="text-2xl text-center md:text-4xl font-medium text-[#0c1a1a] mt-2">
              <TextScramble>{secondcard.cardd.cardmoney}</TextScramble>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-3 overflow-hidden">
              <div className="w-[70%] h-full bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
}
