import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Box({ width, para, pro,work="Reviews", book="Book Now"}) {
  return (
    <div className={`${width} hover:bg-violet-700 hover:lg:p-6 ease-in-out duration-500 bg-zinc-800 max-h-[64vh] rounded-xl p-3 lg:p-5 gap-5`}>
      <div className="mb-5 lg:text-sm text-xs lg:font-medium flex items-center justify-between">
        <h5 className="font-medium">{work}</h5>
        <FaArrowRightLong />
      </div>
      <h2 className="font-semibold pb-5 text-md lg:text-4xl">{book}</h2>
      {pro &&
        <>
          <h1 className="py-4 lg:text-6xl text-xl lg:mt-32 lg:mb-11 font-semibold">
            Start a project
          </h1>
          <button  className="px-4 lg:px-6 hover:bg-violet-400 py-2 text-xs lg:text-lg font-medium border-white border-[1px] rounded-full">
            contact us
          </button>
        </>
      }
      {para && <p className="text-[2.4vw] lg:text-sm mt-16 lg:mt-64 ">Our Work, Your Choice :)</p>}
    </div>
  );
}

export default Box;
