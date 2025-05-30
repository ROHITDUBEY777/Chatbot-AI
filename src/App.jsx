import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';


import Footer from './components/Footer';
import About from './components/About';
import API from './components/API';

function App() {
  

  return (
    
<div className="absolute top-0 px-0 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      <Hero />
    
      <API />
      <About />
      <Footer/>
          
  
</div>
  )
}

export default App
