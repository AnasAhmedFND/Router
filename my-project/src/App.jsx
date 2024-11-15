import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Hero from './components/Hero'
import Rooted from './components/Rooted'
import Coursesfinal from './components/Coursesfinal'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'





function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rooted/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/contact' element={<Testimonials/>} />
        <Route path='/courses' element={<Coursesfinal/>} />
        <Route path='/pricig' element={<Pricing/>} />


        

    </Route>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    
    
    </>
  )
}

export default App
