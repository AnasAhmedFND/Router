import React from 'react'
import Cour1 from '../assets/card-img/cours1.png'
import Cour2 from '../assets/card-img/cours2.png'
import Cour3 from '../assets/card-img/cours3.png'
import Cour4 from '../assets/card-img/cours4.png'
import Cour5 from '../assets/card-img/cours5.png'
import Cour6 from '../assets/card-img/cours6.png'


const Coursescard = () => {
  return (
    <>
    <div className="px-10 mt-8 ">

    <div className="flex gap-7 ">
        <div className="border w-[600px]  bg-[#f2f2f4] p-5 rounded-lg">
            <img className='h-[250px] w-full ' src={Cour1} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                    <p className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>4 Weeks </p>
                    <p  className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>Beginner</p>
                </div>
                <div className="">
                    <p className='font-bold'>By David Brown</p>
                </div>
            </div>
            <h2 className='mt-6 font-bold text-2xl'>Web Design Fundamentals</h2>
            <p className='text-[14px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive <br /> design principles. Develop the skills to create visually appealing and user- <br />friendly websites.</p>
            <button className='bg-white w-full mt-5 p-2 rounded-lg'>Ger it Now</button>
        </div>

        <div className="border w-[600px] bg-[#f2f2f4] p-5 rounded-lg">
            <img className='h-[250px] w-full ' src={Cour2} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                    <p className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>6 Weeks </p>
                    <p  className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>Intermediate</p>
                </div>
                <div className="">
                    <p className='font-bold'>Emily Johnson</p>
                </div>
            </div>
            <h2 className='mt-6 font-bold text-2xl'>UI/UX Design</h2>
            <p className='text-[14px]'>Master the art of creating intuitive user interfaces (UI) and enhancing user <br /> experiences (UX). Learn design principles, wireframing, prototyping, and <br /> usability testing techniques.</p>
            <button className='bg-white w-full mt-5 p-2 rounded-lg'>Ger it Now</button>
        </div>
    </div>

    <div className="flex gap-7 mt-5">
        <div className="border w-[600px]  bg-[#f2f2f4] p-5 rounded-lg">
            <img className='h-[250px] w-full ' src={Cour3} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                    <p className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>8 Weeks </p>
                    <p  className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>Intermediate</p>
                </div>
                <div className="">
                    <p className='font-bold'>By David Brown</p>
                </div>
            </div>
            <h2 className='mt-6 font-bold text-2xl'>Mobile App Development</h2>
            <p className='text-[14px]'>Dive into the world of mobile app development. Learn to build native iOS and <br /> Android applications using industry-leading frameworks like Swift and Kotlin.</p>
            <button className='bg-white w-full mt-10 p-2 rounded-lg'>Ger it Now</button>
        </div>

        <div className="border w-[600px] bg-[#f2f2f4] p-5 rounded-lg">
            <img className='h-[250px] w-full ' src={Cour4} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                    <p className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>10 Weeks </p>
                    <p  className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>Beginner</p>
                </div>
                <div className="">
                    <p className='font-bold'>By Sarah Thompson</p>
                </div>
            </div>
            <h2 className='mt-6 font-bold text-2xl'>Graphic Design for Beginners</h2>
            <p className='text-[14px]'>Discover the fundamentals of graphic design, including typography, color <br /> theory, layout design, and image manipulation techniques. Create visually <br /> stunning designs for print and digital media.</p>
            <button className='bg-white w-full mt-5 p-2 rounded-lg'>Ger it Now</button>
        </div>
    </div>

    <div className="flex gap-7 mt-5">
        <div className="border w-[600px]  bg-[#f2f2f4] p-5 rounded-lg">
            <img className='h-[250px] w-full ' src={Cour5} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                    <p className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>10 Weeks </p>
                    <p  className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>Intermediate</p>
                </div>
                <div className="">
                    <p className='font-bold'>By Michael Adams</p>
                </div>
            </div>
            <h2 className='mt-6 font-bold text-2xl'>Front-End Web Development</h2>
            <p className='text-[14px]'>Become proficient in front-end web development. Learn HTML, CSS,<br /> JavaScript, and popular frameworks like Bootstrap and React. Build <br /> interactive and responsive websites.</p>
            <button className='bg-white w-full mt-5 p-2 rounded-lg'>Ger it Now</button>
        </div>

        <div className="border w-[600px] bg-[#f2f2f4] p-5 rounded-lg">
            <img className='h-[250px] w-full ' src={Cour6} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                    <p className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>6 Weeks </p>
                    <p  className='border bg-[#f2f1f5] py-2 px-5 rounded-lg'>Advance</p>
                </div>
                <div className="">
                    <p className='font-bold'>By Jennifer Wilson</p>
                </div>
            </div>
            <h2 className='mt-6 font-bold text-2xl'>Advanced JavaScript</h2>
            <p className='text-[14px]'>Take your JavaScript skills to the next level. Explore advanced concepts like <br /> closures, prototypes, asynchronous programming, and ES6 features. Build <br /> complex applications with confidence.</p>
            <button className='bg-white w-full mt-5 p-2 rounded-lg'>Ger it Now</button>
        </div>
    </div>

    </div>

    </>
  )
}

export default Coursescard
