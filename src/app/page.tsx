import React from "react";
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

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white text-white">
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
      <HeroSection/>

      {/* Logos */}
      <InfiniteSliderBasic/>

      <div className="flex items-center justify-center" > 
      <GridViewCard/>
            </div>

      <div className="flex items-center justify-center" > 
      <PaymentGridViewCard/>
      </div>

      <SolutionsContainer/>    
      <ConvinceComp/>
      <TestimonialPage/>  
      <SecFoot/>
      <Footer/>
    </div>
  );
}