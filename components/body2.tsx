'use client';
import { motion } from "framer-motion"
import { useState } from "react";
import Link from "next/link";

export default function Body(){
    const [flag,setflag] = useState(true);
    return(
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
            >
            <div className="sm:px-32 font-roboto">
                <h1 className="backdrop-blur-lg text-center sm:text-left bg-white/50 font-bold text-black dark:bg-slate-800 dark:text-slate-100 text-4xl sm:w-fit">
                    About Me
                </h1>
                <div className="backdrop-blur-lg bg-white/50 text-slate-700 text-xl dark:bg-slate-800 dark:text-slate-100 text-justify">
                    I&apos;m a passionate Software Developer with experience in the MERN stack, Docker, Kubernetes, Linux, Cloud (Azure, AWS), and DevOps. Currently in my third year of B.Tech in Computer Science and Engineering, I focus on building scalable applications while continuously learning new technologies. I have a strong background in C++, Python, JavaScript, TypeScript, and Kotlin, along with problem-solving skills—holding a 3-star rating on CodeChef, a 1,640+ rating on LeetCode, and over 500 solved coding problems. 
                </div>
                <div className="text-center backdrop-blur-lg bg-white/50 text-slate-700 text-xl dark:bg-slate-800 dark:text-slate-100">
                    I&apos;m actively seeking opportunities in Software Development, Full-Stack, Backend, and DevOps roles.
                </div>
                <div className="text-blue-700 text-center font-bold text-xl">
                    <Link href={"/contact"}>Let&apos;s connect!</Link>
                </div>
            </div>
            <div className="sm:px-32 mt-5 flex fles-row w-full sm:w-fit justify-center items-center">
                <div onClick={()=>setflag(true)} className={"backdrop-blur-sm font-bold text-4xl w-fit cursor-pointer " + (!flag? " text-slate-500" : " text-black dark:text-white")}>Tech Stack</div>
                <div onClick={()=>setflag(false)} className={"backdrop-blur-sm font-bold text-4xl w-fit cursor-pointer " + (flag? " text-slate-500" : " text-black dark:text-white")}>Tools</div>
            </div>
            {flag ? <TechStack/> : <Tools/>}
        </motion.div>
    )
}

function TechStack(){
    return(
        <div className="sm:px-32 mt-5 transition-all duration-500 ease-in-out">
            <div className="mt-10 sm:flex sm:justify-evenly sm:flex-wrap grid grid-cols-3 text-slate-700 text-xl sm:gap-8 gap-3">
            <Icons src="aws" text="AWS"/>
            <Icons src="azure" text="Azure"/>
            <Icons src="bootstrap" text="Bootstrap"/>
            <Icons src="c" text="C"/>
            <Icons src="cpp" text="C++"/>
            <Icons src="css" text="CSS"/>
            <Icons src="docker" text="Docker"/>
            <Icons src="express" text="Express.js"/>
            <Icons src="figma" text="Figma"/>
            <Icons src="html" text="HTML"/>
            <Icons src="js" text="JavaScript"/>
            <Icons src="kotlin" text="Kotlin"/>
            <Icons src="kubernetes" text="Kubernetes"/>
            <Icons src="linux" text="Linux"/>
            <Icons src="mongodb" text="MongoDB"/>
            <Icons src="next" text="Next.js"/>
            <Icons src="nodejs" text="NodeJS"/>
            <Icons src="postgresql" text="PostgreSQL"/>
            <Icons src="prisma" text="Prisma"/>
            <Icons src="python" text="Python"/>
            <Icons src="react" text="React"/>
            <Icons src="tailwind" text="TailwindCSS"/>
            <Icons src="ts" text="TypeScript"/>
            </div>
        </div>
    )
}

function Tools(){
    return(
        <div className="sm:px-32 mt-5 transition-all duration-500 ease-in-out">
            <div className="mt-10 sm:flex sm:justify-evenly sm:flex-wrap grid grid-cols-3 text-slate-700 text-xl sm:gap-8 gap-3">
            <Icons src="androidstudio" text="Android Studio"/>
            <Icons src="discord" text="Discord"/>
            <Icons src="git" text="Git"/>
            <Icons src="github" text="GitHub"/>
            <Icons src="postman" text="Postman"/>
            <Icons src="vscode" text="VS Code"/>

            </div>
        </div>
    )
}

function Icons({ src, text }: { src: string, text: string }) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 bg-white/50 backdrop-blur-lg p-2 rounded dark:bg-slate-800 dark:text-slate-200"
      >
        <img
          src={"https://skillicons.dev/icons?i=" + src}
          alt="" 
          width={40}
          height={40}
        />
        <p>{text}</p>
      </motion.div>
    )
  }