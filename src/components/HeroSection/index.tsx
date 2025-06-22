"use client"
import React from 'react'
import Inputcostom from '../inputcostom'

type HeroBlock = {
  block: {
    hero: {
      title: string;
      subtitle: string;
      buttitle?: string;
      bglinkjson: string;
    };
  }[];
};

const HeroSection = ({data}:{data:HeroBlock}) => {
  const hero = data?.block?.find((b) => b.hero)?.hero;

  if (!hero) return null;

  return (
    <>
    
         {/* Spline background */}
      <div className="absolute top-0 left-0 w-full h-[100vh] 2xl:h-[80vh] z-0">
        <iframe
          src={hero.bglinkjson}
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-[100vh] 2xl:h-[80vh] px-4">
        <h1 className="text-5xl md:text-6xl 2xl:text-7xl mt-10 text-white font-normal mb-5 md:mb-10">{hero.title}</h1>
        <p className="text-md md:text-lg 2xl:text-2xl text-gray-200 mb-5 md:mb-10">
          {hero.subtitle}
        </p>
        <Inputcostom buttonText={hero.buttitle ?? "Get in touch"} />
    </div>
       </>
  )
}

export default HeroSection