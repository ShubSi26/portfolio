import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-white text-3xl"> Find Me At -</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Likedin",
    description:(
        <img src="/images/linkedin.png" alt="linkedin" className="h-20 w-full rounded-l p-2 bg-white mt-2"   />
    ),
    link: "https://stripe.com",
  },
  {
    title: "Github",
    description:(
        <img src="/images/github2.png" alt="github" className="h-24 w-full rounded-l bg-white"   />
    ),
    link: "https://netflix.com",
  },
  {
    title: "LeetCode",
    description:(
        <img src="/images/leetcode.png" alt="leetcode" className="h-20 w-full rounded-l p-2 mt-2"   />
    ),
    link: "https://google.com",
  },
  {
    title: "Codechef",
    description:(
        <img src="/images/codechef.png" alt="leetcode" className="h-20 w-full rounded-l"   />
    ),
    link: "https://meta.com",
  },
  {
    title: "GFG",
    description:(
        <img src="/images/gfg.png" alt="leetcode" className="h-20 w-full rounded-l p-2 mt-2"   />
    ),
    link: "https://amazon.com",
  },
  {
    title: "HackerRank",
    description:(
        <img src="/images/hackerrank.png" alt="leetcode" className="h-24 w-full rounded-l "   />
    ),
    link: "https://microsoft.com",
  },
];
