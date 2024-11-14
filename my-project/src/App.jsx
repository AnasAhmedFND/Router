import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Hero from './components/Hero'
import Contact from './pages/Contact'
import Rooted from './components/Rooted'




function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rooted/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Hero/>} />
        <Route path='/contact' element={<Contact/>} />

    </Route>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
