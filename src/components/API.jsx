import {useState,useEffect,useRef} from 'react'
import {  easeIn, inView, motion,useAnimation , useInView  } from 'framer-motion';
import axios from 'axios';
import { IoSend } from "react-icons/io5";

"use client"




const API = ({darkMode }) => {
  const[input ,setinput] = useState("");
  const[reply,setreply] = useState( " ");
  const[loading,setLoading] = useState( false ); 

  const reftext = useRef(null);
  const refcard = useRef(null);
  const[prevscroll,setprevscroll] = useState(0);
  const[scrollingdown,setscrollingdown] = useState(false);
  const inViewText = useInView(reftext , {once: true,amount: 0.5});
  const inViewcard = useInView(refcard , {once: true,amount: 0.5});
  const controlstext = useAnimation();
  const controlscard = useAnimation();


  useEffect(()=>{
    const handlescroll = () => {
    const current = window.scrollY;
    setscrollingdown(current > prevscroll );
    setprevscroll(current);
    }
   window.addEventListener('scroll',handlescroll);

   return () => window.removeEventListener('scroll',handlescroll);
    
  },[prevscroll])

  useEffect(()=>{
    if(inViewText && scrollingdown){
      controlstext.start({opacity: 0.8 , y: 0})
    }
    if(inViewcard && scrollingdown ){
      controlscard.start({opacity: 1, y: 0})
     
    }
  },[inViewcard,inViewText, scrollingdown,controlstext,controlscard])



  const handlesubmit = async (e) => {

   
   if(input === "" ){
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
  return "Oops! something went wrong " ;
  
 }
}

 

  return (
    <div id='service' className={` flex  flex-col w-full items-center  ${darkMode?"text-white":"text-black"}   mt-[15vh]   justify-center min-h-screen `}>
      <div className='items-center justify-center  w-full '>
    <motion.h1 

     initial={{opacity:0,y:40}}
     animate={{opacity:1,y:0}}
     transition={{duration:1,ease:"easeOut"}}
    className={`poppins flex text-5xl text-center mx-4 mb-10   justify-center `}>Chat smarter with us.</motion.h1> 
    <motion.p 
     ref={reftext}
     initial = {{opacity:0 , y: 40}}
     animate={controlstext}
     transition={{duration:1,ease: "easeOut"}}
    className='poppins  flex  mb-6 text-base opacity-80 md:mx-10   md:px-8 md:w-fit md:text-xl lg:text-2xl text-center '>Start a conversation with your AI assistant - fast, simple, and smart answers await.</motion.p>

    <motion.div 
     ref={refcard}
     initial= {{opacity: 0 , y: 40}}
     animate={controlscard}
     transition={{duration:1,ease: "easeOut"}}
    
    className={`flex flex-col w-full px-6  mx-       justify-center md:w-[41rem] md:mx-15 lg:w-9/10   ${darkMode?"text-white  hover:border-yellow-400  bg-[#1e293b]":"text-black bg-[#fafaf9]"} hover:border-1  z-10   py-6 border    mb-8 md:px-16 md:py-10     rounded-xl     `}>
      {reply && (
        <div className='mt-[4vh]   rounded shadow '>
          <h1 className='text-base md:text-xl mb-2'>Ask anything, we’ve got answers.</h1>
          <h2 className='text-base    ' > Response : </h2>
         
          <p className='md:text-base text-base py-4  '>{"Thinking" ? reply : "loading"}</p>
        
          </div>
      )}
      <form onSubmit={(e)=>handlesubmit(e.preventDefault())}>
      <div className='flex flex-col md:flex-row md:gap-8 lg:flex-row xl:flex-row  '>

      <input type="text" placeholder='Ask a question ' 
        value={input}
        onChange={(e)=> setinput(e.target.value)}
        className='text-base text-black border bg-[#c4b5fd] w-full md:w-[42rem] mt-[2vh] px-4 py-2 '  />
        <motion.button type='button' whileTap={{scale:1.1}} onClick={(e)=>handlesubmit(e.preventDefault())} className='mt-[3vh] rounded-full border  hover:shadow-lg  hover:shadow-yellow-500/50 transition-all duration-300 ease-in-out  hover:bg-yellow-400  hover:text-black cursor-pointer px-4 py-2 md:py-3 text-xl  w-full md:w-1/6 '> {loading ? "Thinking....." : "Search"}  </motion.button>
        </div>
        </form>
    </motion.div>
        </div>
        </div>
  )
}

export default API
