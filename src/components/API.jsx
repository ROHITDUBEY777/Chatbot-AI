import React,{useState,useEffect} from 'react'
import { motion  } from 'motion/react';
import axios from 'axios';
"use client"




const API = () => {
  const[input ,setinput] = useState(" ");
  const[reply,setreply] = useState( " ");
  const[loading,setLoading] = useState( false ); 
  



  const handlesubmit = async (e) => {

   
   if(input === " " ) alert('Please ask a question before searching');
   e.preventDefault();
  
  
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
    <div className='flex flex-row justify-center min-h-screen '>
      
    <div className='flex flex-col w-1/1 px-4 mx-4  py-6 md:min-w-2/3  h-full  md:my-10 md:mx-10 lg:mx-23    text-black rounded-xl    md:px-10 md:py-10  bg-[#facc15]'>
      {reply && (
        <div className='mt-[4vh] p-4bg-[#57534e] rounded shadow '>
          <h1 className='text-base md:text-xl mb-2'>Ask anything, we’ve got answers.</h1>
          <h2 className='text-base  text-black  mb-2 ' > Response : </h2>
          <p className='text-black text-sm py-4 '>{reply}</p>
          </div>
      )}
      <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between '>

      <input type="text"  placeholder='Ask a question ' 
        value={input}
        onChange={(e)=> setinput(e.target.value)}
        className='text-base text-black border bg-[#334155] w-full mt-[2vh] px-4 py-2 '  />
        <motion.button type='button' whileTap={{scale:1.1}}  onClick={handlesubmit} className='mt-[2vh] bg-blue-600 bordertext-black px-3  w-full md:w-1/3 '> {loading ? "Thinking....." : "Search"}  </motion.button>
        </div>
    </div>
        </div>
  )
}

export default API
