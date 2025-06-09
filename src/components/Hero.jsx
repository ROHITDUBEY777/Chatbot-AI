import {useState,useEffect,useRef} from 'react'
import Navbar from './Navbar';
import {   motion ,useAnimation,useInView } from 'framer-motion';
import Ai from "../assets/AI.jpg"
import { Behavior } from '@google/genai';
import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";


const  Hero = ({darkmode,setdarkmode}) => {

    const ref = useRef(null);
    const [prevscroll,setprevscroll] = useState( 0 );
    const [scrollingdown,setscrollingdown] = useState(false);
    
    const inview = useInView(ref,{once:true,amount:0.5});
    const controls = useAnimation();

    const textref = useRef();

    gsap.registerPlugin(TextPlugin);

    useEffect(()=>{
     const t1 = gsap.timeline({defaults:{ease:"bounce.out",duration:0.8}});
     t1.to(textref.current ,{
        scale:1.2,
        rotate:5,
        color:"#facc15",
     })
     .to(textref.current , {
        text:"Ready to use it? then press get started ",
        ease:"power1.inOut",
        duration:2,
     })
     .to(textref.current,{
        scale:1,
        rotate:0,
        color:"#10b981",
     })
        },[])
    useEffect(()=>{
        const handlescroll = ()=>{
             const current  = window.scrollY;
             setscrollingdown(current > prevscroll );
             setprevscroll(current);
        }

        window.addEventListener('scroll' ,handlescroll );

        return () => window.removeEventListener('scroll',handlescroll);

    },[prevscroll]);


    useEffect(()=>{
        if(inview && scrollingdown ){
            controls.start({ opacity:0.8, y:0.6 });
        }

    },[inview,scrollingdown,controls]);
    
    const handlescroll2 = (id) =>{
        const element = document.getElementById(id);
        if(element)
        {
            element.scrollIntoView({behavior:"smooth"})
        }
    }

    return (
        <div  id='Home'  className={`min-h-screen  w-full ${darkmode?"text-white":"text-black opacity-100"}        `}>
          
       
            
            <Navbar darkmode={darkmode} setdarkmode={setdarkmode}/>
          
            <motion.h1
            initial = {{opacity:0,y:20}}
            animate = {{opacity:1,y:0}}
            transition={{duration : 1 , ease : "easeOut"}}
            ref={textref} 
            className={`poppins  text-5xl px-4  font-bold opacity-80 md:text-5xl  text-center  mt-[32vh]`}>CHATBOT   </motion.h1>
            <div className='flex flex-col  lg:flex-row px-4 w-full  justify-between  md:px-10 mt-[6vh]'>
            
             <motion.img 
              initial = {{opacity : 0 , y:20 }}
              animate = {{opacity:1,y:0}}
              transition={{duration : 1 , ease : "easeOut"}}
              src={Ai} className='rounded-lg z-10  w-3/2 md:w-3/2 lg:w-1/2' />
              <div className='flex flex-col items-center gap-4   '>

            <motion.p
             ref={ref}
             initial={{opacity:0,y:20}}
             animate={{opacity:0.8 , y:0}}
             transition={{ duration:1 , ease : 'easeOut'}}
             
             className={` mt-[4vh] md:mt-[11vh] lg:text-xl xl:text-xl    text-base  md:text-xl text-center px-3    md:px-16 `} >Welcome to our Chatbot AI - an intelligent, conversational assistant designed to provide instant, reliable, and human-like interactions. Built with advanced natural language processing (NLP) and machine learning technologies, this AI is capable of understanding context, answering questions, and assisting users in real-time across a wide range of topics.</motion.p>  
                   <motion.button onClick={()=>handlescroll2('service')}
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1,ease:"easeOut"}}
                   whileTap={{scale:1.2 }} className={`w-fit px-8     justify-center  hover:bg-yellow-400  hover:text-black md:text-base lg:text-xl rounded-full  md:flex  opacity-70  hover:opacity-100 border cursor-pointer    py-2 `}>
                                   
                                          {`Get Started  ->`}
                                         </motion.button>   
             </div>
             </div>
             


           
            
           
   

        </div>
  )
} 

export default Hero
