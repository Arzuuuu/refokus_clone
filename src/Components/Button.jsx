import React from 'react'
// import { GoArrowRight } from "react-icons/go";
import { IoIosReturnRight } from 'react-icons/io';

function Button({title = "Start a Project"}) {
  return (
    <div className=' cursor-pointer min-w-36 text-black bg-zinc-100 rounded-full px-4 py-2 pb-2 flex items-center justify-between'>
         
        <span className='text-sm '>{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button