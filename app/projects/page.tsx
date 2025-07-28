"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/timeline";
import { useRouter } from "next/navigation";
import {BackgroundBeams } from "@/components/backgroundBeams";

export default function TimelineDemo() {
  const router = useRouter();

  const data = [
    {
      title: "April 2025",
      content: (
        <div>
            <h2 className="text-xl font-bold"> Android Project - Farm2Fabric</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built a Android application for track of wool from farmer to the consumer.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <img
              src="https://raw.githubusercontent.com/ShubSi26/android-frontend/refs/heads/main/images/Untitled%20design%20(1).png"
              alt="startup template"
              width={500}
              height={500}
              className=" "
            />
            <img
              src="https://raw.githubusercontent.com/ShubSi26/android-frontend/refs/heads/main/images/Untitled%20design.jpg"
              alt="startup template"
              width={500}
              height={500}
              className=""
            />
            <img
              src="https://raw.githubusercontent.com/ShubSi26/android-frontend/refs/heads/main/images/Untitled%20design%20(1).jpg"
              alt="startup template"
              width={500}
              height={500}
              className=""
            />
            <div className="w-full h-full">
                <h1 className="text-2xl font-bold">Tech Stack</h1>
                <div className="flex flex-row gap-2 mt-2 flex-wrap">
                    <img
                    src={"https://skillicons.dev/icons?i=kotlin" }
                    alt="" 
                    width={40}
                    height={40}
                    />
                    <img
                        src={"https://skillicons.dev/icons?i=androidstudio" }
                        alt="" 
                        width={40}
                        height={40}
                        />
                    <img
                        src={"https://skillicons.dev/icons?i=express" }
                        alt="" 
                        width={40}
                        height={40}
                        />
                    <img
                        src={"https://skillicons.dev/icons?i=mongodb" }
                        alt="" 
                        width={40}
                        height={40}
                        />
                    <img
                        src={"https://skillicons.dev/icons?i=nodejs" }
                        alt="" 
                        width={40}
                        height={40}
                        />
                </div>
                <h1 className="font-bold text-2xl">Gihub Link</h1>
                <Link href={"https://github.com/ShubSi26/Farm2Fabric-Kotlin_Project"} target="_blank">
                    <Image
                    src={'/images/github.png'}
                    width={40}
                    height={40}
                    className="bg-white rounded-full"
                    alt="github"
                    />
                </Link>
            </div>

          </div>
        </div>
      ),
    },
    {
        title: "Jan 2025",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Connectify - P2P video chat</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Built a P2P video chat application using WebRTC and Socket.io. The application allows users to connect with each other in real-time and share their video and audio streams.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/connectify/refs/heads/main/images/homepage.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/connectify/refs/heads/main/images/register.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/connectify/refs/heads/main/images/dashboard.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <div className="w-full h-full">
                  <h1 className="text-2xl font-bold">Tech Stack</h1>
                  <div className="flex flex-row gap-2 mt-2 flex-wrap">
                      <img
                      src={"https://skillicons.dev/icons?i=react" }
                      alt="" 
                      width={40}
                      height={40}
                      />
                      <img
                          src={"https://skillicons.dev/icons?i=express" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=mongodb" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=nodejs" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=tailwind" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                  </div>
                  <h1 className="font-bold text-2xl">Gihub Link</h1>
                  <Link href={"https://github.com/ShubSi26/connectify"} target="_blank">
                      <Image
                      src={'/images/github.png'}
                      width={40}
                      height={40}
                      className="bg-white rounded-full"
                      alt="github"
                      />
                  </Link>
              </div>
  
            </div>
          </div>
        ),
    },
    {
        title: "Nov 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Foodz - Online Food Ordering System</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Foodz | Online Food Ordering System build using PHP with database as MySql and payment and mail integration with Razorpay and Brevo        
            </p>    
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Foodz-Online_Food_Ordering_System/refs/heads/main/Sample%20images/home.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Foodz-Online_Food_Ordering_System/refs/heads/main/Sample%20images/home%20menu.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Foodz-Online_Food_Ordering_System/refs/heads/main/Sample%20images/restaurants.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Foodz-Online_Food_Ordering_System/refs/heads/main/Sample%20images/orders.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <div className="w-full h-full">
                  <h1 className="text-2xl font-bold">Tech Stack</h1>
                  <div className="flex flex-row gap-2 mt-2 flex-wrap">
                      <img
                      src={"https://skillicons.dev/icons?i=php" }
                      alt="" 
                      width={40}
                      height={40}
                      />
                      <img
                          src={"https://skillicons.dev/icons?i=mysql" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=css" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=html" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=docker" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                  </div>
                  <h1 className="font-bold text-2xl">Gihub Link</h1>
                  <Link href={"https://github.com/ShubSi26/Foodz-Online_Food_Ordering_System"} target="_blank">
                      <Image
                      src={'/images/github.png'}
                      width={40}
                      height={40}
                      className="bg-white rounded-full"
                      alt="github"
                      />
                  </Link>
              </div>
  
            </div>
          </div>
        ),
    },
    {
        title: "Oct 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> AYUSH-Startup-Portal</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            This project involves creating a comprehensive AYUSH Startup Registration Portal designed to simplify the registration process for AYUSH startups. The portal will provide a user-friendly, secure, and scalable solution to manage a high volume of registrations.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/ayush.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <div className="w-full h-full">
                  <h1 className="text-2xl font-bold">Tech Stack</h1>
                  <div className="flex flex-row gap-2 mt-2 flex-wrap ">
                      <img
                      src={"https://skillicons.dev/icons?i=react" }
                      alt="" 
                      width={40}
                      height={40}
                      />
                      <img
                          src={"https://skillicons.dev/icons?i=express" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=mongodb" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=nodejs" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=tailwind" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                  </div>
                  <h1 className="font-bold text-2xl">Gihub Link</h1>
                  <Link href={"https://github.com/ShubSi26/AYUSH-Startup-Portal"} target="_blank">
                      <Image
                      src={'/images/github.png'}
                      width={40}
                      height={40}
                      className="bg-white rounded-full"
                      alt="github"
                      />
                  </Link>
              </div>
  
            </div>
          </div>
        ),
    },
    {
        title: "Aug 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Pay Now - Fintech Application</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Pay Now is an Open Source Project for Real-Time Payment Application Using the MERN Stack. It allows users to manage wallet balances, make payments via cash, and track transactions in real-time.            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Pay-Now/refs/heads/main/images/default.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Pay-Now/refs/heads/main/images/home.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Pay-Now/refs/heads/main/images/wallet2.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Pay-Now/refs/heads/main/images/razorpay.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <div className="w-full h-full">
                  <h1 className="text-2xl font-bold">Tech Stack</h1>
                  <div className="flex flex-row gap-2 mt-2 flex-wrap">
                      <img
                      src={"https://skillicons.dev/icons?i=react" }
                      alt="" 
                      width={40}
                      height={40}
                      />
                      <img
                          src={"https://skillicons.dev/icons?i=express" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=mongodb" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=nodejs" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=tailwind" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                  </div>
                  <h1 className="font-bold text-2xl">Gihub Link</h1>
                  <Link href={"https://github.com/ShubSi26/Pay-Now"} target="_blank">
                      <Image
                      src={'/images/github.png'}
                      width={40}
                      height={40}
                      className="bg-white rounded-full"
                      alt="github"
                      />
                  </Link>
              </div>
  
            </div>
          </div>
        ),
    },
    {
        title: "July 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Sudoku Solver</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Built a Sudoku Solver using Backtracking Algorithm. The application allows users to input a Sudoku puzzle and provides the solution in real-time. The project is built using Java and JavaFX for the GUI.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/sudoku1.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="/images/sudoku2.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <div className="w-full h-full">
                  <h1 className="text-2xl font-bold">Tech Stack</h1>
                  <div className="flex flex-row gap-2 mt-2">
                      <img
                          src={"https://skillicons.dev/icons?i=java" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      
                  </div>
                  <h1 className="font-bold text-2xl">Gihub Link</h1>
                  <Link href={"https://github.com/ShubSi26/Sudoku-Solver"} target="_blank">
                      <Image
                      src={'/images/github.png'}
                      width={40}
                      height={40}
                      className="bg-white rounded-full"
                      alt="github"
                      />
                  </Link>
              </div>
  
            </div>
          </div>
        ),
    },
    {
        title: "April 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Crowdfunding</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            This open-source crowdfunding application is built using the MEAN stack (MongoDB, Express, Angular, Node.js). It enables creators to connect with supporters, receive real-time donations, and track project progress. With secure payments and a dynamic user interface, it offers a streamlined experience for both project creators and backers.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Crowdfunding/master/images/Screenshot%202024-06-22%20185600.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Crowdfunding/master/images/Screenshot%202024-06-22%20185645.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Crowdfunding/master/images/Screenshot%202024-06-22%20185731.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="https://raw.githubusercontent.com/ShubSi26/Crowdfunding/master/images/Screenshot%202024-06-22%20190040.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <div className="w-full h-full">
                  <h1 className="text-2xl font-bold">Tech Stack</h1>
                  <div className="flex flex-row gap-2 mt-2 flex-wrap">
                      <img
                      src={"https://skillicons.dev/icons?i=angular" }
                      alt="" 
                      width={40}
                      height={40}
                      />
                      <img
                          src={"https://skillicons.dev/icons?i=express" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=mongodb" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=nodejs" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                      <img
                          src={"https://skillicons.dev/icons?i=css" }
                          alt="" 
                          width={40}
                          height={40}
                          />
                  </div>
                  <h1 className="font-bold text-2xl">Gihub Link</h1>
                  <Link href={"https://github.com/ShubSi26/Crowdfunding"} target="_blank">
                      <Image
                      src={'/images/github.png'}
                      width={40}
                      height={40}
                      className="bg-white rounded-full"
                      alt="github"
                      />
                  </Link>
              </div>
  
            </div>
          </div>
        ),
    },
    
  ];
  return (
    <div className="relative w-full overflow-clip">
      <BackgroundBeams/>
      <div className="w-full h-full">
        <div className="relative max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          {/* Background image */}
          <Image
            src="/images/githubStat.png"
            alt="background stat"
            width={1000}
            height={100}
            className="absolute left-0 top-1/2 transform w-full -translate-y-1/2  pointer-events-none select-none hidden md:block"
            style={{
              maskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
            }}
          />

          {/* Foreground content */}
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl relative">
            My All Projects
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm relative">
            This include all of my work done, learning and projects undertaken in last 2 years.
          </p>
          <div onClick={() => router.back()} className="hover:cursor-pointer z-40 font-bold text-2xl">
            Go Back
        </div>
        </div>
        <Timeline data={data} />
      </div>
      
      
    </div>
  );
}
