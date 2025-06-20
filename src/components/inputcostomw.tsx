import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Inputcostomw = () => {
  return (
                <div className="flex items-center p-2 border-2 bg-[#F7FAFA] border-[#ececec]  rounded-lg overflow-hidden max-w-md w-full">
          <Input
            placeholder="Enter your work email*"
  className="flex-1 border-none focus:border-none rounded-3xl focus:outline-none focus:ring-0 px-4 py-2 text-black"
          />
          <Button className="rounded-md bg-[#0F4C49] text-white hover:bg-[#2e5250] px-4">
            Get in touch
          </Button>
        </div>
  )
}

export default Inputcostomw