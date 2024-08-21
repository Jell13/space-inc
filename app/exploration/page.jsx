import React from 'react'
import Spline from '@splinetool/react-spline/next';

const page = () => {
  return (
    <div className='w-screen h-screen md:px-44 px-12 text-white'>
      <Spline
        scene="https://prod.spline.design/6gL6dzNIx3dKVwNV/scene.splinecode" 
      />
    </div>
  )
}

export default page
