import React from 'react'
import { IoMdCheckmark } from "react-icons/io"
const Pricing = () => {
  return (
    <>
    <div className="">
      <div className="px-10">

        <div className="mt-16">
        <h2 className='text-3xl font-bold '>Our Courses</h2>
        <div className="flex justify-between items-center  mt-2">
        <p className='text-[14px] '>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
        <div className="flex gap-4 border bg-[#f8f8fa] p-2 rounded-lg ">
            <button className='border bg-primary py-2 px-5 rounded-lg text-white'>Monthly</button>
            <button className=' py-2 px-5 rounded-lg'>Yearly</button>
        </div>
        </div>
        </div>

        <div className="flex gap-5 justify-center items-center">

        <div className="  mt-14 w-[500px] p-3">
            <p className='border font-bold bg-[#f5f5f8] text-center rounded-lg p-2 '>Free Plan</p>
            <p className='text-center mt-4'><span className='text-5xl font-bold'>$0</span>/month</p>
            <p className='text-center mt-8 font-bold'>Available Features</p>

            <div className="flex gap-3 items-center mt-7">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Access to selected free courses.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Limited course materials and resources.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Basic community support.</p>
            </div>            

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >No certification upon completion.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Ad-supported platform.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Access to exclusive Pro Plan community forums.</p>
            </div>
          

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Early access to new courses and updates.</p>
            </div>

            <button className='border bg-primary p-3 mt-10 text-white rounded-md w-full'>Get Started</button>

        </div>

        <div className="  mt-14 w-[500px] p-3">
            <p className='border font-bold bg-[#f5f5f8] text-center rounded-lg p-2 '>Free Plan</p>
            <p className='text-center mt-4'><span className='text-5xl font-bold'>$79</span>/month</p>
            <p className='text-center mt-8 font-bold'>Available Features</p>

            <div className="flex gap-3 items-center mt-7">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Unlimited access to all courses.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Unlimited course materials and resources.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Priority support form instructors.</p>
            </div>            

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Course completion certificates.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Ad-free experience.</p>
            </div>

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Access to exclusive Pro Plan community forums.</p>
            </div>
          

            <div className="flex gap-3 items-center mt-3">
                <p className='border bg-[#f5f5f8] ml-20'><IoMdCheckmark /></p>
                <p >Early access to new courses and updates.</p>
            </div>

            <button className='border bg-primary p-3 mt-10 text-white rounded-md w-full'>Get Started</button>

        </div>

        </div>
  

      </div>
    </div>
    </>
  )
}

export default Pricing
