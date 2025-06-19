import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header1 } from "@/components/ui/header";
import Hedpage from "@/components/hed";

const logos = [
  "/logos/paloalto.png",
  "/logos/oracle.png",
  "/logos/okta.png",
  "/logos/lambda.png",
  "/logos/googlecloud.png",
  "/logos/hubspot.png",
  "/logos/datadog.png",
  "/logos/dell.png",
  "/logos/cisco.png",
  "/logos/crowdstrike.png",
  "/logos/braze.png",
  "/logos/amplitude.png",
  "/logos/adobe.png",
  "/logos/aws.png",
  "/logos/blurred1.png",
];

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#022b29] text-white">
      {/* Navbar */}
      <Header1/>

      {/* Spline background */}
      <div className="absolute top-0 left-0 w-full h-[100vh] sm:h-[80vh] z-0">
        <iframe
          src="https://my.spline.design/cubiccopy-58ccfada32ada29de256862c00e83a1f/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[100vh] sm:h-[80vh] px-4">
        <h1 className="text-5xl md:text-7xl text-white font-normal mb-5 md:mb-10">Master your cash flow</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-5 md:mb-10">
          Flexible payments and embedded financing solutions for buyers and sellers of technology.
        </p>
        <div className="flex items-center p-2 border-2 border-[#01492e] bg-[#012b1b] rounded-lg overflow-hidden max-w-md w-full">
          <Input
            placeholder="Enter your work email*"
            className="flex-1 border-none focus:border-none rounded-none px-4 py-2 text-white"
          />
          <Button className="rounded-md bg-green-400 text-black hover:bg-green-300 px-4">
            Get in touch
          </Button>
        </div>
      </div>

      {/* Logos */}
      <div className="bg-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, idx) => (
            <Image key={idx} src={logo} alt={`logo-${idx}`} width={80} height={40} />
          ))}
        </div>
      </div>
    </div>
  );
}