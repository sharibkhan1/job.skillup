"use client";
import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import ArrowHover from "../arrowhover";
import animation1 from "../../../public/lottie/680bca7b0266b7a0714451bf_866606df10f2175bd6a4bfbc95f4ba98_Home%201.json";
import animation2 from "../../../public/lottie/680bca99e56a1e77926028fe_78c15bd835b2893dd6bc19ad984bf274_Home%202.json";
import animation3 from "../../../public/lottie/680bcab988eb3e3db02241ab_959f47ad36eb419a9f252d6c928a2714_Home%203.json";
import { LMSResponse } from "@/lib/types";

const animations = [animation1, animation2, animation3];

const FeatureCard: React.FC<{
  title: string;
  description: string;
  animation: object;
}> = ({ title, description, animation }) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <div
      className="rounded-xl bg-[#F4F8F9] flex flex-col justify-between min-h-[320px]"
      onMouseEnter={() => {
        if (lottieRef.current) {
          lottieRef.current.stop();
          lottieRef.current.play();
        }
      }}
    >
      <div className="p-6 md:p-8 max-lg:text-center">
        <h3 className="text-lg md:text-2xl font-semibold mb-4 text-[#0c1a1a]">
          {title}
        </h3>
        <p className="text-lg mt-3 text-[#616464] leading-relaxed">
          {description}
        </p>
      </div>
      <div className="w-full h-max">
        <Lottie lottieRef={lottieRef} animationData={animation} loop />
      </div>
    </div>
  );
};

const GridViewCard = ({data}:{data:LMSResponse}) => {

    const gridview  = data?.block?.find((b) => b.gridview)?.gridview;

  if (!gridview ) return null;
  // Extracting title from rich text
  const heading =
    gridview?.title?.children?.[0]?.children
      .map((child) =>
        child.italic ? `<span class="italic">${child.text}</span>` : child.text
      )
      .join(" ") || "";

  return (
    <section className="py-16 w-full bg-white">
      <div className="px-4 sm:px-6 md:px-12 xl:px-20 2xl:px-[20rem]">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-10 text-center lg:text-left">
          <h2
            className="text-3xl hidden min-sm:block md:text-5xl text-black"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <h2
            className="text-3xl block sm:hidden md:text-5xl text-black"
            dangerouslySetInnerHTML={{
              __html: heading.replace(" ", "<br />"),
            }}
          />
          {/* Talk to us - Desktop */}
          <div className="hidden lg:inline-flex items-end ">
            <ArrowHover text={gridview.buttitle} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:pt-10 lg:grid-cols-3 gap-4">
          {gridview.cardd.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.cardtitle}
              description={item.cardsub}
              animation={animations[index % animations.length]}
            />
          ))}
        </div>

        {/* Talk to us - Mobile */}
        <div className="lg:hidden inline-flex items-end mt-10 w-full justify-center">
          <ArrowHover text={gridview.buttitle} />
        </div>
      </div>
    </section>
  );
};

export default GridViewCard;
