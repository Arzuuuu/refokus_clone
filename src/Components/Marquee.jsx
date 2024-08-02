import React from 'react'

function Marquee({imagesURLs}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {
            imagesURLs.map((url)=> <img src={url} className='w-[6vw] flex'/>)
        }
         
    </div>
  )
}

export default Marquee