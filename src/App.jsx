import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import content  from './components/content';

import Footer from './components/Footer';
import About from './components/About';

function App() {
  

  return (
    
<div className="absolute top-0 z-[-2] w-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

      <Hero />
      <About />
      <Footer/>
          
  
</div>
  )
}

export default App
