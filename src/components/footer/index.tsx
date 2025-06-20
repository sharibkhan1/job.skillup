'use client';
import React from 'react';
import Image from 'next/image';
import Inputcostom from '../inputcostom';

const FooterPage = () => {
  return (
    <div className="bg-[#031F1C] text-white w-full py-16">
      <div className="px-4 sm:px-6 md:px-12 xl:px-20 2xl:px-[18rem] flex flex-col gap-14">

        {/* --- Row 1: Logo + Newsletter --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Logo */}
          <div className=" relative">
            <Image
              src="/svgs/inline_svg_59.svg"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 lg:items-end sm:max-w-md">
            <p className="text-md leading-relaxed">
              Check out the latest updates to our products here.
              Stay up to date on all changes by subscribing to our Newsletter.
            </p>
            <Inputcostom />
          </div>
        </div>

        {/* --- Row 2: Menu + Bottom --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Menus */}
          <div className="flex flex-col md:flex-row gap-12 lg:flex-[1]">
{/* Column 1 */}
<div className="flex flex-col gap-3 text-xl">
  {[
    "Gynger Pay",
    "Gynger AP Financing",
    "Gynger AR Financing",
    "Blog",
    "FAQs",
    "About us",
    "Careers",
  ].map((item, idx) => (
    <span key={idx} className="group relative cursor-pointer inline-block w-fit">
      {item}
      <span className="underline-animate absolute left-0 bottom-0 w-full h-[2px]"></span>
    </span>
  ))}
</div>

{/* Column 2 (same logic) */}
<div className="flex flex-col gap-3 text-xl">
  {[
    "LinkedIn",
    "X / Twitter",
    "Privacy Policy",
    "Terms of service",
    "",
    "",
    "contact@gynger.io",
  ].map((item, idx) => (
    <span
      key={idx}
      className={`group relative cursor-pointer inline-block w-fit ${
        item === "" ? "text-transparent pointer-events-none" : ""
      }`}
    >
      {item}
      {item !== "" && (
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
                src="/images/67e1edd15128b6e6e78de281_built-in.avif"
                alt="BuiltIn"
                width={70}
                height={70}
                className="object-contain"
              />
              <Image
                src="/images/67e1edd12e0f1c1b7b9d6c1b_soc-2.avif"
                alt="AICPA SOC2"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-center text-gray-300 lg:text-left">
              © 2025 Gynger.io — 157 W 18th Street, Floor 5, New York, NY 10011
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
