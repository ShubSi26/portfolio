"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    techStack?: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(---white)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md sm:p-10"
        ref={ref}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#555 transparent',
        }}
      >
        <style jsx>{`
          /* WebKit Browsers (Chrome, Safari, Edge) */
          .h-[30rem]::-webkit-scrollbar {
            width: 12px;
          }

          .h-[30rem]::-webkit-scrollbar-track {
            background: transparent; /* Make the track transparent */
          }

          .h-[30rem]::-webkit-scrollbar-thumb {
            background-color: #555; /* Dark grey for the scrollbar handle */
            border-radius: 10px;
            border: 2px solid transparent; /* Transparent border to prevent track color change */
          }

          .h-[30rem]::-webkit-scrollbar-thumb:hover {
            background-color: #333; /* Darker on hover */
          }
        `}</style>
      <div className="div relative flex items-start px-2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-kg dark:bg-slate-800"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-800 max-w-sm mt-10 dark:text-slate-200 dark:bg-slate-800 bg-white"
              >
                {item.description}
              </motion.p>
              <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="flex gap-2">
                { item.techStack?.map((tech) => (
                  (
                    <motion.img key={tech} src={"https://skillicons.dev/icons?i=" + tech} alt={tech} />
                  )
                  ))}
              </motion.div>
              <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="block sm:hidden pt-4">
                <div>
                  {item.content}
                </div>
                  
              </motion.div>
    
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden sm:block h-auto w-max rounded-md bg-white sticky top-10 z-0",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
