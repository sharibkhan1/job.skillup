"use client"
import React, { useEffect, useState } from "react";
import { Header1 } from "@/components/ui/header";
import InfiniteSliderBasic from "@/components/inf-slide/slider";
import GridViewCard from "@/components/gridViewCard";
import PaymentGridViewCard from "@/components/paymentgrid";
import SolutionsContainer from "@/components/SolutionCard";
import ConvinceComp from "@/components/convince";
import TestimonialPage from "@/components/testomonial";
import SecFoot from "@/components/secfooter";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import { getMainRes } from "../../helper";
import Image from 'next/image';
import { Loader2 } from "lucide-react";

export default function Page() {

    const [mainRes, setMainRes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMainRes();
        setMainRes(res);
      } catch (err) {
        console.error("Failed to fetch main CMS data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

if (loading) {
  return (
    <div className="w-screen bg-black h-screen flex flex-col items-center justify-center">
      <Image
        src="/svgs/inline_svg_1.0.svg"
        width={400}
        height={300}
        alt="logo"
      />
      <Loader2 className="animate-spin text-[#9FE29E] mt-10 w-8 h-8 " />
    </div>
  );
}

if (!mainRes) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-black text-8xl">No data!!!!</p>
    </div>
  );
}
  return (
    <div className="relative min-h-screen bg-white text-white">
      {/* Navbar */}
      <Header1/>

      {/* Hero content */}
      <HeroSection data={mainRes} />

      {/* Logos */}
      <InfiniteSliderBasic data={mainRes} />

      <div className="flex items-center justify-center" > 
   <GridViewCard data={mainRes}/>
      </div>

      <div className="flex items-center justify-center" > 
      <PaymentGridViewCard data={mainRes}/>
      </div>

      <SolutionsContainer data={mainRes}/>    
      <ConvinceComp data={mainRes}/>
        <div className="h-2 w-full bg-gradient-to-r from-[#FBE8DB] via-[#F5F2DC] to-[#F5E7DF]" />

      <TestimonialPage data={mainRes}/>  
      <SecFoot data={mainRes}/>
      <Footer data={mainRes}/>
    </div>
  );
}