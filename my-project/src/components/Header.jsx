import React from 'react'
import { FaArrowRight } from "react-icons/fa"
const Header = () => {
  return (
    <>
      <div className="flex border p-5 bg-primary text-center items-center gap-5 justify-center">
        <h2 className='text-center font-bold  text-white font-vietnam'>Free Courses 🌟 Sale Ends Soon, Get It Now </h2>
        <p className='text-white'><FaArrowRight /></p>
      </div>
    </>
  )
}

export default Header
