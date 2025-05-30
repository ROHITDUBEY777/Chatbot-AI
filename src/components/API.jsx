import React,{useState,useEffect} from 'react'
import { motion  } from 'motion/react';
import axios from 'axios';
"use client"




const API = () => {
  const[input ,setinput] = useState(" ");
  const[reply,setreply] = useState( " ");
  const[loading,setLoading] = useState( false ); 
  



  const handlesubmit = async (e) => {
  e.preventDefault();
   setLoading(true);
   if(loading) return  LoadingThreeDotsJumping()
   const res = await askGemini(input);
 
   setreply(res);
   
   setLoading(false);

  }
  
  function LoadingThreeDotsJumping() {
    const dotVariants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}
async function askGemini(input) {
  

 if(!input.trim())  return ;
 setinput(""); //clears the input after sending
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
    <div className='flex flex-row justify-center min-h-screen '>
      
    <div className='flex flex-col  w-2/3  h-fit   my-10     text-white rounded-xl    px-16 py-10  bg-[#57534e]'>
      {reply && (
        <div className='mt-[4vh] p-4bg-[#57534e] rounded shadow '>
          <h1 className='text-xl mb-2'>Ask anything, we’ve got answers.</h1>
          <h2 className='text-base font-bold text-white  mb-2 ' > Response : </h2>
          <p className='text-white text-sm py-4 '>{reply}</p>
          </div>
      )}
      <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between '>

      <input type="text"  placeholder='Ask a question ' 
        value={input}
        onChange={(e)=> setinput(e.target.value)}
        className='w-full text-white border bg-[#334155] mt-[2vh] px-4 py-2 '  />
        <motion.button type='button' whileTap={{scale:1.1}}  onClick={handlesubmit} className='mt-[2vh] bg-blue-600 border text-white px-3  w-fit md:w-1/3 '> {loading ? "Thinking....." : "Search"}  </motion.button>
        </div>
    </div>
        </div>
  )
}

export default API
