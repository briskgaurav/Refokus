import { motion } from 'framer-motion';
import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";


function Button({title="Get Started"}) {
  return (
    <motion.div whileHover={{
      scale:1.1, transition: {duration: .2}
    }}  whileTap={{ scale: 0.9 }}
    className='flex max-h-12 items-center gap-5 justify-center text-black px-4 lg:px-6 rounded-full py-2 bg-[#F4F4F5]'>
        <motion.h5 className='text-center text-sm font-medium'>{title}</motion.h5>
        <MdSubdirectoryArrowRight />
    </motion.div>
  )
}

export default Button