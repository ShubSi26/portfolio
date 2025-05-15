"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/timeline";
import { useRouter } from "next/navigation";
import {BackgroundBeams } from "@/components/backgroundBeams";

export default function TimelineDemo() {
  const router = useRouter();

  const data = [
    {
      title: "Jan 2025",
      content: (
        <div>
            <h2 className="text-xl font-bold"> AWS Educate - Getting started with compute</h2>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Learned about AWS services, including EC2, S3, and Lambda, and how to deploy applications on AWS infrastructure. Gained hands-on experience with AWS management console and CLI.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <img
              src="/images/aws.jpg"
              alt="startup template"
              width={500}
              height={500}
              className=""
            />
            
          </div>
        </div>
      ),
    },
    {
        title: "Nov 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Nptel - Cloud Computing</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Learned about cloud computing concepts, including virtualization, cloud service models (IaaS, PaaS, SaaS), and cloud deployment models (public, private, hybrid). Gained hands-on experience with AWS and Azure platforms.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/nptel.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              
            </div>
          </div>
        ),
    },
    {
        title: "July 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> HitsBullseye</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Completed a 1.5 month DSA tranning program at HitsBullseye, covering data structures and algorithms. Gained hands-on experience with problem-solving techniques and coding challenges.
            </p>    
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/hitsb.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              
  
            </div>
          </div>
        ),
    },
    {
        title: "June 2024",
        content: (
          <div>
              <h2 className="text-xl font-bold"> MongoDB Certification</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed the MongoDB Developer certification, demonstrating proficiency in MongoDB database design, querying, and data modeling. Gained hands-on experience with MongoDB Atlas and aggregation framework.
            </p>    
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/mongodb.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              
  
            </div>
          </div>
        ),
    },
    {
        title: "Nov 2023",
        content: (
          <div>
              <h2 className="text-xl font-bold"> Devops Foundation</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Completed the Ddevops Foundation course, covering DevOps principles, CI/CD pipelines, and containerization using Docker and Kubernetes. Gained hands-on experience with Git, Jenkins, and cloud platforms.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/devops.jpg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
             
            </div>
          </div>
        ),
    },
    {
        title: "Aug 2023",
        content: (
          <div>
              <h2 className="text-xl font-bold"> SRF NGO - Lead Volunteer</h2>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                Served as a lead volunteer for the SFR NOG event, orgnised child rights awareness programs and activities. Coordinated with team members to ensure smooth event execution and participant engagement.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Image
                src="/images/srf1.jpeg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="/images/srf2.jpeg"
                alt="startup template"
                width={500}
                height={500}
                className=""
              />
             
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
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl relative">
            My All Certification and Learning Experience
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm relative">
            Here are some of the certifications and learning experiences I have gained throughout my journey. Each certification represents a significant milestone in my professional development, showcasing my commitment to continuous learning and growth.
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
