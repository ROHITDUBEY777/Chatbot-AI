import React,{useState,useEffect} from 'react'
import { motion  } from 'motion/react';
import axios from 'axios';
"use client"




const API = () => {
  const[input ,setinput] = useState(" ");
  const[reply,setreply] = useState( " ");
  const[loading,setLoading] = useState( false ); 
  



  const handlesubmit = async (e) => {

   
   if(input === " " ){
     alert('Please ask a question before searching');
    e.preventDefault();
   }
  
  
   setLoading(true);
 
   const res = await askGemini(input);
 
   setreply(res);
   
   setLoading(false);

  }
  
async function askGemini(input) {
  

 if(!input.trim())  return ;
 setinput(""); //clears the input after sending
 setreply( " "); //clears the answer after sending
 try{
  const response  = await axios({url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY }`,
method:"POST",
   data:{
    contents: [{
       parts : [{
        text:input,
       }]
     }],
   },
});
return response.data.candidates[0].content.parts[0].text;

 }
 catch(err){
  console.error("Gemini Error",err);
  return "Oops! something went wrong" ;
  
 }
}

  return (
    <div className='flex  flex-col w-full items-center font-Poppins  border-white justify-center min-h-screen '>
      <div className='items-center justify-center  w-full '>

    <motion.p className='poppins flex  mb-4 text-base opacity-80 md:mx-10  md:px-8 md:w-fit md:text-xl lg:text-2xl text-center text-white'>Start a conversation with your AI assistant - fast, simple, and smart answers await.</motion.p>

    <div className='flex flex-col w-full    justify-center md:w-[41rem] md:mx-15 lg:w-9/10  px-4     py-6    mb-8 md:px-16 md:py-10     text-white rounded-xl     bg-[#1e293b]'>
      {reply && (
        <div className='mt-[4vh] p-4 rounded shadow '>
          <h1 className='text-base md:text-xl mb-2'>Ask anything, we’ve got answers.</h1>
          <h2 className='text-base  text-white   ' > Response : </h2>
          <p className='text-white md:text-base text-xs py-4 '>{reply}</p>
          </div>
      )}
      <div className='flex flex-col md:flex-row md:gap-8 lg:flex-row xl:flex-row justify-between '>

      <input type="text"  placeholder='Ask a question ' 
        value={input}
        onChange={(e)=> setinput(e.target.value)}
        className='text-base text-black border bg-[#c4b5fd] w-full md:w-[42rem] mt-[2vh] px-4 py-2 '  />
        <motion.button type='button' whileTap={{scale:1.1}} onClick={(e)=>handlesubmit(e.preventDefault())} className='mt-[3vh]  border hover:bg-[#09090b] hover:text-white cursor-pointer text-white px-4 py-3 md:py-3   w-full md:w-1/4 '> {loading ? "Thinking....." : "Search"}  </motion.button>
        </div>
    </div>
        </div>
        </div>
  )
}

export default API
