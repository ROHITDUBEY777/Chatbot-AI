import React from 'react'
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Parallax from './page';




const Hero = () => {
    

    return (
        <div id='Hero' className='border mt-[16vh]'>
          

            <Navbar />
  <p className='text-xl absolute text-white text-center  px-16 mt-[6vh]'>Welcome to our Chatbot AI — an intelligent, conversational assistant designed to provide instant, reliable, and human-like interactions. Built with advanced natural language processing (NLP) and machine learning technologies, this AI is capable of understanding context, answering questions, and assisting users in real-time across a wide range of topics.</p>
           
            <Parallax />
           
   

        </div>
  )
} 

export default Hero
