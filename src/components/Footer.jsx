import React from 'react'

function Footer() {
    const socials =["Instagram" , "Facebook" , "Youtube" , "Twitter"];
    const sitemaps =["Home", "Carrers" , "Work" , "About"];
    const policy =["Terms","Conditions", "Policy"]

  return (
    <div className='max-w-screen-xl mx-auto flex justify-between py-5 px-2 mt-10 lg:flex-row flex-col'>
        <h1 className='font-bold text-7xl text-center lg:text-[10vw]'>Refokus.</h1>
        <div className='flex gap-2 lg:pt-0 pt-10 lg:mx-0 mx-auto flex-row lg:flex-col'>
            <h3 className='font-medium pb-6'>Socials</h3>
          {socials.map((elem,key)=><h5 key={key} className='font-medium text-zinc-500'>{elem}</h5>)}
        </div>
        <div className='flex gap-2 lg:pt-0 pt-2 lg:mx-0 mx-auto flex-row lg:flex-col '>
            <h3 className='font-medium pb-6'>Sitemaps</h3>
          {sitemaps.map((elem,key)=><h5 key={key} className='font-medium text-zinc-500'>{elem}</h5>)}
        </div>
        <div className='lg:w-1/5 text-center pt-3 border-zinc-500 border-t-[1px] lg:border-none'>
            <h4 className='lg:text-right font-medium lg:font-semibold lg:text-base text-sm'>Refokus is pioneering digital agency driven by design and empowered by technology.</h4>
           <div className='flex flex-row gap-3 lg:mt-16 pt-3 text-zinc-500 font-semibold justify-center  lg:justify-end'>
           {policy.map((elem,key)=><h3 key={key} className=''>{elem}</h3>)}
           </div>
        </div>
        
    </div>
  )
}

export default Footer