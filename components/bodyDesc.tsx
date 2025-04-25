'use client';

import React from "react";
import { WobbleCard } from "./wobble-card";
import Link from "next/link";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Passionate Software Developer
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          I&apos;m a passionate Software Developer with experience in the MERN stack, Docker, Kubernetes, Linux, Cloud (Azure, AWS), and DevOps. Currently in my third year of B.Tech in Computer Science and Engineering
          </p>
        </div>
        <img
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/380040473/original/77bc08e5351f5963f84fd486cea3164e8937e3b8/assist-to-prepare-cka-certified-kubernetes-administrator.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <Link href={"/certifications"} className="relative w-full h-full flex flex-col justify-center items-center">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Certification
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Completed certifications in Cloud Computing from NPTEL and Getting Started with Compute from AWS Educate.
          </p>
        </Link>
        <img
            src="https://www.careerguide.com/career/wp-content/uploads/2023/09/nptel-logo-1024x199.png"
            width={300}
            height={300}
            alt="linear demo image"
            className="absolute filter  object-contain rounded-2xl"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Quick Learner & Problem Solver
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          I focus on building scalable applications while continuously learning new technologies. I have a strong background in C++, Python, JavaScript, TypeScript, and Kotlin, along with problem-solving skills—holding a 3-star rating on CodeChef, a 1,640+ rating on LeetCode, and over 500 solved coding problems.
          </p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0Ez4tSCoI3bYCu-XvswB1mgC1ZlljUB8rw&s"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-5 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}


{/* <CardSpotlight>
                        <div className="w-96 h-96 text-2xl text-justify">
                        I&apos;m a passionate Software Developer with experience in the MERN stack, Docker, Kubernetes, Linux, Cloud (Azure, AWS), and DevOps. Currently in my third year of B.Tech in Computer Science and Engineering,
                        </div>
                    </CardSpotlight>
                    <CardSpotlight>
                        <div className="w-96 h-96 text-2xl text-justify">
                        I focus on building scalable applications while continuously learning new technologies. I have a strong background in C++, Python, JavaScript, TypeScript, and Kotlin, along with problem-solving skills—holding a 3-star rating on CodeChef, a 1,640+ rating on LeetCode, and over 500 solved coding problems.                        </div>
                    </CardSpotlight>
                    <CardSpotlight>
                        <div className="w-96 h-96 text-2xl text-justify">
                        I focus on building scalable applications while continuously learning new technologies. I have a strong background in C++, Python, JavaScript, TypeScript, and Kotlin, along with problem-solving skills—holding a 3-star rating on CodeChef, a 1,640+ rating on LeetCode, and over 500 solved coding problems.                        </div>
                    </CardSpotlight> */}