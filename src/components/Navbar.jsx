import React, { useActionState, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

import {easeIn, m, motion} from 'motion/react';

const Navbar = () => {

  
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
  
  function login() {
    console.log(setinput);
  }

  return (
    <div>
     <nav className='flex flex-row  text-white top-0 justify-center fixed backdrop-blur-3xl z-50  px-6  py-5   w-full '>
        <ul className='flex flex-row text-2xl  justify-between md:w-screen w-full   '>
            


           
            <li className='  font-bold cursor-normal   text-xl md:text-xl'>CHATBOT </li>
            <div className='   flex-row md:flex md:text-xl lg:text-2xl  md:gap-6 lg:gap-18 xl:gap-22 hidden justify-center'>

            <a ><li className='cursor-pointer opacity-70 hover:opacity-100 hover:text-yellow-400'>Home </li></a>
            <li className='cursor-pointer opacity-70 hover:opacity-100 hover:text-yellow-400'>About </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100  hover:text-yellow-400'>Service </li>
            <li className='cursor-pointer opacity-70 hover:opacity-100  hover:text-yellow-400'>Contact Us  </li>
            </div>
          <div className='flex gap-2'>

 <motion.button   onClick={()=>
               openpopup() } whileTap={{scale:1.2 }} className='md:text-base lg:text-xl rounded-full hover:bg-yellow-400 px-4 hover:text-black hidden md:flex opacity-70 hover:opacity-100 border cursor-pointer   text-white  py-2  '>
          
                log-in
                </motion.button> 
               {/* popup for sign in */}
               <div className={`flex bg-[#171717]  rounded-lg absolute  py-9 h-fit right-4 ${popup ? "opacity-100 scale-100 ":"opacity-0 hidden invisible"} `}>
               <div className='px-10 text-white '>
                      <button onClick={()=>
                      closePopup2()
                    } className="  cursor-pointer  scale-150 top-4 left-4 text-white opacity-60 hover:opacity-100  transition duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>    
                    </button>
               <h1 className='text-white text-xl'>Welcome back</h1>
               <p className='text-base mb-2'>Login to your account</p>
               <h2 className='text-xl'>Email</h2>
               <input 
                value={input}

                onChange={(e)=>setinput(e.target.value)}
                 className='w-full text-white border py-1 border-white text-base px-4'
                 placeholder='example@.com'
                />
                <h2 className='mt-[2vh] text-xl'>Password</h2>
               <input 
               type='password'
               value={input2}
               onChange={(e)=>setinput2(e.target.value)}
               placeholder='Enter your password here 
               
               '
               className='w-full border  border-white py-1 text-base px-4 '
               />
               <motion.button whileTap={{scale:1.1}} onClick={login()} className='w-full cursor-pointer  text-base text-black bg-[#fafafa] py-1 rounded-md mt-[2vh]'>login</motion.button>
               <p className='text-base opacity-70 text-center mt-2'>or continue with </p>
               <div className='flex flex-row px-2 py-4 justify-between w-full '>
                <FaApple className={`scale-150  `} />
                <FaGoogle className={`scale-125  `}  />
                <FaMeta  className={`scale-125    `} />
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
