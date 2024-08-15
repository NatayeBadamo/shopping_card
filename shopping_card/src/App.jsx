import { useState } from 'react'
import './App.css';
import NavBar from './Navbar';
import ImageSlider from './pageComponents/slider';
import Footer from './Footer';

function App() {



  return (
    <>
      
      <NavBar />
      <h1 className=' text-center text-lg font font-bold '>SHOPPING FOR REAL EXPERIENCE</h1>
      <h1 className='text-center text-xl font font-light'>Ghost-Riders</h1>
      <h1 className='text-9xl text-center font font-thin mb-7 shadow-sm'> Explore For More</h1>
      <div className='flex items-center justify-center '>
         <ImageSlider />

      </div>



      <Footer></Footer>
    </>
  )
}

export default App
