import React, { useRef, useState } from 'react'
import cardsobj from "../info/cards.js";
import {motion,useAnimation ,easeInOut, useInView } from "framer-motion";
import { useEffect } from 'react';


const Cards = ({darkmode}) => {
const refcard = useRef(null);
const reftext = useRef(null);
const [prevscroll,setprevscroll] = useState(0);
const [scrollingdown,setscrollingdown]   = useState(false);
 const inViewcard = useInView(refcard, {once: true, amount: 0.5})
 const controls = useAnimation(); 

 useEffect(()=>{
  const handlescroll = () =>  {
  const current = window.scrollY
  setscrollingdown( current >  prevscroll );
  setprevscroll(current);
   }
   window.addEventListener('scroll',handlescroll);

   return () => window.removeEventListener('scroll',handlescroll);
 },[prevscroll])


  useEffect(()=>{
    if(inViewcard && scrollingdown){
      controls.start({opacity:1,y:0})
    }

    
  },[inViewcard,scrollingdown,controls])


  return (
    <div 
   
     className={`${darkmode?"text-white":"text-black"}`} >
     <motion.h1 
      ref={reftext}
      initial={{opacity:0.2,y:40}}
      animate={{opacity:1,y:0}}
      transition={{duration:1,ease:"easeOut"}}
      id='About'
     className='poppins mt-[15vh] text-center text-5xl mb-8  '>About</motion.h1>
    <motion.div
         ref={refcard}
          initial={{opacity:0,y:40}}
          animate={controls}
          transition={{duration:1,ease:"easeOut"}}

           className={`flex flex-col gap-34   justify-center ${darkmode?"text-white ":"text-black "}   px-8  lg:flex-row md:gap-24   md:px-4 lg:px-24  min-h-screen     `}>
       {cardsobj.map((item)=>(
         <div
        
           key={item.id} className={` ${darkmode?" bg-[#09090b]":"bg-[#fafaf9] "} md:mx-24 lg:mx-0  md:h-fit  border  border-[#27272a]  hover:border-1 md:hover:border-yellow-400 hover: rounded-lg   cursor-pointer `}>
         <ul className=' w-fit h-fit md:h-fit  justify-between items-center text-center  gap- '>
          <li className='mt-[4vh]  md:px-6 lg:mt-[8vh]   mb-11 l'>{item.title}</li>
          <p className={`rounded-lg  text-center py-4 md:px-6 xl:h-[24rem]  px-4 md:py-10  xl:px-12 ${darkmode?"bg-[#27272a] ":"bg-[#e7e5e4] "}   `}>{item.description}</p>
         </ul>
         </div>
       ))}
       


      
    </motion.div>
       </div>
  )
}

export default Cards;
