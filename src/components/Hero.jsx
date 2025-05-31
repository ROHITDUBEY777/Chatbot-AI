import {useState,useEffect,useRef} from 'react'
import Navbar from './Navbar';
import {   motion ,useAnimate,useAnimation,useInView } from 'framer-motion';
import image from "../assets/AI.jpg"



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
        <div id='Hero' className='min-h-screen bg-[#09090b]  w-full   '>
          

            <Navbar />
            <div className='flex flex-col  lg:flex-row px-4 w-fit  justify-between  md:px-10 mt-[36vh]'>

             <img src={image} className='rounded-lg  w-3/2 md:w-3/2 lg:w-1/2' />
            <motion.p
             ref={ref}
             initial={{opacity:0,y:20}}
             animate={{opacity:0.8 , y:0}}
             transition={{ duration:0.6 , ease : 'easeOut'}}
             
             className=' mt-[4vh] md:mt-[11vh] lg:text-base xl:text-xl  opacity-70  text-sm  md:text-base  text-center px-3    md:px-16 text-white ' >Welcome to our Chatbot AI - an intelligent, conversational assistant designed to provide instant, reliable, and human-like interactions. Built with advanced natural language processing (NLP) and machine learning technologies, this AI is capable of understanding context, answering questions, and assisting users in real-time across a wide range of topics.</motion.p>    
           
             </div>
    
        


           
            
           
   

        </div>
  )
} 

export default Hero
