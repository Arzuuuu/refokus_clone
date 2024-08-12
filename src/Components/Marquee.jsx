import React from 'react';
import "./Marquee.css";

function Marquee({ imagesURLs, reverse }) {
  return (
    <div className="marquee">
      <div className={`marquee-content ${reverse ? 'reverse' : ''} flex w-full py-8 gap-20 whitespace-nowrap  `} data-content={imagesURLs.map((url, index)=><img key={index} src={url} className='marquee-item'/>)}>
        {imagesURLs.map((url, index) => (
          <img src={url} className='marquees-item w-[6vw] flex' key={index} alt={`Marquee item ${index}`} />
        ))}
        {imagesURLs.map((url, index) => (
          <img src={url} className='marquees-item w-[6vw] flex' key={index} alt={`Marquee item ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Marquee;
