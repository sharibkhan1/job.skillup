import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Inputcostom = () => {
  return (
                <div className="flex items-center p-2 border-2 border-[#213B38] dark-green rounded-lg overflow-hidden max-w-md w-full">
          <Input
            placeholder="Enter your work email*"
  className="flex-1 border-none focus:border-none rounded-3xl focus:outline-none focus:ring-0 px-4 py-2 text-white"
          />
          <Button className="rounded-md bg-[#9FE29E] dark-green-text hover:bg-[#8edf8d] px-4">
            Get in touch
          </Button>
        </div>
  )
}

export default Inputcostom