import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mt-2 items-center px-10">
        <div className="flex gap-10 ">
            <img src={Logo} alt="" />
            <ul className='flex gap-5 items-center'>
                <li><Link to='/'>Home</Link>  </li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/pricig' >Pricing</Link>  </li>
                <li><Link to='/contact'>Contact</Link>  </li>
            </ul>
        </div>

        <div className="flex gap-8">
            <button>Sign Up</button>
            <button className='border py-3 px-8 bg-primary rounded-lg'>Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
