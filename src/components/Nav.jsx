import React from "react";
import Button from "./Button";
import { easeIn, motion } from "framer-motion";

function Nav() {
  
  return (
    <motion.div
    initial={{y:"-15vh"}} animate={{y:"0"}}  transition={{ ease:  [0.22, 1, 0.36, 1], duration: 1.5 }} 
    
    className="select-none border-b-[1px] border-zinc-600 max-w-screen-xl px-4 py-5 m-auto flex items-center justify-between">
      <div className="flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className='lg:flex xl:flex items-center gap-12 font-normal ml-32 text-sm hidden'>
          {["Home", "Work", "Carrer", "", "News"].map((elem, index) => (
            <motion.a 
            whileHover={{ fontWeight:"900", transition:{duration:.2, ease:easeIn} }} 
             key={index} className="flex items-center gap-3" href="#">
              {index === 1 && (
                <span className="glow inline-block h-[5px] w-[5px] bg-green-500 rounded-full">
                  {" "}
                </span>
              )}
              {elem.length === 0 && (
                <span className="h-6 w-[1px] bg-zinc-600"></span>
              )}
              {elem}
            </motion.a>
          ))}
        </div>
      </div>

      <Button />
    </motion.div>
  );
}

export default Nav;
