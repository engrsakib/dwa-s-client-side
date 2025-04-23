import AboutNavbar from '@/components/AboutNavbar'
import React from 'react'

export default function Aboutlayout({children}) {
  return (
    <div>
      {/* about nav */}
      <div className='mt-6'>
      <AboutNavbar></AboutNavbar>
      </div>

      {children}
    </div>
  )
}
