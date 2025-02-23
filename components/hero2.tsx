"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Darkmode from "./Darkmode";
import Link from "next/link";

function Profile_Image() {
    return (
        <div className="relative w-[220px] h-[220px] flex items-center justify-center">
            {/* First two rotating layers */}
            <div className="absolute w-[205px] h-[205px] inset-0 rounded-full bg-white bg-[conic-gradient(from_0deg,rgba(0,0,0,0)_220deg,#f5f507)] animate-spin-slow" />
            {/* Nested element for scaling and rotating */}
            <div className="absolute -z-10 inset-0 w-[210px] h-[210px]">
                <div className="w-full h-full rounded-full bg-[conic-gradient(transparent_60%,#1e3a8a)] animate-spin-slow-reverse" />
            </div>

            {/* Profile Image */}
            <div className="relative w-[200px] h-[200px] overflow-hidden rounded-full bg-white ">
                <Image
                    src="/images/dp.jpg"
                    alt="Shubham Singh"
                    fill
                    className="object-cover border-2  border-b-gray-700"
                />
            </div>
        </div>
    );
}

function Text() {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="text-center mt-10"
      >
        <h1 className="text-4xl font-bold whitespace-nowrap  text-left bg-white dark:bg-slate-800">👋Hello, I'm</h1>
        <h1 className="text-4xl font-bold whitespace-nowrap text-left bg-white dark:bg-slate-800"> Shubham Singh</h1>
        <h2 className="text-2xl font-medium whitespace-nowrap text-left bg-white dark:bg-slate-800">Web & Android Developer</h2>
      </motion.div>
    );
  }

function Links({handleScroll,handleScroll2} : {handleScroll:()=>void,handleScroll2:()=>void}) {
    return(
        <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "fit-content", opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="w-fit flex flex-col justify-center items-center"
        >
            <div className="w-fit p-2 rounded-2xl flex flex-row items-center justify-center gap-7 whitespace-nowrap ">
                <div onClick={handleScroll} className="hover:border-b-2 hover:scale-105 transition-all cursor-pointer dark:bg-slate-800">
                    About Me
                </div>
                <div onClick={handleScroll2} className="hover:border-b-2 hover:scale-105 transition-all cursor-pointer dark:bg-slate-800">
                    Projects
                </div>
                <div onClick={handleScroll} className="hover:border-b-2 hover:scale-105 transition-all cursor-pointer dark:bg-slate-800">
                    Tech Stack
                </div>
                <div className="hover:border-b-2 hover:scale-105 transition-all cursor-pointer dark:bg-slate-800">
                    <Link href={"/contact"}>Contacts</Link>
                </div>
            </div>
            <Darkmode/>
        </motion.div>
    )
}


export default function Hero({handleScroll,handleScroll2} : {handleScroll:()=>void, handleScroll2:()=>void}){

    return (
        <div className=" h-screen w-screen flex flex-col justify-center items-center ">
            <div className="flex sm:flex-row flex-col-reverse items-center justify-center gap-3">
                <Text/>
                <Profile_Image/>
            </div>
            <Links handleScroll={handleScroll} handleScroll2={handleScroll2}/>
            
        </div>
    )
}