import React from 'react'
import Hero from '../components/Hero'
import Spotify from '../components/Spotify'
import Benefits from '../components/Benefits'
import Coursesfinal from '../components/Coursesfinal'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Frequently from '../components/Frequently'



const Home = () => {
  return (
    <div>
     
      <Hero/>
      <Spotify/>
      <Benefits/>
      <Coursesfinal/>
      <Testimonials/>
      <Pricing/>
      <Frequently/>
    </div>
  )
}

export default Home
