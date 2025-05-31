import React from 'react'
import cardsobj from "../info/cards.js";

const cards = () => {
  return (
    <>
     <h1 className='metalic-text text-white text-center text-6xl mb-8 '>About</h1>
    <div className='flex flex-row gap-16  px-24  min-h-screen  text-white    '>
       {cardsobj.map((item)=>(
         <div key={item.id} className='bg-[#09090b] py-18 h-[32rem] border border-gray-100 hover:border-yellow-400 rounded-lg   cursor-pointer '>
         <ul className=' w-fit h-full justify-between items-center text-center  gap-1 '>
          <li className='text-white mb-11 text-xl'>{item.title}</li>
          <p className='text-white  text-center py-8 px-16 bg-[#27272a]  h-full text-sm'>{item.description}</p>
         </ul>
         </div>
       ))}
       


      
    </div>
       </>
  )
}

export default cards
