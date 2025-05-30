import React from 'react'

import Navbar from './Navbar';
import Parallax from './page';




const Hero = () => {
    

    return (
        <div id='Hero' className='  w-full   '>
          

            <Navbar />

            <p className=' mt-[11vh] lg:text-xl opacity-70 xl:absolute xl:text-xl md:text-base  text-center px-3 lg:px-16 xl:px-16    md:px-16 text-white ' >Welcome to our Chatbot AI — an intelligent, conversational assistant designed to provide instant, reliable, and human-like interactions. Built with advanced natural language processing (NLP) and machine learning technologies, this AI is capable of understanding context, answering questions, and assisting users in real-time across a wide range of topics.</p>    
           
    
        

            <Parallax />
        


         

           
            
           
   

        </div>
  )
} 

export default Hero
