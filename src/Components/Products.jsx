import React from 'react'
import Product from './Product'

function Products() {
  var productData = [
    {
      ProductName: "Aqritel",
      ProductDescription:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live : true,
        Case : false
        
    },
    {
      ProductName: "Cula",
      ProductDescription:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        live : true,
        Case : false
    },
    {
      ProductName: "Layout Land",
      ProductDescription:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
        live : true,
        Case : false
    },
    {
      ProductName: "TTR",
      ProductDescription:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry friends and design",
        live : true,
       Case : false
        
    },
    {
      ProductName: "Singularity",
      ProductDescription:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
        live : true,
        Case : false
    },
    {
      ProductName: "Maniv",
      ProductDescription:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
        live : true,
        Case : false
         
    },
    {
      ProductName: "Like Magic",
      ProductDescription:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorshop of the 2022 Webflow Conference.",
        Case :true,
        live : true
        
    },
    {
      ProductName: "Silvr",
      ProductDescription:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
        live : true,
        Case : false
        
    },
    {
      ProductName : "Rainfall",
      ProductDescription:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      Case: true
    },

    {
      ProductName: "Intenseye",
      ProductDescription:
        "A brand new website for Intenseye just before their $64M Series.",
        live : true,
        Case : false
        
    },
    {
      ProductName: "RocketChat",
      ProductDescription:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
        live : true,
        Case : false
        
    },
  ];
  return (
    <div className='overflow-hidden mt-32'>
        {productData.map((val,index)=> <Product val={val}/>)}
    </div>
  )
}

export default Products