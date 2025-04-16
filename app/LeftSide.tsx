import Image from 'next/image'
import React from 'react'
export default function LeftSide() {
  return (
    <div className='flex bg-gray-50 shadow-xl w-24 p-2.5 flex-col items-center justify-between h-screen'>
      {/* image */}
      <div>
      <Image 
      src="/munajat.png"
      width={50}
      height={50}
      alt="leftside"
      />
      </div>
      {/* middle items */}
      <div className='flex flex-col items-center justify-between gap-4'>
      <div className='bg-[#E8F0F5] p-4 rounded-full'>
      <Image 
      src="/Group 1.png"
      width={50}
      height={50}
      alt="leftside"
      />
      </div>
      <div className='bg-[#E8F0F5] p-4 rounded-full'>
      <Image 
      src="/Group 2.png"
      width={50}
      height={50}
      alt="leftside"
      />
      </div>
      <div className='bg-[#E8F0F5] p-4 rounded-full'>
      <Image 
      src="/Group 3.png"
      width={50}
      height={50}
      alt="leftside"
      />
      </div>
      <div className='bg-[#E8F0F5] p-4 rounded-full'>
      <Image 
      src="/Group 4.png"
      width={50}
      height={50}
      alt="leftside"
      />
      </div>

      </div>
      {/* last items */}
      <div>
      <Image 
      src="/icons.png"
      width={50}
      height={50}
      alt="leftside"
      />
      </div>


    </div>
  )
}
