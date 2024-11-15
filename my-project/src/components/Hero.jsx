import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="">
        <h1 className='text-4xl mt-14 font-bold text-center'><span className='text-yellow-400'>Unlock</span> Your Creative Potential</h1>
        <h2 className='text-2xl mt-5 text-center'>with Online Design and Development Courses.</h2>
        <p className='text-center'>Learn from Industry Experts and Enhance Your Skills.</p>

        <div className="flex mt-10 justify-center gap-4">
          <button className='bg-primary text-white py-2 px-3 rounded-lg'>Explore Courses</button>
          <button className=' bg-[#eaebed] py-2 px-3 rounded-lg'>View Pricing</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
