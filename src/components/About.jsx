import React from 'react'

import aboutobj from '../info/about';
import botImg from "../assets/bot.webp";
import { motion ,  } from 'framer-motion';

const About = () => {
  return (
    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row justify-center items-center  px-3 xl:px-10 w-full xl:justify-between'>
          
          <div className='flex flex-col py-4 '>

        {aboutobj.map((item)=>(
            <div key={item.id}>
           <li key={item.id} className='flex flex-col px-1 items-center    gap-4'>
            <div className='flex flex-col w-fit px-2 py-2 rounded-lg mb-4 bg-[#334155] text-xl text-white '>
            
           <p className='text-base'>{item.description}</p>
           </div>
          





           </li>
          

            </div>
        ))}
        </div>
          <div className=''>

           <img className='justify-center'
           src={botImg}>

           </img>
               </div>
            

      
    </div>
  )
}

export default About;
