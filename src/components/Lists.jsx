import React, { useState } from "react";
import List from "./List";
import { MdDescription } from "react-icons/md";
import { easeIn, motion} from "framer-motion"
import yahoo from "../assets/Video Files/yahoo.mp4"
import yir from "../assets/Video Files/yir.mp4"
import ttr from "../assets/Video Files/ttr.mp4"
import Rainfall from "../assets/Video Files/rainfall.mp4"
import arqitel from "../assets/Video Files/arqitel.mp4"

function Lists() {
  const Products = [
    {
      name: "Arquitel",
      Description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      case: true,
      website: true,
      hover: "hover:bg-violet-500",
    },
    {
      name: "TTR",
      Description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      case: false,
      website: true,
      hover: "hover:bg-teal-500",
    },
    {
      name: "YIR 2022",
      Description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      case: true,
      website: false,
      hover: "hover:bg-green-500",
    },
    {
      name: "Yahoo!",
      Description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion featuring holographic 3D models, an integrated web shop.",
      case: true,
      website: true,
      hover: "hover:bg-blue-500",
    },
    {
      name: "Rainfall",
      Description:
        "We crafted a website for Rainfall Ventures, custom code that ultimately allows their team to update content regularly and with ease.",
      case: true,
      website: true,
      hover: "hover:bg-orange-500",
    },
  ];
  const [pro, setpro] = useState(Products);

  const [pos,setpos]=useState(0)

  function animation(val){
    setpos(val*40);
  }
  

  return (
    <div  className="relative ">
      {pro.map((elem, index) => (
        <List pos={animation} val={index} key={index} list={elem} />
      ))}

    

      <div  className="absolute lg:flex md:flex hidden  h-full w-full pointer-events-none top-0">
        <motion.div initial={{y:"0"}} animate={{y:pos + `vh`}}  transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className="absolute window h-[40vh] w-[28vw] left-[30%] -translate-x-[-50%] overflow-hidden">
          <motion.div animate={{y: -pos+`vh`}}  transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className=" flex items-center scene window h-[40vh] w-[28vw] overflow-hidden">
          <video
              className="border-[3px] border-violet-200 h-[90%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div animate={{y: -pos+`vh`}}  transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className=" flex items-center scene window h-[40vh] w-[28vw] overflow-hidden">
          <video
              className="border-[3px] border-teal-200 h-[90%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div animate={{y: -pos+`vh`}}  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} className=" flex items-center scene window h-[40vh] w-[28vw] overflow-hidden">
          <video
              className="border-[3px] border-green-200 h-[90%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div animate={{y: -pos+`vh`}}  transition={{ ease:  [0.22, 1, 0.36, 1], duration: 0.5 }} className=" flex items-center scene window h-[40vh] w-[28vw] overflow-hidden">
          <video
              className="border-[3px] border-blue-200 h-[90%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div animate={{y: -pos+`vh`}}  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} className=" flex items-center scene window h-[40vh] w-[28vw] overflow-hidden">
          <video
              className="border-[3px] border-orange-200 h-[90%] w-full absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={Rainfall}
            ></video>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default Lists;
