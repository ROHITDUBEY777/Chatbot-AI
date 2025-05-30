import React,{useState,useEffect} from 'react'
import { motion  } from 'motion/react';
import axios from 'axios';


const API = () => {
  const[input ,setinput] = useState(" ");
  const[reply,setreply] = useState( " ");
  const[loading,setLoading] = useState( false ); 

  const handlesubmit = async () => {
   setLoading(true);
   const res = await askGemini(input);
   setreply(res);
   setLoading(false);

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
    <div className='flex flex-col w-[32rem] px-16  justify-center  rounded-md bg-[#d4d4d8]'>
      {reply && (
        <div className='mt-[4vh] p-4 bg-[#d4d4d8] rounded shadow '>
          <h2 className='text-lg font-bold text-black  mb-2 ' >Gemini's Response : </h2>
          <p className='text-black'>{reply}</p>
          </div>
      )}
      <div className='flex flex-row gap-10 '>

      <input type="text"  placeholder='Ask a question ' 
        value={input}
        onChange={(e)=> setinput(e.target.value)}
        className='w-full text-black border bg-[#d4d4d8] px-4 py-2 '  />
        <motion.button type='button' whileHover={{scale:1.1}}  onClick={handlesubmit} className='bg-blue-600 border text-black w-full '> {loading ? "Thinking....." : "Search"}  </motion.button>
        </div>
    </div>
  )
}

export default API
