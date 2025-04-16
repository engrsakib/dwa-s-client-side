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
      <div>
        
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
