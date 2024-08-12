import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import './HoverEffect.css';

function Card({ width, start, para }) {
  return (
    <div
      className={`bg-zinc-800 p-5 hover:${para? "bg-red-600" : "bg-violet-600"} rounded-xl ${width} min-h-[27rem] flex flex-col justify-between transition-all duration-300`}
    >
      <div className="w-full hover-effect">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm">{para? "Up Next: News" : "Get In Touch"}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{para? "Insights and behind the scenes" : "Let's get to it, together."}</h1>
      </div>

      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none hover-effect">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm flex items-self text-zinc-400 font-medium mt-5">
             Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
