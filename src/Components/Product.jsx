import React, { useState } from "react";
import Button from "./Button";

function Product({val, mover, count}) {  
  const { ProductName, ProductDescription, live, Case } = val;



  return (
    <div onMouseEnter={()=>{mover(count)}} className="w-full h-[23rem] py-20 text-white  ">
      <div   className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <h1 className="text-6xl capitalize font-medium">{ProductName}</h1>
        <div className="w-1/3">
        <div className="ml-20">
        <p className="mb-10 ">{ProductDescription}</p>
          <div className="flex gap-5">
          {
            live && (<Button title="Live Website"/>) 
            
          }
          {
            Case && (<Button title="Case Study"/>)
          }
          </div>
        </div>
         
        </div>
      </div>
    </div>
  );
}


export default Product;
