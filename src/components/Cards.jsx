import React from 'react'
import cardsobj from "../info/cards.js";

const cards = () => {
  return (
    <>
     <h1 className='metalic-text text-white mt-[15vh] text-center text-6xl mb-8 '>About</h1>
    <div className='flex flex-col gap-24   px-4  lg:flex-row md:gap-16  md:px-24  min-h-screen  text-white    '>
       {cardsobj.map((item)=>(
         <div key={item.id} className='bg-[#09090b]   md:h-fit  border  border-[#27272a]  hover:border-1 md:hover:border-yellow-400 hover: rounded-lg   cursor-pointer '>
         <ul className=' w-fit h-fit md:h-fit  justify-between items-center text-center  gap-1 '>
          <li className='text-white mt-[4vh] md:px-6 lg:mt-[8vh]   mb-11 text-xl'>{item.title}</li>
          <p className='text-white rounded-lg  text-center py-4 md:px-6 xl:h-[24rem]  px-4 md:py-10  xl:px-12 bg-[#27272a]   text-base'>{item.description}</p>
         </ul>
         </div>
       ))}
       


      
    </div>
       </>
  )
}

export default cards
