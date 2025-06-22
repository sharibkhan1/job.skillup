"use client"
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { TextScramble } from "../text-scamble";
import Capitalcard from "./capitalcard";
import ArrowHover from "../arrowhover";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

type RichTextChild = {
  text: string;
  italic?: boolean;
};

type RichTextNode = {
  type: string;
  children: RichTextChild[];
};

type ImageAsset = {
  url: string;
  title: string;
};

type ButtonIcon = {
  butttile: string;
  bicon: ImageAsset;
};

type FirstCard = {
  title: string;
  subtitle: string;
  button: {
    buttitle: string;
    butimage: ImageAsset;
  }[];
  frontcard: {
    ftitle: string;
    fmoney: string;
    fbutton: string;
    opt1: string;
    opt2: string;
  };
  backcard: {
    btitle: string;
    bmoney: string;
    bbut: ButtonIcon[];
  };
};

type SecondCard = {
  title: string;
  subtitle: string;
  imagew: ImageAsset;
  button: {
    buttutle: string;
    buticon: ImageAsset;
  }[];
  cardd: {
    cartitle: string;
    cardmoney: string;
    cardimg: ImageAsset;
  };
};

type PaymentGridData = {
  title: {
    children: RichTextNode[];
  };
  buttitle: string;
  firstcard: FirstCard;
  secondcard: SecondCard;
};

type LMSResponse = {
  block: {
    paymentgrid?: PaymentGridData;
  }[];
};


const PaymentGridViewCard = ({ data }: { data: LMSResponse }) => {
  const [selected, setSelected] = useState<("monthly" | "terms")[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
const scrollDirection = useMotionValue(0); // raw delta
const frontSpring = useSpring(scrollDirection, { stiffness: 100, damping: 20 });
const backSpring = useSpring(scrollDirection, { stiffness: 100, damping: 20 });

  useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;
    const delta = currentY - lastY;

    // Clamp delta to avoid big jumps
    const clampedDelta = Math.max(Math.min(delta, 20), -20);

    // Set direction
    scrollDirection.set(clampedDelta);

    // Reset after short delay
    setTimeout(() => {
      scrollDirection.set(0);
    }, 100);

    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const paymentgrid = data.block.find(b => b.paymentgrid)?.paymentgrid;

  if (!paymentgrid) return null;

const heading = paymentgrid.title.children?.[0]?.children
  .map(child => child.italic ? `<span class="italic">${child.text}</span>` : child.text)
  .join(" ") ?? "";

const buttitle = paymentgrid.buttitle;

const firstCard = paymentgrid.firstcard;
const {
  title: cardTitle,
  subtitle: cardSubtitle,
  button,
  frontcard,
  backcard,
} = firstCard;

const {
  ftitle,
  fmoney,
  fbutton,
  opt1,
  opt2
} = frontcard;

const {
  btitle,
  bmoney,
  bbut
} = backcard;
const mainBtn = button?.[0];
const secondCard = paymentgrid.secondcard;

  const toggleOption = (option: "monthly" | "terms") => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

 return (
<section className="py-6 md:py-16 w-full bg-white" ref={containerRef}>
  <div className="px-4 sm:px-6 md:px-12 xl:px-20 2xl:px-[18rem]">
    {/* Heading for all screens */}
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-10 md:mb-16 text-center lg:text-left">
      <h2 className="text-3xl md:text-5xl max-w-xl text-black" dangerouslySetInnerHTML={{ __html: heading }} />

      {/* Talk to us - hidden below lg */}
<div className="hidden lg:inline-flex items-end ">
  <ArrowHover text={buttitle} />
</div>
    </div>

        {/* Cards */}
 <div className="flex flex-col-reverse max-lg:pb-7 lg:flex-row justify-between gap-10 relative overflow-hidden rounded-3xl bg-[#F7FAFA] shadow-sm">
          {/* Background 'Pay' Text */}
          <div className="absolute text-[15rem] md:text-[20rem] font-light text-[#d6e6e6] opacity-30 top-[-6rem] left-[2rem] leading-none select-none pointer-events-none z-0">
            Pay
          </div>

          {/* LEFT CONTENT */}
          <div className="relative  lg:pl-13 lg:py-13 h-full px-5 md:px-12 z-10 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl text-[#0c1a1a]">
              {cardTitle}
            </h2>
            <p className="lg:mt-[40%] mt-7 text-xl dark-green-text2 lg:max-w-md mx-auto md:mx-0">
              {cardSubtitle}
            </p>
            {mainBtn && (
          <button className="mt-6 inline-flex max-lg:w-full items-center justify-between gap-2 bg-[#EBF2F2] text-black text-md font-medium px-5 py-4 rounded-lg shadow hover:bg-[#e0eeee] transition-all">
            <Image
              src={mainBtn.butimage.url}
              alt={mainBtn.butimage.title}
              width={20}
              height={20}
              className="object-contain"
            />
            <span>{mainBtn.buttitle}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
          </div>

{/* RIGHT CONTENT */}
<div className="relative z-10 w-full flex justify-end">
  {/* BACK CARD - positioned at bottom right */}
              <motion.div
                style={{ y: backSpring }} // 👈 Smooth upward/downward
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.2
              }}
               className="absolute md:space-y-6 bottom-0 right-0 w-[40%] sm:w-[200px] md:w-[280px] xl:w-[280px] bg-[#DAE8E8] rounded-tl-2xl rounded-bl-2xl pl-5 sm:pl-7 md:pl-14 pt-5 sm:pt-7 md:pt-14 shadow-md z-0">
    <div className="pointer-events-none absolute right-0 -bottom-5  md:-bottom-10 w-full h-14 md:h-40 z-10 bg-gradient-to-t from-[#f2f8f8] to-white/10" />

    <p className="text-[0.6rem] sm:text-sm  md:text-xl text-gray-500">{btitle}</p>
    <div className="text-xl sm:text-2xl md:text-6xl font-normal pr-5  text-black mt-1"><TextScramble>{bmoney}</TextScramble></div>
  
    <div className="mt-3 sm:mt-4 flex justify-between text-[0.6rem] sm:text-sm md:text-lg text-gray-700 pb-2">
      <div className="w-full">
        <div className="h-0.5 sm:h-1 md:h-1.5 w-full rounded-3xl bg-[#015050]" />
        <span className="text-[#2f6e6e] border-[#007e7e]">Created</span>
      </div>

      <div className="w-full ml-2">
        <div className="h-0.5 sm:h-1 md:h-1.5 w-full rounded-3xl bg-[#638686]" />
        <span className="text-[#2f6e6e] border-[#007e7e]">Viewed</span>
      </div>
    </div>

<div className="mt-3 sm:mt-4 flex flex-col gap-1 sm:gap-2 md:gap-3">
    {bbut.map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-1 sm:gap-2 md:gap-3 bg-[#c0dbdb] text-black/80 pl-2 sm:pl-3 md:pl-5 py-2 sm:py-3 md:py-4 lg:py-5 rounded-tl-md sm:rounded-tl-3xl rounded-bl-md sm:rounded-bl-3xl text-[0.6rem] sm:text-sm md:text-lg lg:text-xl font-semibold"
      >
        <img src={item.bicon.url} alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
        {item.butttile}
      </div>
    ))}
  </div>
            </motion.div>

  {/* FRONT CARD - centered vertically and slightly left of center */}
              <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 10
              }}
                style={{ y: frontSpring }} // 👈 Reacts smoothly
 className="relative mr-[35%] sm:mr-[30%] md:mr-[35%] lg:mr-[50%] md:min-w-[350px] xl:mr-[43%] 2xl:mr-[40%] my-[15%] sm:my-[16%] md:my-[17%] w-[180px] sm:w-[230px] md:w-[320px] lg:w-[360px] xl:w-[400px] bg-white/30 backdrop-blur-3xl rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 lg:p-9 z-10">
    <div className="flex items-center justify-between mb-6 md:mb-10 lg:mb-14">
      <p className="text-xs sm:text-sm md:text-3xl text-gray-600 font-medium">{ftitle}</p>
      <p className="text-xs sm:text-sm  md:text-3xl font-semibold text-[#626666]">{fmoney}</p>
    </div>
    
{!submitted ? (
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-6 mt-4 sm:mt-6 text-[0.7rem] sm:text-[0.8rem] md:text-[1.2rem] lg:text-[1.7rem]">
          {/* Monthly Option */}
<label
  className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer"
  onClick={() => toggleOption("monthly")}
>
  <div
    className={`h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 flex items-center justify-center rounded border-2 ${
      selected.includes("monthly")
        ? "bg-[#9FE29E] border-green-600"
        : "bg-white border-gray-400"
    }`}
  >
    {selected.includes("monthly") && (
      <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
    )}
  </div>
  <span className="text-[#0c1a1a]">{opt1}</span>
</label>


          {/* Net Terms Option */}
<label
  className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer"
  onClick={() => toggleOption("terms")}
>
  <div
    className={`h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 flex items-center justify-center rounded border-2 ${
      selected.includes("terms")
        ? "bg-[#9FE29E] border-green-600"
        : "bg-white border-gray-400"
    }`}
  >
    {selected.includes("terms") && (
      <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
    )}
  </div>
  <span className="text-[#0c1a1a]">{opt2}</span>
</label>


          {/* Send Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-white hover:bg-gray-100 text-[#0c1a1a] py-2 sm:py-3 text-[0.7rem] sm:text-[0.9rem] md:text-[1.2rem] lg:text-[1.6rem] rounded-lg sm:rounded-xl font-normal transition-all"
          >
            {fbutton}
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[150px] md:h-[180px]">
          <CheckCircle2 className="text-green-600 w-16 h-16 md:w-24 md:h-24 animate-pulse" />
        </div>
      )}
            </motion.div>
</div>
        </div>

<Capitalcard secondcard={secondCard}/>
    {/* Talk to us - only shown below lg */}
<div className="lg:hidden inline-flex items-end mt-10 w-full justify-center ">
  <ArrowHover text={buttitle} />

</div>
  </div>
</section>


  );
};

export default PaymentGridViewCard;