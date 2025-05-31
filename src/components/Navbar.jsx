import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

import {easeIn, m, motion} from 'motion/react';

const Navbar = () => {

  
  const[menu,setmenu] = useState(false);






  function controlmenu  () {
      setmenu(!menu);
  }
  function closePopup () {
    setmenu(false);
  }
  return (
    <div>
     <nav className='flex flex-row  text-white top-0 justify-center fixed backdrop-blur-3xl z-50  px-6  py-5   w-full '>
        <ul className='flex flex-row text-2xl  justify-between md:w-screen w-full   '>
            


           
            <li className=' cursor-normal   text-xl md:text-xl'>CHATBOT </li>
            <div className='   flex-row md:flex md:text-xl lg:text-2xl  md:gap-6 lg:gap-18 xl:gap-22 hidden justify-center'>

            <a ><li className='cursor-pointer opacity-70 hover:opacity-100'>Home </li></a>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>About </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Service </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Contact Us  </li>
            </div>
          <div className='flex gap-2'>

 <motion.button  whileTap={{scale:1.2 }} className='md:text-base lg:text-xl rounded-full hover:bg-[#f4f4f5] hover:text-black hidden md:flex opacity-70 hover:opacity-100 border cursor-pointer   text-white px-3 py-2  '>
          
                 sign-in
                </motion.button> 
                <motion.button   whileTap={{scale:1.2 }} className='   hover:bg-[#f4f4f5] hover:text-black md:text-base lg:text-xl rounded-full  md:flex  opacity-70 hover:opacity-100 border cursor-pointer   text-white px-3 py-2 '>
                      
                             Get Started
                            </motion.button>    
           
    
        
         
            <button onClick={()=>{controlmenu()}}>
            <IoMdMenu 
          
          className='cursor-pointer scale-150 xl:hidden lg:hidden md:hidden flex' />
          </button>  

             {/* mobile navbar  */}
             {menu && (
             <motion.div 
              initial={{opacity:0 , y:20}}
              animate = {{opacity:100 ,y:20}}
               transition={{duration:0.6,ease:"easeIn"}}

               className={`absolute flex md:hidden bg-[#0f172a]  flex-col backdrop-blur-2xl z-50 duration-300 mx-2 h-screen w-fit px-6 py-5 gap-6 top-0 right-0    transform transition-transform  `}>
                 <button onClick={()=>
                closePopup()
              } className="absolute  cursor-pointer  scale-125 top-4 left-4 text-white opacity-60 hover:opacity-100  transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>    
              </button>
              <ul className='flex flex-col mt-[9vh] gap-2 '>
            <a ><li className='cursor-pointer opacity-70 hover:opacity-100'>Home </li></a>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>About </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Service </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100'>Contact Us  </li>
              </ul>
             </motion.div>
             )}
          </div>
          
        </ul>
     </nav>
      
    </div>
  )
}

export default Navbar
