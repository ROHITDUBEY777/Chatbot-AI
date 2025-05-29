import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";


const API = () => {
    const [chat, setchat] = useState(false);
    const [text,settext] = useState(false);

    useEffect(() => {
        const fetchData = async ({text}) => {
            try {
                const GEMINI_API_KEY = "AIzaSyCol1Nx4wiUbxhZC_CoWW2TTsXN-EZgAC0";
                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            contents: [
                                {
                                    parts: [
                                        {
                                            text: " "
                                        }
                                    ]
                                }
                            ]
                        }),
                    }
                );
                if (!response.ok) throw Error('Did not receive the expected code');
                const data = await response.json();
                console.log(data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    
    }, []);



  return (
   
    <div className='flex flex-row px-10 mb-4 gap-4'>

   <input type="text " placeholder='Ask a question ' className='text-white   px-4' />
    <motion.button whileHover={{scale:1.1}} whileTap={{scale:1.2}} className='bg-white rounded-md text-2xl px-2 py-2 '
    
    > Generate </motion.button>
      

        
      
    </div>
  )
}

export default API
