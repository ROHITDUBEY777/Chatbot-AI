import React from 'react'
import {motion} from 'motion/react';
const Navbar = () => {
  return (
    <div>
     <nav className='flex flex-row text-white top-0 justify-center fixed backdrop-blur-3xl z-50   px-3 py-5   w-full '>
        <ul className='flex flex-row text-2xl  justify-between  w-full  gap-18 '>
            


           
            <li className='cursor-normal'>Chatbot AI</li>
            <div className='text-2xl flex flex-row gap-16 justify-center'>

            <a href="#Hero"><li className='cursor-pointer'>Home </li></a>
            <li className='cursor-pointer'>About </li>
            <li className='cursor-pointer'>Service </li>
            <li className='cursor-pointer'>Contact Us  </li>
            </div>
          <div className='flex gap-2'>

 <motion.button  whileHover={{scale:0.7}} whileTap={{scale:1.2 }} className='text-xl border cursor-pointer   text-white px-3 py-2 rounded-lg '>
          
                 sign-in
                </motion.button> 
          <motion.button  whileHover={{scale:0.7}} whileTap={{scale:1.2 }} className='text-xl border cursor-pointer   text-white px-3 py-2 rounded-lg '>
          
                 Get Started
                </motion.button>  
          </div>
          
        </ul>
     </nav>
      
    </div>
  )
}

export default Navbar
