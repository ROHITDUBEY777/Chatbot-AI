import React, { useActionState, useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import {domAnimation, easeIn, m, motion} from 'motion/react';

const Navbar = ({darkmode,setdarkmode}) => {

  
  const[menu,setmenu] = useState(false);
  const[popup,setpopup] = useState(false);
  const[input,setinput] = useState("")
  const[input2,setinput2] = useState("")






  function controlmenu  () {
      setmenu(!menu);
  }
  function closePopup () {
    setmenu(false);
  }
  function openpopup () {
    setpopup(!popup);
  }
  function closePopup2 () {
    setpopup(false);
  }


  function handlescroll (id) {
  
    const element = document.getElementById(id);
      if(element) {
    element.scrollIntoView({behavior: "smooth" })
     
    }
  }
  
  function handlescroll2 (id) {
  
    const element = document.getElementById(id);
      if(element) {
    element.scrollIntoView({behavior: "smooth" })
     
    }
    setmenu(false);
    
  }
  
  useEffect(()=>{
    if(darkmode)
    {
      document.documentElement.classList.add('dark');
    }
    else
    {
   document.documentElement.classList.remove('dark');
    }
  })
 
  return (
    <div >
     <nav className={`flex flex-row  text-white top-0 justify-center fixed ${darkmode?" backdrop-blur-3xl":"backdrop-blur-3xl"}  z-50  px-6  py-5   w-full `}>
        <ul className={`flex flex-row text-2xl   justify-between md:w-screen w-full ${darkmode?"text-white":"text-black   "}  `}>
            


           
            <li className='  font-bold cursor-normal   text-xl md:text-xl'>CHATBOT </li>
            <div className='   flex-row md:flex md:text-xl lg:text-2xl   md:gap-6 lg:gap-18 xl:gap-22 hidden justify-center'>

            <li onClick={()=>handlescroll('Home')} className='cursor-pointer   hover:text-yellow-400'>Home </li>
            <li onClick={()=>handlescroll('About')} className='cursor-pointer hover:text-yellow-400'>About </li>
            <li onClick={()=>handlescroll('service')} className='cursor-pointer   hover:text-yellow-400'>Service </li>
            <li onClick={()=>handlescroll('Contact')} className='cursor-pointer   hover:text-yellow-400'>Contact  </li>
            </div>
          <div className='flex '>
            <button onClick={()=>
              setdarkmode(!darkmode)
            } className='  py-2  cursor-pointer '>
              {darkmode? <MdOutlineLightMode /> :<MdDarkMode />}
            </button>

          
 <motion.button   onClick={()=>
               openpopup() } whileTap={{scale:1.2 }} className={`md:text-base lg:text-xl  rounded-full ${darkmode?"text-white":"text-black"} hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-500/50  px-3 text-base py-1 md:px-4 hover:text-black mx-4 md:flex  border cursor-pointer     md:py-2  `} >
          
                log-in
                </motion.button> 
               {/* popup for sign in */}
               <div className={`flex  ${darkmode?"bg-[#171717] text-white":"bg-white border text-black "} rounded-lg absolute z-50  py-9 h-fit  right-2 ${popup ? "opacity-100 scale-100 ":"opacity-0 hidden invisible"} `}>
               <div className='px-10  '>
                      <button onClick={()=>
                      closePopup2()
                    } className="  cursor-pointer  scale-150 top-4 left-4  md:opacity-60 md:hover:opacity-100  transition duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>    
                    </button>
               <h1 className='text-xl'>Welcome back</h1>
               <p className='text-base mb-2'>Login to your account</p>
               <h2 className='text-xl'>Email</h2>
               <input 
                value={input}

                onChange={(e)=>setinput(e.target.value)}
                 className='w-full  border py-1  text-base px-4'
                 placeholder='example@gmail.com'
                />
                <h2 className='mt-[2vh] text-xl'>Password</h2>
               <input 
               type='password'
               value={input2}
               onChange={(e)=>setinput2(e.target.value)}
               placeholder='Enter your password here 
               
               '
               className='w-full border   py-1 text-base px-4 '
               />
               <motion.button whileTap={{scale:1.1}} className={`w-full cursor-pointer text-base ${darkmode?"bg-[#fafafa] text-black ":"bg-black text-white"}  py-2 rounded-md mt-[2vh]`}>login</motion.button>
               <p className='text-base opacity-70 text-center mt-2'>or continue with </p>
               <div className='flex flex-row px-2 py-4 justify-between w-full '>
                <FaApple className={`scale-150 cursor-pointer `} />
                <FaGoogle className={`scale-125 cursor-pointer   `}  />
                <FaMeta  className={`scale-125  cursor-pointer  `} />
               </div>
               <p className='text-base text-center'>Don't have an account  <a href="" className='underline'>signup</a>
               </p>
               </div>


               </div>
        
         
            <button onClick={()=>{controlmenu()}}>
            <IoMdMenu 
          
          className='cursor-pointer scale-150 xl:hidden lg:hidden md:hidden flex' />
          </button>  

             {/* mobile navbar  */}
             {menu && (
             <div 
              initial={{opacity:0 , y:20}}
              animate = {{opacity:100 ,y:20}}
               transition={{duration:0.6,ease:"easeIn"}}

               className={`absolute flex md:hidden ${darkmode?" bg-[#0f172a] ":" bg-[#f1f5f9] text-black border "} flex-col backdrop-blur-2xl z-50 duration-300  h-screen w-51  px-6 py-5 gap-8 top-0 right-0    transform transition-transform  `}>
                 <button onClick={()=>
                closePopup()
              } className="absolute  cursor-pointer  scale-125 top-4 left-4  opacity-60 hover:opacity-100  transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>    
              </button>
              <ul className='flex flex-col mt-[9vh] gap-2 '>
           <li onClick={()=>handlescroll2('Home')} className='cursor-pointer '>Home </li>
           <li onClick={()=>handlescroll2('About')} className='cursor-pointer '>About </li>
            <li onClick={()=>handlescroll2('service')} className='cursor-pointer '>Service </li> 
          <li onClick={()=>handlescroll2('Contact')} className='cursor-pointer '>Contact   </li> 
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
