import React from "react";

function Work() {
  var images = [
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "64%",
      left: "34%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "36%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "65%",
      left: "32%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "36%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "70%",
      left: "33%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "68%",
      left: "38%",
      isActive: false,
    },
  ];
  return (
    <div className=" relative w-full overflow-hidden">
      <div className="max-w-[1290px] mx-auto text-center ">
        <h1 className="text-[30vw] leading-none tracking-tight font-medium select-none">
          work
        </h1>
        <div className="absolute w-full h-full top-0 ">
          {images.map((elem, index) => {
            return (
              elem.isActive && (<img
                key={index}
                src={elem.url}
                className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                style={{
                  top: elem.top,
                  left: elem.left,
                }}
              />)
            );
          })}
        </div>
      </div>
      <div className="text-zinc-400 text-lg flex items-center justify-center p-4">Web Design, Webflow Development, Creative Development</div>
    </div>
  );
}

export default Work;
