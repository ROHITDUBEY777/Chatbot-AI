import {useState,useEffect,useRef} from 'react'
import Navbar from './Navbar';
import {   motion ,useAnimate,useAnimation,useInView } from 'framer-motion';
import Ai from "../assets/AI.jpg"



const  Hero = () => {

    const ref = useRef(null);
    const [prevscroll,setprevscroll] = useState( 0 );
    const [scrollingdown,setscrollingdown] = useState(false);
    
    const inview = useInView(ref,{once:true,amount:0.5});
    const controls = useAnimation();

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

    return (
        <div  className=' min-h-screen  w-full    '>
          

            <Navbar />
            <motion.h1 
            initial = {{opacity:0,y:20}}
            animate = {{opacity:1,y:0}}
            transition={{duration : 0.5 , ease : "easeOut"}}
            className='metalic-text text-white text-3xl  font-bold opacity-80 md:text-6xl text-center  mt-[32vh]'>CHATBOT   </motion.h1>
            <div className='flex flex-col  lg:flex-row px-4 w-full  justify-between  md:px-10 mt-[6vh]'>
            
             <motion.img 
              initial = {{opacity : 0 , y:20 }}
              animate = {{opacity:1,y:0}}
              transition={{duration : 0.5 , ease : "easeOut"}}
              src={Ai} className='rounded-lg bg-[#f5f5f5]  w-3/2 md:w-3/2 lg:w-1/2' />
            <motion.p
             ref={ref}
             initial={{opacity:0,y:20}}
             animate={{opacity:0.8 , y:0}}
             transition={{ duration:0.6 , ease : 'easeOut'}}
             
             className=' mt-[4vh] md:mt-[11vh] lg:text-base xl:text-xl    opacity-70  text-sm  md:text-base  text-center px-3    md:px-16 text-white ' >Welcome to our Chatbot AI - an intelligent, conversational assistant designed to provide instant, reliable, and human-like interactions. Built with advanced natural language processing (NLP) and machine learning technologies, this AI is capable of understanding context, answering questions, and assisting users in real-time across a wide range of topics.</motion.p>  
             
             </div>
             


           
            
           
   

        </div>
  )
} 

export default Hero
