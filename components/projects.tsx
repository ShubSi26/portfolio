"use client";
import React from "react";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Pay Now",
    description: "Pay Now is an Open Source Project for Real-Time Payment Application Using the MERN Stack. It allows users to manage wallet balances, make payments via cash, and track transactions in real-time.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white ">
        <Image
          src="https://raw.githubusercontent.com/ShubSi26/Pay-Now/refs/heads/main/images/default.jpg"
          width={600}
          height={500}
          className="h-full w-full object-cover pointer-events-none"
          alt="Pay Now demo"
        />
        <div className="absolute inset-0 z-10 text-black justify-center items-center flex group gap-5">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/github.png"} text="Source Code"/>
            </div>
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/web.png"} text="Live Demo"/>
            </div>
        </div>
      </div>
    ),
    techStack: ["react", "nodejs", "express", "mongodb", "docker"],
  },
  {
    title: "Personal Portfolio Website",
    description:"This portfolio showcases my skills and projects as a MERN stack developer. It is designed with responsiveness and modern UI principles. Built with Next.js and Tailwind CSS, it highlights my expertise in cutting-edge web development technologies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/portfolio.jpg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    techStack: ["react", "nextjs", "tailwind"]
  },
  {
    title: "Crowdfunding",
    description:"This open-source crowdfunding application is built using the MEAN stack (MongoDB, Express, Angular, Node.js). It enables creators to connect with supporters, receive real-time donations, and track project progress. With secure payments and a dynamic user interface, it offers a streamlined experience for both project creators and backers.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://raw.githubusercontent.com/ShubSi26/Crowdfunding/master/images/Screenshot%202024-06-22%20185600.jpg"
            width={400}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
          <div className="absolute inset-0 z-10 text-black justify-center items-center flex group gap-5">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/github.png"} text="Source Code"/>
            </div>
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/web.png"} text="Live Demo"/>
            </div>
        </div>
        </div>
      ),
      techStack: ["angular", "nodejs", "express","mongodb","bootstrap"]
  },
  {
    title: "AYUSH-Startup-Portal",
    description:"This project involves creating a comprehensive AYUSH Startup Registration Portal designed to simplify and expedite the registration process for AYUSH startups. The portal will provide a user-friendly, secure, and scalable solution to manage a high volume of registrations.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/images/ayush.jpg"
            width={400}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
          <div className="absolute inset-0 z-10 text-black justify-center items-center flex group gap-5">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/github.png"} text="Source Code"/>
            </div>
        </div>
        </div>
      ),
      techStack: ["react", "nodejs", "express","mongodb","tailwind"]
  },
];
export function Projects() {
  return (<>
    <div>
        <h1 className="text-white text-center text-3xl">My Projects</h1>
    </div>
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  </>);
}


function Show({src,text}:{src:string,text:string}) {
    const [show, setShow] = React.useState(false);
  
    return (
      <div
        className="flex items-center"
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