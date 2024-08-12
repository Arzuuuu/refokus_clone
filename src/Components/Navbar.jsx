import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <div className="max-w-[1290px] mx-auto pt-4 py-4 pt-10 flex justify-between items-center border-b-2 border-zinc-700">
      <div className="flex">
      <img
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "About", "Careers", "", "News"].map((elem, index) => (
          <a key={index} className="text-sm flex items-center gap-1" href="#">
            {index === 1 && (
              <span
                style={{ boxShadow: "0 0 0.45em #00FF19" }}
                className="inline-block w-1 h-1 bg-green-400 rounded-full "
              ></span>
            )}
             
             {(elem.length===0) &&
            <span className="w-[2px] h-7 bg-zinc-700"></span>}
             
            {elem}
          </a>
        ))}
      </div>
      </div>
      <div className="mr-4">
        <Button/>
      </div>
    </div>
  );
}

export default Navbar;
