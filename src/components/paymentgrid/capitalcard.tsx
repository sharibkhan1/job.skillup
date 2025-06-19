import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TextScramble } from "../text-scamble";

export default function GyngerCapitalCard() {
  return (
    <div className="flex mt-6 flex-col-reverse max-xl:pb-7  py-10 xl:flex-row justify-between gap-10 relative overflow-hidden rounded-3xl bg-[#f2f8f8] shadow-sm">
      {/* Background Text */}
      <div className="absolute text-[15rem] md:text-[20rem] font-light text-[#d6e6e6] opacity-30 top-[-6rem] left-[2rem] leading-none select-none pointer-events-none z-0">
        Capital
      </div>

      {/* LEFT CONTENT */}
      <div className="relative px-5  xl:px-12 pt-5 xl:pl-20 xl:pt-10 md:pb-20 z-10 w-full text-center xl:text-left flex flex-col justify-between">
          <h2 className="text-3xl md:text-5xl text-[#0c1a1a] font-medium">Gynger Capital</h2>
          <p className="xl:mt-[40%] mt-6 text-base md:text-xl text-[#0c4242] mx-auto xl:mx-0">
            Access fast, non-dilutive capital with Gynger Capital's embedded AP and AR financing solutions.
          </p>
        <div className="mt-6 flex flex-col xl:flex-row gap-4 xl:gap-6 w-full xl:w-auto items-center xl:items-start">
          <button className="inline-flex items-center gap-2 bg-white text-[#007e7e] text-sm font-medium px-5 py-3 rounded-lg shadow hover:bg-[#eef7f7] transition-all w-full xl:w-auto justify-center xl:justify-start">
            <span className="bg-[#007e7e] text-white rounded-full px-2 py-1">💳</span>
            AP Financing
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 bg-white text-[#007e7e] text-sm font-medium px-5 py-3 rounded-lg shadow hover:bg-[#eef7f7] transition-all w-full xl:w-auto justify-center xl:justify-start">
            <span className="bg-[#c0234f] text-white rounded-full px-2 py-1">💳</span>
            AR Financing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative z-10 w-full flex justify-center items-center  p-6 xl:p-12">
        <div className="relative w-[250px] ml-10 md:ml-10 sm:w-[400px] md:w-[450px] lg:w-[490px] xl:w-[550px]">
          <Image
            src="/images/67e2ec6ff072b4bc5eab6f4a_gynger-card.avif"
            alt="Gynger Card"
            width={700}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />

          {/* Overlay Card */}
          <div className="absolute -left-[15%] -bottom-14 md:-bottom-20 bg-white/10 backdrop-blur-3xl rounded-xl px-6 md:px-10 py-2 md:py-7 shadow-xl  max-w-[320px]">
            <p className="text-sm md:text-lg font-medium text-center text-white gap-2">
              <span ></span> Available capital
            </p>
            <p className="text-2xl text-center md:text-4xl font-bold text-[#0c1a1a] mt-2"><TextScramble>$400,000.00</TextScramble> </p>
            <div className="h-2 w-[100%] md:w-full bg-gray-200 rounded-full mt-3 overflow-hidden">
              <div className="w-[70%] h-full bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}