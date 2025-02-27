import { HoverEffect } from "./card-hover-effect";
import Link from "next/link";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-center sm:text-left"> Find Me At -</h1>
        <HoverEffect items={projects} className="hidden sm:grid"/>
        <div className="flex flex-wrap text-black justify-center items-center gap-3 sm:hidden py-4">
        {projects.map((item, idx) => {
            return (
              <div key={idx} className="text-xl font-bold dark:text-white"
              >
                <Link href={item.link} target="_blank">
                {item.title}
                </Link>
              </div>
            )
          })}
        </div>
    </div>
  );
}
export const projects = [
  {
    title: "Likedin",
    description:(
        <img src="/images/linkedin.png" alt="linkedin" className="h-20 w-full rounded-l p-2 bg-white mt-2"   />
    ),
    link: "https://www.linkedin.com/in/realshubham/",
  },
  {
    title: "Github",
    description:(
        <img src="/images/github2.png" alt="github" className="h-24 w-full rounded-l bg-white"   />
    ),
    link: "https://github.com/ShubSi26",
  },
  {
    title: "LeetCode",
    description:(
        <img src="/images/leetcode.png" alt="leetcode" className="h-20 w-full rounded-l p-2 mt-2"   />
    ),
    link: "https://leetcode.com/u/SparkKing29/",
  },
  {
    title: "Codechef",
    description:(
        <img src="/images/codechef.png" alt="leetcode" className="h-20 w-full rounded-l"   />
    ),
    link: "https://www.codechef.com/users/shubsi",
  },
  {
    title: "GFG",
    description:(
        <img src="/images/gfg.png" alt="leetcode" className="h-20 w-full rounded-l p-2 mt-2"   />
    ),
    link: "https://www.geeksforgeeks.org/user/shubham66bz/",
  },
  {
    title: "HackerRank",
    description:(
        <img src="/images/hackerrank.png" alt="leetcode" className="h-24 w-full rounded-l "   />
    ),
    link: "https://www.hackerrank.com/profile/realshubham",
  },
];
