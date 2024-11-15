import React from 'react'
import { MdArrowOutward } from "react-icons/md"
const Benefits = () => {
  return (
    <>
      <div className="px-10">
        <div className="mt-16">
            <h2 className='text-3xl font-bold '>Benefits</h2>
           <div className="flex justify-between items-center  mt-2">
           <p className='text-[15px] '>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
           <button className='border bg-[#cdc7c7] py-2 px-5 rounded-lg'>View All</button>
           </div>
        </div>
        
        <div className="card-item mt-10   flex gap-4 justify-between">
            <div className="card1 border w-[350px] py-6 px-3 ">
                <h2 className='text-5xl font-bold text-end'>01</h2>
                <h3 className='font-bold mt-4'>Flexible Learning Schedule</h3>
                <p>Fit your coursework around your existing <br /> commitments and obligations.</p>
              
               <p className='mt-3 w-10 h-10 bg-[#f7f5f5] flex items-center justify-center text-yellow-500 ml-64'><MdArrowOutward /></p>
              

            </div>

            <div className="card2 border w-[350px] py-6 px-3">
                <h2 className='text-5xl font-bold text-end'>02</h2>
                <h3 className='font-bold mt-4'>Expert Instruction</h3>
                <p>Learn from industry experts who have hands- <br />on experience in design and development.</p>
                <p className='mt-3 w-10 h-10 bg-[#f7f5f5] flex items-center justify-center text-yellow-500 ml-64'><MdArrowOutward /></p>
            </div>

            <div className="card3 border w-[350px] py-6 px-3">
                <h2 className='text-5xl font-bold text-end'>03</h2>
                <h3 className='font-bold mt-4'>Diverse Course Offerings</h3>
                <p>Explore a wide range of design and <br /> development courses covering various topics.</p>

                 <p className='mt-3 w-10 h-10 bg-[#f7f5f5] flex items-center justify-center text-yellow-500 ml-64'><MdArrowOutward /></p>
            </div>
        </div>
        <div className="card-item mt-10   flex gap-4 justify-between">

            <div className="card4 border w-[350px] py-6 px-3">
                <h2 className='text-5xl font-bold text-end'>04</h2>
                <h3 className='font-bold mt-4'>Updated Curriculum</h3>
                <p>Access courses with up-to-date content <br /> reflecting the latest trends and industry <br /> practices.</p>

                 <p className='mt-3 w-10 h-10 bg-[#f7f5f5] flex items-center justify-center text-yellow-500 ml-64'><MdArrowOutward /></p>
            </div>

            <div className="card5 border w-[350px] py-6 px-3">
                <h2 className='text-5xl font-bold text-end'>05</h2>
                <h3 className='font-bold mt-4'>Practical Projects and Assignments</h3>
                <p>Develop a portfolio showcasing your skills  <br />and abilities to potential employers.</p>

                 <p className='mt-3 w-10 h-10 bg-[#f7f5f5] flex items-center justify-center text-yellow-500 ml-64'><MdArrowOutward /></p>
            </div>

            <div className="card6 border w-[350px] py-6 px-3">
                <h2 className='text-5xl font-bold text-end'>06</h2>
                <h3 >Interactive Learning Environment</h3>
                <p>Collaborate with fellow learners, exchanging <br /> ideas and feedback to enhance your <br /> understanding.</p>

                 <p className='mt-3 w-10 h-10 bg-[#f7f5f5] flex items-center justify-center text-yellow-500 ml-64'><MdArrowOutward /></p>
            </div>

        </div>
        
      </div>
    </>
  )
}

export default Benefits
