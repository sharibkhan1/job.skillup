"use client";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { TestimonialData } from '@/lib/types';

interface BlockData {
  block?: Array<{
    testo?: TestimonialData;
  }>;
}

const TestimonialPage = ({data}:{data:BlockData }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

    
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const testo = data?.block?.find((b) => b.testo)?.testo;
  const testimonials = testo?.card || [];
  if (!testo) return null;

    const handleNext = () => {
    if (index < testimonials.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };




  return (
    <div className="lg:px-4  sm:pl-6 text-black md:pl-12 xl:pl-20 2xl:pl-[18rem] w-full py-10 md:py-32">
      <div className="flex flex-col space-y-5 lg:flex-row items-center lg:items-start justify-between gap-8">
        {/* Left Section */}
        <div className="w-full md:w-[60%] xl:w-2/5 flex flex-col lg:items-start items-center text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl leading-snug font-medium">
 {testo.title}
           </h2>

          {/* Navigation Buttons */}
          <div className="hidden lg:flex gap-4 mt-32">
            <button
              onClick={handlePrev}
              className={`rounded-full bg-gray-100 w-28 h-16 flex items-center justify-center hover:bg-gray-200 group transition duration-300 ${
                index === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={index === 0}
            >
              <ArrowLeft
                className={`w-8 h-8 transform transition-transform duration-300 group-hover:-translate-x-1 ${
                  index === 0 ? 'pointer-events-none' : ''
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className={`rounded-full bg-gray-100 w-28 h-16 flex items-center justify-center hover:bg-gray-200 group transition duration-300 ${
                index === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={index === testimonials.length - 1}
            >
              <ArrowRight
                className={`w-8 h-8 transform transition-transform duration-300 group-hover:translate-x-1 ${
                  index === testimonials.length - 1 ? 'pointer-events-none' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Right Section */}
<div className="w-full relative hide-scrollbar overflow-x-auto">
  {/* Fog effects */}
  <div className="pointer-events-none absolute top-0 left-0 h-full w-20 z-30 bg-transparent lg:bg-gradient-to-r from-white to-white/0" />

  {/* Inner wrapper that slides */}
  <div
    className="relative z-20 flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${index * (isMobile ? 100 : 70)}%)`,
    }}
  >
    {testimonials.map((t, i) => (
    <div
      key={i}
      className={`flex-shrink-0 px-4 py-4 ${
        isMobile ? 'w-full mx-auto' : 'w-[50%] ml-10 2xl:ml-20 mx-50'
      } bg-white transition-opacity duration-500 ${
        i === index ? 'opacity-100' : 'opacity-40'
      }`}
    >
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={t.userimage.url}
            alt={t.name}
            width={90}
            height={90}
            className="rounded-full"
          />
          <div>
            <p className="text-md md:text-lg text-gray-500 font-medium">{t.name}</p>
            <p className="text-md md:text-lg text-gray-500">{t.profess}</p>
          </div>
        </div>
        <p className="text-2xl  leading-snug py-4 md:text-3xl font-medium text-gray-800">
          &ldquo;{t.detail}&ldquo;
        </p>
        <div className="inline-flex py-2 items-end gap-2 text-md font-medium text-green-900 hover:text-green-500 group transition-colors duration-300 cursor-pointer">
          Learn more
          <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex lg:hidden justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className={`rounded-full bg-gray-100 w-20 h-12 flex items-center justify-center hover:bg-gray-200 group transition duration-300 ${
            index === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={index === 0}
        >
          <ArrowLeft
            className={`w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1 ${
              index === 0 ? 'pointer-events-none' : ''
            }`}
          />
        </button>
        <button
          onClick={handleNext}
          className={`rounded-full bg-gray-100 w-20 h-12 flex items-center justify-center hover:bg-gray-200 group transition duration-300 ${
            index === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={index === testimonials.length - 1}
        >
          <ArrowRight
            className={`w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 ${
              index === testimonials.length - 1 ? 'pointer-events-none' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;