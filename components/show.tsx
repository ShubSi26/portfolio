"use client";
import React from "react";
import Image from "next/image";


export default function Show({src,text,className}:{src:string,text:string,className?:string}) {
    const [show, setShow] = React.useState(false);
  
    return (
      <div
        className={"flex items-center " + className}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Image
          src={src}
          width={30}
          height={30}
          className=""
          alt="github"
        />
        <div
          className={`whitespace-nowrap transition-all duration-1000 ease-in-out overflow-hidden ${show ? 'max-w-xs opacity-100' : 'max-w-0 h-0 opacity-0'}`}
        >
          {text}
        </div>
      </div>
    );
  }