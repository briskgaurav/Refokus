import React, { useState } from 'react'
import { motion,useScroll } from "framer-motion"



function Hero() {
 

  const [data, setData]= useState([
    {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", left:"50%",top:"50%" , isActive:false},
    {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", left:"43%",top:"55%" , isActive:false},
    {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", left:"52%",top:"58%" , isActive:false},
    {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", left:"44%",top:"63%" , isActive:false},
    {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", left:"50%",top:"66%" , isActive:false},
    {img:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" ,left:"55%",top:"72%" , isActive:false},
]);

const { scrollYProgress }=useScroll()
 
scrollYProgress.on("change",(data)=>{
  function imagesShow(arr){
    setData(elem=>(
      elem.map((item,index)=>(
        arr.indexOf(index)===-1 ?({...item,isActive:false}) : {...item,isActive:true}
      ))
    ))

  }
  

  switch(Math.floor(data*100)){
    case 0:
      imagesShow([]);
      break;
    case 1:
      imagesShow([0]);
      break;
    case 2:
      imagesShow([0,1]);
      break;
    case 3:
      imagesShow([0,1,2]);
      break;
    case 4:
      imagesShow([0,1,2,3]);
      break;
    case 5:
      imagesShow([0,1,2,3,4]);
      break;
    case 6:
      imagesShow([0,1,2,3,4,5]);
      break;
  }
})



  return (
   
    <div className='relative flex m-auto py-24 lg:py-0 items-center justify-center'>
        <motion.h1 initial={{opacity:"0%"}} animate={{opacity:"100%"}} transition={{ease:  [0.22, 1, 0.36, 1], duration:1, delay:.8}} className= 'select-none tracking-tighter font-medium text-[32vw] lg:text-[27vw]'>WORK</motion.h1>
        <div className=' top-0'>
      {data.map((elem,index)=>(

        elem.isActive && <img key={index} className='absolute w-44 lg:w-56 rounded-xl -translate-x-[50%] -translate-y-[50%]' style={{top:elem.top,left:elem.left}} src={elem.img}></img>
        
      ))}
    </div>
    </div>
   
  )
}

export default Hero