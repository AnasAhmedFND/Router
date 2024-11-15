import React from 'react'
import Clint1 from '../assets/clint1.png'
import Clint2 from '../assets/clint2.png'
import Clint3 from '../assets/clint3.png'
import Clint4 from '../assets/clint4.png'

const Testimonials = () => {
  return (
    <>
     <div className="px-10">

        <div className="mt-16">
            <h2 className='text-3xl font-bold '>Our Testimonials</h2>
            <div className="flex justify-between items-center  mt-2">
            <p className='text-[15px] '>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
            <button className='border bg-[#cdc7c7] py-2 px-5 rounded-lg'>View All</button>
            </div>
        </div>
                

        <div className="flex justify-between">
            <div className="clint1 w-[570px] border mt-16 px-10 py-4 rounded-lg bg-[#f5f5f8] ">
                <p className='text-[14px] '>The web design course provided a solid foundation for me. The instructors <br /> were knowledgeable and supportive, and the interactive learning environment <br /> was engaging. I highly recommend it!</p>
                <div className="flex justify-between mt-10 items-center">
                    <div className="flex gap-5 items-center">
                        <img src={Clint1} alt="" />
                        <p>Sarah L</p>
                    </div>
                    <button className='border px-5 py-2 bg-[#f1f0f3] rounded-lg  '>Read Full Story</button>
                </div>
            </div>

            <div className="clint1 w-[570px] border mt-16 px-10 py-4 rounded-lg bg-[#f5f5f8] ">
                <p className='text-[14px] '>The UI/UX design course exceeded my expectations. The instructor's <br /> expertise and practical assignments helped me improve my design skills. I feel <br /> more confident in my career now. Thank you!</p>
                <div className="flex justify-between mt-10 items-center">
                    <div className="flex gap-5 items-center">
                        <img src={Clint2} alt="" />
                        <p>Jason M</p>
                    </div>
                    <button className='border px-5 py-2 bg-[#f1f0f3] rounded-lg  '>Read Full Story</button>
                </div>
            </div>
        </div>
        <div className="flex justify-between relative bottom-7">
            <div className="clint1 w-[570px] border mt-16 px-10 py-4 rounded-lg bg-[#f5f5f8] ">
                <p className='text-[14px] '>The mobile app development course was fantastic! The step-by-step <br /> tutorials and hands-on projects helped me grasp the concepts easily. I'm now <br /> building my own app. Great course!</p>
                <div className="flex justify-between mt-10 items-center">
                    <div className="flex gap-5 items-center">
                        <img src={Clint3} alt="" />
                        <p>Emily R</p>
                    </div>
                    <button className='border px-5 py-2 bg-[#f1f0f3] rounded-lg  '>Read Full Story</button>
                </div>
            </div>

            <div className="clint1 w-[570px] border mt-16 px-10 py-4 rounded-lg bg-[#f5f5f8] ">
                <p className='text-[14px] '>I enrolled in the graphic design course as a beginner, and it was the perfect <br /> starting point. The instructor's guidance and feedback improved my design <br /> abilities significantly. I'm grateful for this course!</p>
                <div className="flex justify-between mt-10 items-center">
                    <div className="flex gap-5 items-center">
                        <img src={Clint4} alt="" />
                        <p>Michael K</p>
                    </div>
                    <button className='border px-5 py-2 bg-[#f1f0f3] rounded-lg  '>Read Full Story</button>
                </div>
            </div>
        </div>

        
  

     </div>
    </>
  )
}

export default Testimonials
