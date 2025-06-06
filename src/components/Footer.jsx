import React,{useEffect} from 'react'

const Footer = ({darkMode}) => {
  
  useEffect(()=>{
    if(darkMode)
    {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  })
 

  return (
    <>
    <div id='Contact' className={`w-full mt-[11vh] backdrop-blur-xl z-50 text-center py-3`}>
      <p className={` ${darkMode ? "text-white":"text-black"} text-base`}> powered by Chatbot </p>
    </div>
  
    </>
  )
}


export default Footer
 