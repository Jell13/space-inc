import React from 'react'
import Spline from '@splinetool/react-spline/next';

const page = () => {
  return (
    <div className=' w-full h-full md:px-44 px-12 text-white mt-10'>
      <h1 className='text-2xl font-bold'>Witness our exploration</h1>
      <Spline
        scene="https://prod.spline.design/6gL6dzNIx3dKVwNV/scene.splinecode" 
      />
    </div>
  )
}

export default page
