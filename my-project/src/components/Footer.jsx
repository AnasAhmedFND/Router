import React from 'react'
import Logo from '../assets/Logo.png'
import { IoMdMail } from "react-icons/io"
import { IoIosCall } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <>
    <div className="px-10">
      <div className="footer flex justify-between mt-16 border-b-2 pb-8">
        <div className="one">
          <img src={Logo} alt="" />
          <div className="contact">
             <div className="flex  items-center gap-3 mt-8">
             <p><IoMdMail /></p>
             <p>hello@skillbridge.com</p>
             </div>

             <div className="flex items-center gap-3">
                <p><IoIosCall /></p>
                <p>+9191813 23 2309</p>
             </div>

             <div className="flex gap-3 items-center">
              <p><IoLocationSharp /></p>
              <p>Somewhere in the World</p>
             </div>
          </div>
        </div>

        <div className="home text-start">
          <h2 className='font-bold'>Home</h2>
          <p className='mt-5'>Benefits</p>
          <p>Our courses</p>
          <p>Our Testimonials</p>
          <p>Our RAQ</p>
        </div>

        <div className="about text-start">
          <h2 className='font-bold'>About Us</h2>
          <p className='mt-5'>Company</p>
          <p>Achievements</p>
          <p>Our Goals</p>
        </div>

        <div className="social">
          <h2 className='font-bold'>Social Profiles</h2>
          <div className="flex gap-2 mt-5">
            <p className='border w-8 h-8 justify-items-center align-middle pt-2'><FaFacebook /></p>
            <p className='border w-8 h-8 justify-items-center align-middle pt-2'><FaTwitter /></p>
            <p className='border w-8 h-8 justify-items-center align-middle pt-2'><FaLinkedin /></p>
          </div>
        </div>

      </div>

      <p className='pt-8'>© 2023 Skillbridge. All rights reserved.</p>

    </div>
    </>
  )
}

export default Footer
