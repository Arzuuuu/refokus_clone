import React from 'react'
// import { GoArrowRight } from "react-icons/go";
import { IoIosReturnRight } from 'react-icons/io';

function Button() {
  return (
    <div className='min-w-36 text-black bg-zinc-100 rounded-full px-3 py-1 pb-1 flex items-center justify-between'>
         
        <span className='text-sm '>Start a Project</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button