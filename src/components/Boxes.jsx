import React from 'react'
import Box from './Box'

function Boxes() {
  return (
    <div className='px-4 flex gap-1 lg:py-10 max-w-screen-xl m-auto '>
        <Box para={true} book="Ratings" pro={false} width={"basis-1/3"} />
        <Box para={false} work="For Work" pro={true} width={"basis-2/3"}  />
    </div>
  )
}

export default Boxes