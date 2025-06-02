import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';


import Footer from './components/Footer';

import API from './components/API';
import Cards from './components/cards';

function App() {
  

  return (
    
<div className="absolute top-0 px-0 md:w-full w-full  bg-[#09090b] ">

      <Hero />
    
      <API />
      <Cards />
     
      <Footer/>
          
  
</div>
  )
}

export default App
