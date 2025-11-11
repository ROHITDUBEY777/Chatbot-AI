import React, { useActionState, useEffect, useState} from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


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
     <nav className={`flex flex-row   text-white top-0 justify-center fixed ${darkmode?" backdrop-blur-3xl":"backdrop-blur-3xl"}  z-50  px-6  py-5   w-full `}>
        <ul className={`flex flex-row text-2xl   justify-between md:w-screen w-full ${darkmode?"text-white":"text-black   "}  `}>
            


           
            <li className='  font-bold cursor-normal   text-xl md:text-xl'>CHATBOT </li>
            <div className='   flex-row md:flex md:text-xl lg:text-2xl   md:gap-6 lg:gap-18 xl:gap-22 hidden justify-center'>

            <li onClick={()=>handlescroll('Home')} className='cursor-pointer   hover:text-yellow-400'>Home </li>
            <li onClick={()=>handlescroll('About')} className='cursor-pointer hover:text-yellow-400'>About </li>
            <li onClick={()=>handlescroll('service')} className='cursor-pointer   hover:text-yellow-400'>Service </li>
            <li onClick={()=>handlescroll('Contact')} className='cursor-pointer   hover:text-yellow-400'>Contact  </li>
            </div>
          <div className='flex px-5 gap-5 justify-around '>
            <button onClick={()=>
              setdarkmode(!darkmode)
            } className='  py-2  cursor-pointer '>
              {darkmode? <MdOutlineLightMode /> :<MdDarkMode />}
            </button>

          

                  <header className='my-auto flex'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
        
         
         
            
          </div>
          
        </ul>
     </nav>
      
    </div>
  )
}

export default Navbar
