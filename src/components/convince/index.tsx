'use client';
import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animation3 from "../../../public/lottie/680bcc5659a2c1e948cfcd64_AI.json";
import Image from 'next/image'; // Make sure this import is at the top
import ArrowHover from '../arrowhover';
import { SecInfiniteSlider } from '../sec-slider';
import { BlockData } from '@/lib/types';

const ConvinceComp = ({data}:{data:BlockData }) => {
      const leftRef = useRef<HTMLDivElement>(null);
  const [rightHeight, setRightHeight] = useState<number | undefined>(undefined);

      useEffect(() => {
    const updateHeight = () => {
      if (leftRef.current) {
        const height = leftRef.current.offsetHeight;
        setRightHeight(height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  
    const convince = data?.block?.find((b) => b.convince)?.convince;

  if (!convince) return null;

  // Render title with italic formatting
const heading = convince.title.children?.[0]?.children
  .map(child =>
    child.italic
      ? `<span class="italic break-words inline-block">${child.text}</span>`
      : child.text
  )
  .join("") ?? "";


  return (
    <div className="px-4 sm:px-6 md:px-12 mt-10 md:mt-20 bg-[#F7FAFA] xl:px-20 2xl:px-[18rem]">
      <div className="rounded-[3rem] text-black py-10 md:py-32  ">
        {/* Top Section Title */}
        <h2 className="text-4xl md:text-6xl px-6 sm:px-10 xl:text-7xl font-light text-center mb-16" dangerouslySetInnerHTML={{ __html: heading }}/>

        {/* Main Containers */}
        <div className="flex flex-col mt-5 md:mt-20  lg:flex-row items-center justify-between gap-8">
          {/* Left Box with Lottie */}
          <div ref={leftRef} className="w-full lg:w-10/12 rounded-3xl flex flex-col items-center justify-center">
<div className="w-full relative rounded-3xl overflow-hidden">
  {/* Background Image */}
  <Image
    src={convince.card.bgcard.url}
    alt="Background"
    layout="fill"
    objectFit="cover"
    className="z-0"
  />

  {/* Lottie Animation */}
  <div className="relative z-10">
    <Lottie animationData={animation3} loop={true} />
  </div>

  {/* Bottom-right icon */}
  <div className="absolute bottom-7 right-7 z-20">
    <Image
      src={convince.card.sidelogo.url}
      alt="Check Icon"
      width={82}
      height={82}
    />
  </div>
</div>
             <div className='p-3 space-y-5'>
            <h3 className="text-2xl font-normal text-center mt-6">
                {convince.card.title}
            </h3>
            <p className="text-gray-600 text-lg text-center mt-2">
                {convince.card.subtitle}
            </p>
              <div className="inline-flex md:mt-8 ml-[35%]  items-end gap-2 text-md font-medium text-transparent group transition-colors duration-300 cursor-pointer">
  E
</div>
            </div>
          </div>

          {/* Right Box Placeholder for Your Component */}
          <div className="w-full lg:w-10/12 rounded-3xl flex flex-col items-center justify-center"style={{ height: rightHeight }} >
<div className="w-full  relative rounded-3xl overflow-hidden">
  {/* Background Image */}
  <Image
    src={convince.movingcard.bgcard.url}
    alt="Background"
    layout="fill"
    objectFit="cover"
    className="z-0"
  />

  {/* Lottie Animation */}
 <div className="relative z-10  h-full">
      <div className="flex gap-4 max-md:px-5 h-full overflow-hidden justify-center">
  <SecInfiniteSlider direction="vertical" gap={0} speed={60} className="w-[70px] sm:w-[100px] md:w-[140px] h-full">
{convince.movingcard.movinglogo.logos.slice(0, 3).map((logo, index) => (
                      <img 
                        key={index} 
                        src={logo.url} 
                        alt={`Logo ${index}`} 
                        className="bg-white rounded-3xl my-3 h-[70px] sm:h-[100px] md:h-[140px]" 
                      />
                    ))}
  </SecInfiniteSlider>

  <SecInfiniteSlider direction="vertical" reverse={true} gap={0} speed={60} className="w-[70px] sm:w-[100px] md:w-[140px] h-full">
 {convince.movingcard.movinglogo.logos.slice(3, 6).map((logo, index) => (
                      <img 
                        key={index} 
                        src={logo.url} 
                        alt={`Logo ${index}`} 
                        className="bg-white rounded-3xl my-3 h-[70px] sm:h-[100px] md:h-[140px]" 
                      />
                    ))}
  </SecInfiniteSlider>

  <SecInfiniteSlider direction="vertical" gap={0} speed={60} className="w-[70px] sm:w-[100px] md:w-[140px] h-full">
                    {convince.movingcard.movinglogo.logos.slice(6, 9).map((logo, index) => (
                      <img 
                        key={index} 
                        src={logo.url} 
                        alt={`Logo ${index}`} 
                        className="bg-white rounded-3xl my-3 h-[70px] sm:h-[100px] md:h-[140px]" 
                      />
                    ))}
  </SecInfiniteSlider>
      </div>
    </div>


  {/* Bottom-right icon */}
  <div className="absolute bottom-7 right-7 z-20">
    <Image
      src={convince.movingcard.sidelogo.url}
      alt="Check Icon"
      width={82}
      height={82}
    />
  </div>
</div>
            <div className='p-3  space-y-5 flex flex-col items-center'>
            <h3 className="text-2xl font-normal text-center mt-6">
                {convince.movingcard.title}
            </h3>
            <p className="text-gray-600 text-lg text-center mt-2">
                {convince.movingcard.subtitle}
            </p>
              <div className="inline-flex mt-3 md:mt-8 items-end ">
<ArrowHover text={convince.movingcard.botttom} />
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvinceComp;
