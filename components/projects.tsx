"use client"
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import Show from "@/components/show"; 
import { motion } from "framer-motion";

const content = [
  {
    title: "Connectify",
    description: "Connectify is a real-time WebRTC chat platform that enables seamless communication, supporting peer to peer video chat. Built with the MERN stack, it ensures a responsive and interactive user experience. ",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <Image
          src="https://raw.githubusercontent.com/ShubSi26/connectify/main/images/homepage.jpg"
          width={600}
          height={500}
          className="h-full w-full object-cover pointer-events-none"
          alt="Pay Now demo"
          priority = {true}
        />
        <div className="hidden absolute inset-0 z-10 text-black justify-center items-center sm:flex group gap-5">
          <Link href = "https://github.com/ShubSi26/connectify" target="_blank">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/github.png"} text="Source Code"/>
            </div>
          </Link>
          <Link href={"https://connectify.devshubh.live"} target="_blank">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/web.png"} text="Live Demo"/>
            </div>
          </Link>
        </div>
        <div className="sm:hidden z-50 text-black gap-3 flex-row flex pt-2">
          <Link href = "https://github.com/ShubSi26/connectify" target="_blank">
            <Show src={"/images/github.png"} text="Source Code" className=" bg-white rounded-xl p-1"/>
          </Link>
          <Link href={"https://connectify.devshubh.live"} target="_blank">
            <Show src={"/images/web.png"} text="Live Demo" className=" bg-white rounded-xl p-1 "/>
          </Link>
        </div>
      </div>
    ),
    techStack: ["react", "nodejs", "express", "mongodb", "docker", "cloudflare"],
  },
  {
    title: "Pay Now",
    description: "Pay Now is an Open Source Project for Real-Time Payment Application Using the MERN Stack. It allows users to manage wallet balances, make payments via cash, and track transactions in real-time.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center ">
        <Image
          src="https://raw.githubusercontent.com/ShubSi26/Pay-Now/refs/heads/main/images/default.jpg"
          width={600}
          height={500}
          className="h-full w-full object-cover pointer-events-none"
          alt="Pay Now demo"
          priority = {true}
        />
        <div className="hidden absolute inset-0 z-10 text-black justify-center items-center sm:flex group gap-5">
          <Link href = "https://github.com/ShubSi26/Pay-Now" target="_blank">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/github.png"} text="Source Code"/>
            </div>
          </Link>
          <Link href={"https://paynow.devshubh.live"} target="_blank">
            <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                <Show src={"/images/web.png"} text="Live Demo"/>
            </div>
          </Link>
        </div>
        <div className="sm:hidden z-50 text-black gap-3 flex-row flex pt-2">
          <Link href = "https://github.com/ShubSi26/Pay-Now" target="_blank">
            <Show src={"/images/github.png"} text="Source Code" className=" bg-white rounded-xl p-1"/>
          </Link>
          <Link href={"https://paynow.devshubh.live"} target="_blank">
            <Show src={"/images/web.png"} text="Live Demo" className=" bg-white rounded-xl p-1 "/>
          </Link>
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
          priority = {true}
        />
      </div>
    ),
    techStack: ["react", "nextjs", "tailwind"]
  },
  {
    title: "Crowdfunding",
    description:"This open-source crowdfunding application is built using the MEAN stack (MongoDB, Express, Angular, Node.js). It enables creators to connect with supporters, receive real-time donations, and track project progress. With secure payments and a dynamic user interface, it offers a streamlined experience for both project creators and backers.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white ">
          <Image
            src="https://raw.githubusercontent.com/ShubSi26/Crowdfunding/master/images/Screenshot%202024-06-22%20185600.jpg"
            width={400}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
            priority = {true}
          />
          <div className="hidden absolute inset-0 z-10 text-black justify-center items-center sm:flex group gap-5">
            <Link href = "https://github.com/ShubSi26/Crowdfunding" target="_blank">
              <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                  <Show src={"/images/github.png"} text="Source Code"/>
              </div>
            </Link>
            <Link href="https://project-crowdfund.onrender.com" target="_blank">
              <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                  <Show src={"/images/web.png"} text="Live Demo"/>
              </div>
            </Link>
          </div>
          <div className="sm:hidden z-50 text-black gap-3 flex-row flex pt-2">
            <Link href = "https://github.com/ShubSi26/Crowdfunding" target="_blank">
              <Show src={"/images/github.png"} text="Source Code" className=" bg-white rounded-xl p-1"/>
            </Link>
            <Link href="https://project-crowdfund.onrender.com" target="_blank">
              <Show src={"/images/web.png"} text="Live Demo" className=" bg-white rounded-xl p-1 "/>
            </Link>
          </div>
        </div>
      ),
      techStack: ["angular", "nodejs", "express","mongodb","bootstrap"]
  },
  {
    title: "AYUSH-Startup-Portal",
    description:"This project involves creating a comprehensive AYUSH Startup Registration Portal designed to simplify the registration process for AYUSH startups. The portal will provide a user-friendly, secure, and scalable solution to manage a high volume of registrations.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center text-white ">
          <Image
            src="/images/ayush.jpg"
            width={400}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
            priority = {true}
          />
          <div className="hidden absolute inset-0 z-10 text-black justify-center items-center sm:flex group gap-5">
            <Link href={"https://github.com/ShubSi26/AYUSH-Startup-Portal"} target="_blank">
              <div className="hidden group-hover:block cursor-pointer transition p-2 border-2 border-slate-400 backdrop-blur-md rounded-3xl">
                  <Show src={"/images/github.png"} text="Source Code"/>
              </div>
            </Link>
          </div>
          <div className="sm:hidden z-50 text-black gap-3 flex-row flex pt-2">
            <Link href={"https://github.com/ShubSi26/AYUSH-Startup-Portal"} target="_blank">
              <Show src={"/images/github.png"} text="Source Code" className=" bg-white rounded-xl p-1"/>
            </Link>
          </div>
        </div>
      ),
      techStack: ["react", "nodejs", "express","postgres","tailwind"]
  },
];
export function Projects() {
  return (<>
  
    <div className="transition-all sm:px-32 px-4 pb-4">
        <h1 className=" sm:text-left font-bold text-4xl text-center">My Projects</h1>
    </div>
    
    <Link href={"/projects"}>
      <div className="sm:px-32 px-4 pb-4 flex justify-center items-center">
        <h1 className=" sm:text-left font-bold text-2xl text-center">See All Projects</h1>
      </div>
    </Link>

    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-10 scroll-container">
      <StickyScroll content={content} />
    </motion.div>
  </>);
}

