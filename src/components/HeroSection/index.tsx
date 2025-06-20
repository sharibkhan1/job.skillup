import React from 'react'
import Inputcostom from '../inputcostom'

const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-[100vh] sm:h-[80vh] px-4">
        <h1 className="text-5xl md:text-7xl text-white font-normal mb-5 md:mb-10">Master your cash flow</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-5 md:mb-10">
          Flexible payments and embedded financing solutions for buyers and sellers of technology.
        </p>
      <Inputcostom/>
    </div>
  )
}

export default HeroSection