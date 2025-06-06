import { useState ,useEffect } from 'react'
import './App.css'
import Hero from './components/Hero';


import Footer from './components/Footer';

import API from './components/API';
import Cards from './components/cards';


function App() {
  const [darkmode,setdarkmode] = useState(false);

  useEffect(()=>{
    if(darkmode)
    {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }

  },[darkmode])



  return (
    
<div className="absolute top-0 px-0 md:w-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] bg-white dark:bg-[#09090b]  ">
  {/* <div class="relative h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div> */}

      <Hero darkmode={darkmode} setdarkmode={setdarkmode} />
    
      <API />
       <Cards />
     
      <Footer/>
  </div>
          
  

  )
}

export default App
