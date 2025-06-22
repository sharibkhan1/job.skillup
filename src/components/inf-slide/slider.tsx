"use client";
import Image from "next/image";
import { InfiniteSlider } from ".";
import React from "react";
import { CMSResponse } from "@/lib/types";

const InfiniteSliderBasic = ({data}:{data:CMSResponse}) => {
  const logos = data?.block?.find((b) => b.movingcard)?.movingcard?.fillogo ?? [];

  if (!logos.length) return null;

  return (
    <div className="relative w-full my-7 md:my-10">
      {/* Left fog */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 md:w-40 z-10 bg-gradient-to-r from-white to-white/10" />
      {/* Right fog */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 md:w-40 z-10 bg-gradient-to-l from-white to-white/10" />

      <InfiniteSlider direction="horizontal" gap={60} className="w-full h-full">
        {logos.map((logo, idx) => (
          <Image
            key={logo.uid || idx}
            src={logo.url}
            alt={logo.title || `logo-${idx}`}
            width={120}
            height={120}
            className="h-[50px] w-auto"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default InfiniteSliderBasic;
