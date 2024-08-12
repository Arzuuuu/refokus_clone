import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var productData = [
    {
      ProductName: "Aqritel",
      ProductDescription:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm",
    },
    {
      ProductName: "Cula",
      ProductDescription:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm",
    },
    {
      ProductName: "Layout Land",
      ProductDescription:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm",
    },
    {
      ProductName: "TTR",
      ProductDescription:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry friends and design",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm",
    },
    {
      ProductName: "Singularity",
      ProductDescription:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-169.webm",
    },
    {
      ProductName: "Maniv",
      ProductDescription:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/maniv-169.webm",
    },
    {
      ProductName: "Summon",
      ProductDescription:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorshop of the 2022 Webflow Conference.",
      Case: true,
      live: true,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/summon-169.webm",
    },
    {
      ProductName: "Silvr",
      ProductDescription:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/silvr-169.webm",
    },
    {
      ProductName: "Rainfall",
      ProductDescription:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      Case: true,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/rainfall-169.webm",
    },

    {
      ProductName: "Intenseye",
      ProductDescription:
        "A brand new website for Intenseye just before their $64M Series.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/intenseye-169.webm",
    },
    {
      ProductName: "RocketChat",
      ProductDescription:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      Case: false,
      vid_link:
        "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/rocketchat-169.webm",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="overflow-hidden mt-32 relative ">
      {productData.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
          // transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] left-[50%]   overflow-hidden  "
        >
          {productData.map((val, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
              className="my-20 mt-4"
            >
              <video
                src={val.vid_link}
                autoPlay
                loop
                muted
                className="w-fullh-full rounded-lg overflow-hidden bg-red-200  "
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
