import React from 'react'
import Spline from "@splinetool/react-spline";

const page = () => {
  return (
    <div className='flex flex-col md:px-44 px-12 gap-4 mt-10 pb-20'>
      <div className='text-white flex flex-col gap-4'>
        <h3 className='font-bold text-2xl'>About Space.Inc</h3>
        <div className='flex flex-col gap-6'>
          <p>The cosmos is more than just the final frontier. it's the ultimate playground for adventure
            discovery, and inspiration. <br />
            Bring wonders back to earth from the unknown. We provide a gateway to explore the vastness of the
            universe. <br />
            Journey through the unknown with us, where the only limit is your imagination.
          </p>
          <p>
            Here in Space.Inc, we're passionate about turning the dream of space exploration into a reality for
            everyone. <br />
            Inspiring people's curiosity, fuel the spirit of exploration, and make the mysteries of space accessible 
            to all. <br />
            Space.Inc is your partner in the journey to explore the cosmos. Join us as we embark on adventures beyond 
            the Earth and into the unknown.
          </p>
        </div>
      </div>
          <Spline
            scene="https://prod.spline.design/kYrxPIhW7w4ejSpE/scene.splinecode"
          />
    </div>
  )
}

export default page
