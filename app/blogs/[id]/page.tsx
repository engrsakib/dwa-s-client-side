import React from 'react'

export default function page({ params }: { params: { id: string } }) {
    const {id} = params;
    
  return (
    <div>
      <h1 className='text-2xl font-black mt-4 text-center'>this is blogs {id}</h1>
    </div>
  )
}
