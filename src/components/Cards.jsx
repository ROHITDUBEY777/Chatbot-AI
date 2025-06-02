import React, { useRef, useState } from 'react'
import cardsobj from "../info/cards.js";
import {motion,useAnimation ,easeInOut, useInView } from "framer-motion";
import { useEffect } from 'react';


const cards = () => {
const refcard = useRef(null);
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
    <>
     <h1 className='poppins text-white mt-[15vh] text-center text-5xl mb-8 '>About</h1>
    <div
      
           className='flex flex-col gap-34   justify-center   px-4  lg:flex-row md:gap-24   md:px-4 lg:px-24  min-h-screen  text-white    '>
       {cardsobj.map((item)=>(
         <motion.div
          ref={refcard}
          initial={{opacity:0,y:40}}
          animate={controls}
          transition={{duration:0.6,ease:"easeOut"}}

           key={item.id} className='bg-[#09090b] md:mx-24 lg:mx-0  md:h-fit  border  border-[#27272a]  hover:border-1 md:hover:border-yellow-400 hover: rounded-lg   cursor-pointer '>
         <ul className=' w-fit h-fit md:h-fit  justify-between items-center text-center  gap- '>
          <li className='text-white mt-[4vh]  md:px-6 lg:mt-[8vh]   mb-11 text-xl'>{item.title}</li>
          <p className='text-white rounded-lg  text-center py-4 md:px-6 xl:h-[24rem]  px-4 md:py-10  xl:px-12 bg-[#27272a]   text-base'>{item.description}</p>
         </ul>
         </motion.div>
       ))}
       


      
    </div>
       </>
  )
}

export default cards
