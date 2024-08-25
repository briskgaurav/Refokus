import React from "react";
import Button from "./Button";
import { animate } from "framer-motion";

function List({ list, pos, val }) {
  return (
    <div
      onMouseEnter={() => {
        pos(val);
      }}
      className={`select-none border-b-[1px] ${list.hover}  border-zinc-600  lg:border-none ease-linear duration-100 lg:py-16 py-6 h-[40vh] max-w-full-xl m-auto px-4 lg:px-40 flex items-center flex-col lg:flex-row justify-between`}
    >
      <h1 className="lg:text-5xl text-6xl my-auto font-bold">{list.name}</h1>
      <div className="lg:w-1/3 w-full">
        <p className="mt-4  text-center lg:text-justify">{list.Description}</p>
        <div className="flex item-center gap-10 mt-10 justify-center">
          {list.website && <Button title="Visit Website" />}
          {list.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
}

export default List;
