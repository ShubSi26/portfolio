"use client"
import Hero from "../components/hero2";
import Body from "@/components/body2";
import {Projects} from "@/components/projects";
import {CardHoverEffectDemo} from "@/components/findme";
import {Footr} from "@/components/footr";
import Randomlines from "@/components/randomlines";
import { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScroll2 = () => {
    if (targetRef2.current) {
      targetRef2.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (<>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Hello, this is portfolio of Shubham Singh, a passionate Software Developer with experience in the MERN stack, Docker, Kubernetes, Linux, Cloud (Azure, AWS), and DevOps. Currently in my third year of B.Tech in Computer Science and Engineering, I focus on building scalable applications while continuously learning new technologies. I have a strong background in C++, Python, JavaScript, TypeScript, and Kotlin, along with problem-solving skills—holding a 3-star rating on CodeChef, a 1,640+ rating on LeetCode, and over 500 solved coding problems. " />
      </Head>
        <Randomlines/>
        <div className="w-screen no-scrollbar ">
              <Hero handleScroll = {handleScroll} handleScroll2={handleScroll2}/>
        </div>
        <div ref = {targetRef} className="min-h-fit transition-all duration-500 ease-in-out pt-5 h-auto">
          <Body/>
        </div>
        <div ref={targetRef2} className="min-h-fit transition-all duration-500 ease-in-out  pt-5 h-auto">
          <Projects/>
        </div>
        <div className="">
          <CardHoverEffectDemo/>
        </div>
        <div className="">
          <Footr/>
        </div>
  </>);
}
