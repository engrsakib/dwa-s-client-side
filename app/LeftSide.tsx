import Image from 'next/image'
import React from 'react'
export default function LeftSide() {
  return (
    <div className='flex flex-col items-center justify-evenly h-screen'>
      {/* image */}
      <div>
      <Image 
      src="/munajat.png"
      width={100}
      height={100}
      alt="leftside"
      />
      </div>
      {/* middle items */}
      <div>

      </div>
      {/* last items */}
      <div>
        
      </div>


    </div>
  )
}
