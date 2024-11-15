import React from 'react'
import Card1 from '../assets/card-img/Card1.png'
import Card2 from '../assets/card-img/Card2.png'
import Card3 from '../assets/card-img/Card3.png'
import Card4 from '../assets/card-img/Card4.png'
import Card5 from '../assets/card-img/Card5.png'
import Card6 from '../assets/card-img/Card6.png'
import Card7 from '../assets/card-img/Card7.png'
import About from '../assets/Container.png'
const Spotify = () => {
  return (
    <>
    <div className="px-10">
      <div className="flex  gap-5 mt-20 border bg-[#f8f6f6] rounded-lg ">
       <img className=' w-36' src={Card1} alt="" />
       <img className='  w-36' src={Card2} alt="" />
       <img className='  w-36' src={Card3} alt="" />
       <img className='  w-36' src={Card4} alt="" />
       <img className='  w-36' src={Card5} alt="" />
       <img className='  w-36' src={Card6} alt="" />
       <img className='  w-36' src={Card7} alt="" />
 
      </div>
      <div className="mt-10 ">
      <img src={About} alt="" />
      </div>
      </div>
    </>
  )
}

export default Spotify
