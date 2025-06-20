import { ArrowRight } from 'lucide-react'
import React from 'react'

const ArrowHover = ({text}:{text:string}) => {
  return (
    <div className="inline-flex justify-center gap-2 text-lg font-medium text-gray-500 hover:text-[#316151] group transition-colors duration-300 cursor-pointer">
  {text}
  <ArrowRight
    className="w-5 h-5 mt-1 transform transition-transform duration-300 group-hover:translate-x-1"
  />
</div>
  )
}

export default ArrowHover