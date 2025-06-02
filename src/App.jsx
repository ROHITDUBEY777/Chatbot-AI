import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';


import Footer from './components/Footer';

import API from './components/API';
import Cards from './components/cards';

function App() {
  

  return (
    
<div className="absolute top-0 px-0 md:w-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] bg-[#09090b] ">

      <Hero />
    
      <API />
      <Cards />
     
      <Footer/>
  </div>
          
  

  )
}

export default App
