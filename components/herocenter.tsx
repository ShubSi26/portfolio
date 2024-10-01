"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {HoverBorderGradient} from "@/components/hoverborderbutton";


export default function HeroCenter({ name }: { name: string }) {
    const [ShowName, setName] = useState(" ");

    useEffect(() => {
        // Reset ShowName to empty before starting the new name
        setName(" "); 

        const timer = setInterval(() => {
            setName((prev) => {
                if (prev.length < name.length) {
                    return name.slice(0, prev.length + 1); // Add one more character
                } else {
                    clearInterval(timer); // Stop the timer when complete
                    return prev; // Return the final string
                }
            });
        }, 50); // Adjust speed as needed

        return () => clearInterval(timer); // Clean up on unmount
    }, [name]); // Run effect whenever name changes

    return (<>
        <style jsx>{`
            @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
            .hero-gradient {
                will-change: background-position;
                background: linear-gradient(270deg, #ff0080, #ff8c00, #ffea00, #00ff8c, #00aaff);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: gradient 15s ease infinite; /* Adjust duration as needed */
            }
        `}</style>
        <div className="flex items-center flex-col justify-center h-screen">
            <h1 className="p-5 text-center hero-gradient text-5xl font-bold ">
                {ShowName}
            </h1>
            <div className="flex items-center justify-items-center">
                <button onClick={()=> window.scrollTo({
                        top: window.scrollY + window.innerHeight,
                        behavior: 'smooth'
                    })} 
                    className="mr-6 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Know Me
                    </span>
                </button>
                <Link href={"/contact"}>
                    <HoverBorderGradient>
                        Contact Me
                    </HoverBorderGradient>
                </Link>
            </div>
        </div>
        </>
    );
}
