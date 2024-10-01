import React from "react";
import { FlipWords } from "./flip-words";
import Link from "next/link";
import {HoverBorderGradient} from "@/components/hoverborderbutton";
export function Footr() {
  const words = ["Build", "Grow", "Design", "Develop","Explore","Work","Innovate"];

  return (
    <div className="h-auto flex justify-center items-center flex-col">
      <div className="text-4xl justify-center items-center flex-col font-normal text-white dark:text-neutral-400 overflow-hidden pb-5">
        <div>Let&apos;s </div>
        <FlipWords words={words} duration={1000}/>
        <div>Together</div>
      </div>
      <div className="text-white text-2xl text-center font-normal w-2/3 p-2">
        I&apos;m always excited to collaborate on new projects. Feel free to reach out if you have any questions or want to chat!
      </div>
        <Link href={"/contact"}>
          <HoverBorderGradient>
              Lets get in touch
          </HoverBorderGradient>
        </Link>
      <div className="text-white text-sm text-center font-normal mt-10 p-2">
        © 2024 Shubham Singh. All rights reserved.
      </div>
    </div>
  );
}
