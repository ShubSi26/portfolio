'use client';
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react";


export default function body(){
    const [flag,setflag] = useState(true);
    return(
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
            >
            <div className="sm:px-32">
                <h1 className="backdrop-blur-lg bg-white/50 font-bold text-black dark:bg-slate-800 dark:text-slate-100 text-4xl w-fit">
                    About Me
                </h1>
                <div className="backdrop-blur-lg bg-white/50 text-slate-700 text-xl dark:bg-slate-800 dark:text-slate-100 text-justify">
                I'm a passionate Software Developer with experience in the MERN stack, Docker, Kubernetes, Linux, Cloud (Azure, AWS), and DevOps. Currently in my third year of B.Tech in Computer Science and Engineering, I build and deploy scalable applications while continuously learning new technologies.

I've developed projects like Pay Now (a digital payment app) and Connectify (a web chat platform), leveraging Docker for containerization and Azure/AWS for deployment. My strong background in C++, Python, JavaScript, TypeScript, and Kotlin complements my problem-solving skills—I hold a 3-star rating on CodeChef, a 1,640+ rating on LeetCode, and have solved over 500 coding problems.

I'm actively seeking opportunities in Software Development, Full-Stack, Frontend, Backend, and DevOps roles. Let’s connect and build something amazing together!
                </div>
            </div>
            <div className="sm:px-32 mt-5 flex fles-row">
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
                <Icons src="js" text="JavaScript"/>
                <Icons src="ts" text="TypeScript"/>
                <Icons src="tailwind" text="TailwindCSS"/>
                <Icons src="next" text="Next.js"/>
                <Icons src="react" text="React"/>
                <Icons src="express" text="Express.js"/>
                <Icons src="nodejs" text="NodeJS"/>
                <Icons src="mongodb" text="MongoDB"/>
                <Icons src="docker" text="Docker"/>
                <Icons src="kubernetes" text="Kubernetes"/>
                <Icons src="linux" text="Linux"/>
                <Icons src="azure" text="Azure"/>
                <Icons src="aws" text="AWS"/>
                <Icons src="cpp" text="C++"/>
                <Icons src="c" text="C"/>
                <Icons src="kotlin" text="Kotlin"/>
                <Icons src="python" text="Python"/>
                <Icons src="postgresql" text="PostgreSQL"/>
                <Icons src="prisma" text="Prisma"/>
                <Icons src="figma" text="Figma"/>
                <Icons src="html" text="HTML"/>
                <Icons src="css" text="CSS"/>
                <Icons src="bootstrap" text="Bootstrap"/>
                
            </div>
        </div>
    )
}

function Tools(){
    return(
        <div className="sm:px-32 mt-5 transition-all duration-500 ease-in-out">
            <div className="mt-10 sm:flex sm:justify-evenly sm:flex-wrap grid grid-cols-3 text-slate-700 text-xl sm:gap-8 gap-3">
                <Icons src="vscode" text="VS Code"/>
                <Icons src="git" text="Git"/>
                <Icons src="github" text="GitHub"/>
                <Icons src="discord" text="Discord"/>
                <Icons src="postman" text="Postman"/>
                <Icons src="androidstudio" text="Android Studio"/>
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