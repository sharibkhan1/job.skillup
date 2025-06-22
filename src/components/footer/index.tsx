'use client';
import React from 'react';
import Image from 'next/image';
import Inputcostom from '../inputcostom';

export interface ImageAsset {
  url: string;
}

export interface FooterData {
  logo: ImageAsset;
  subtitle: string;
  buttitle: string;
  address: string;
  bottom1: ImageAsset;
  bottomimg2: ImageAsset;
  linkn: {
    link: string[];
  };
  linkdomain: string[];
  cotact: string;
}

export interface BlockData {
  block?: Array<{
    footer?: FooterData;
  }>;
}

const FooterPage = ({data}:{data:BlockData}) => {
    const footer = data?.block?.find((b) => b.footer)?.footer;

  if (!footer) return null;
  return (

    <div className="bg-[#031F1C] text-white w-full py-16">
      <div className="px-4 sm:px-6 md:px-12 xl:px-20 2xl:px-[18rem] flex flex-col gap-14">

        {/* --- Row 1: Logo + Newsletter --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Logo */}
          <div className=" relative">
            <Image
              src={footer.logo.url}
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 lg:items-end sm:max-w-md">
            <p className="text-md leading-relaxed">{footer.subtitle}</p>
            <Inputcostom buttonText={footer.buttitle} />
          </div>
        </div>

        {/* --- Row 2: Menu + Bottom --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Menus */}
          <div className="flex flex-col md:flex-row gap-12 lg:flex-[1]">
{/* Column 1 */}
<div className="flex flex-col gap-3 text-xl">
{footer.linkn.link.map((item, idx) => (
                <span key={idx} className="group relative cursor-pointer inline-block w-fit">
                  {item}
                  <span className="underline-animate absolute left-0 bottom-0 w-full h-[2px]"></span>
                </span>
              ))}
</div>

{/* Column 2 (same logic) */}
<div className="flex flex-col gap-3 text-xl">
 {[...footer.linkdomain, '', '', footer.cotact].map((item, idx) => (
                <span
                  key={idx}
                  className={`group relative cursor-pointer inline-block w-fit ${
                    item === '' ? 'text-transparent pointer-events-none' : ''
                  }`}
                >
                  {item}
                  {item !== '' && (
                    <span className="underline-animate absolute left-0 bottom-0 w-full h-[2px]"></span>
                  )}
                </span>
              ))}
</div>
          </div>

          {/* Bottom Logos + Address */}
          <div className="flex flex-col items-start  lg:items-end justify-end gap-6 lg:flex-[1]">
            <div className="flex gap-4">
              <Image
                src={footer.bottomimg2.url}
                alt="BuiltIn"
                width={70}
                height={70}
                className="object-contain"
              />
              <Image
                src={footer.bottom1.url}
                alt="AICPA SOC2"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-center text-gray-300 lg:text-left">
              {footer.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
