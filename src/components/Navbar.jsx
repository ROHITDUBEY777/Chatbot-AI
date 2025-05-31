import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

import {m, motion} from 'motion/react';

const Navbar = () => {

  
  const[menu,setmenu] = useState(false);






  function controlmenu  () {
      setmenu(!menu);
  }
  return (
    <div>
     <nav className='flex flex-row  text-white top-0 justify-center fixed backdrop-blur-3xl z-50  px-3  py-5   w-full '>
        <ul className='flex flex-row text-2xl  justify-between  w-full   '>
            


           
            <li className='cursor-normal text-xl md:text-xl'>Chatbot AI</li>
            <div className='   flex-row md:flex md:text-xl lg:text-2xl  md:gap-6 lg:gap-18 xl:gap-22 hidden justify-center'>

            <a ><li className='cursor-pointer opacity-70 hover:opacity-100'>Home </li></a>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>About </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Service </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Contact Us  </li>
            </div>
          <div className='flex gap-2'>

 <motion.button  whileHover={{scale:0.7}} whileTap={{scale:1.2 }} className='md:text-base lg:text-xl xl:text-xl hidden md:flex opacity-70 hover:opacity-100 border cursor-pointer   text-white px-3 py-2 rounded-lg '>
          
                 sign-in
                </motion.button> 
          <motion.button  whileHover={{scale:0.7}} whileTap={{scale:1.2 }} className='md:text-base lg:text-xl xl:text-xl hidden md:flex  opacity-70 hover:opacity-100 border cursor-pointer   text-white px-3 py-2 rounded-lg '>
          
                 Get Started
                </motion.button>  
            <button onClick={()=>{controlmenu()}}>
            <IoMdMenu 
          
          className='cursor-pointer scale-150 xl:hidden lg:hidden md:hidden flex' />
          </button>  

             {/* mobile navbar  */}
             {menu && (
             <div  className={`absolute flex md:hidden flex-col z-50 backdrop:blur-3xl duration-300 mx-2 h-screen w-fit px-6 py-5 gap-6 top-0 right-0 mt-[11vh]     transform transition-transform  border`}>
              <ul className='flex flex-col gap-4 backdrop-blur-3xl '>
                 <a ><li className='cursor-pointer opacity-70 hover:opacity-100'>Home </li></a>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>About </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Service </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Contact Us  </li>
              </ul>
             </div>
             )}
          </div>
          
        </ul>
     </nav>
      
    </div>
  )
}

export default Navbar
