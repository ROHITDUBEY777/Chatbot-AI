import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

import {motion} from 'motion/react';

const Navbar = () => {
  const[open,setopen] = useState(false);
  return (
    <div>
     <nav className='flex flex-row  text-white top-0 justify-center sticky backdrop-blur-3xl z-50  px-3  py-5   w-full '>
        <ul className='flex flex-row text-2xl  justify-between  w-full  gap-18 '>
            


           
            <li className='cursor-normal'>Chatbot AI</li>
            <div className='text-2xl   flex-row md:flex md:text-2xl   md:gap-16 lg:gap-18 xl:gap-22 hidden justify-center'>

            <a href="#Hero"><li className='cursor-pointer opacity-70 hover:opacity-100'>Home </li></a>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>About </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Service </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Contact Us  </li>
            </div>
          <div className='flex gap-2'>

 <motion.button  whileHover={{scale:0.7}} whileTap={{scale:1.2 }} className='md:text-xl lg:text-xl xl:text-xl hidden md:flex opacity-70 hover:opacity-100 border cursor-pointer   text-white px-3 py-2 rounded-lg '>
          
                 sign-in
                </motion.button> 
          <motion.button  whileHover={{scale:0.7}} whileTap={{scale:1.2 }} className='md:text-xl lg:text-xl xl:text-xl hidden md:flex  opacity-70 hover:opacity-100 border cursor-pointer   text-white px-3 py-2 rounded-lg '>
          
                 Get Started
                </motion.button>  

            <IoMdMenu 
             className='cursor-pointer scale-200 xl:hidden lg:hidden md:hidden flex' />

          </div>
          
        </ul>
     </nav>
      
    </div>
  )
}

export default Navbar
