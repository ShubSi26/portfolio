"use client"
import Hero from "../components/hero2";
import Body from "@/components/body2";
import {Projects} from "@/components/projects";
import {CardHoverEffectDemo} from "@/components/findme";
import {Footr} from "@/components/footr";
import Randomlines from "@/components/randomlines";
import { useRef } from "react";

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
