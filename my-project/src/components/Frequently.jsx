import React from 'react'
import { FaXmark } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"


const Frequently = () => {
  return (
    <>
      <div className="px-10  mt-16 pb-20 flex justify-between">
        <div className=" w-[300px]  ">
           <h2 className='text-4xl font-bold '>Frequently <br />Asked Questions</h2>
           <p className='text-[16px] '>Still you have any questions? Contact our <br /> Team via support@skillbridge.com</p>
           <button className='mt-10 border rounded-md py-2 px-5 '>See All FAQ's</button>
        </div>

        <div className=" w-[600px] ">
            <div className="border p-5">
            <div className="flex items-center justify-between border-b pb-2">
                <p>Can I enroll in multiple courses at once?</p>
                <p className='border rounded-lg p-3 bg-[#f5f5f8]'><FaXmark /></p>                
            </div>
            <p className='mt-10 text-[14px] '>Absolutely! You can enroll in multiple courses simultaneously and access them at your <br /> convenience.</p>
            <div className=" flex justify-between mt-10 items-center bg-[#f5f5f8] p-3 rounded-lg ">
                <p className=' '>Enrollment Process for Different Courses</p>
                <p className='border rounded-3xl p-2 bg-white'><FaArrowRight /></p>
            </div>
            </div>


            <div className="flex items-center justify-between mt-10 border p-5">
                <p>What kind of support can I expect from instructors?</p>
                <p className='border rounded-lg p-3 bg-[#f5f5f8]'><FaPlus /></p>
            </div>

            <div className="flex items-center justify-between mt-10 border p-5">
                <p>Are the courses self-paced or do they have specific start and end <br /> dates?</p>
                <p className='border rounded-lg p-3 bg-[#f5f5f8]'><FaPlus /></p>
            </div>

            <div className="flex items-center justify-between mt-10 border p-5">
                <p>Are there any prerequisites for the courses?</p>
                <p className='border rounded-lg p-3 bg-[#f5f5f8]'><FaPlus /></p>
            </div>

            <div className="flex items-center justify-between mt-10 border p-5">
                <p>Can I download the course materials for offline access?</p>
                <p className='border rounded-lg p-3 bg-[#f5f5f8]'><FaPlus /></p>
            </div>

        </div>
        
      </div>
    </>
  )
}

export default Frequently
