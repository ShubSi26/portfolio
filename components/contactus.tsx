"use client";
import { useEffect, useState } from "react";
import { CardContainer } from "./cardcontainer";
import { BackgroundGradient } from "./background-gradient";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Update mouse position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Attach mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("shubhamsi160@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div
      className="relative inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen max-h-fit"
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
        <h1 className="text-white text-5xl font-extrabold shadow-md">
          Let&apos;ss Connect
        </h1>
      </div>

      <div className="pt-40 px-6">
        <div className="text-center py-6">
          <p className="text-2xl text-gray-300 italic font-light">
          &quot;Feedback and suggestions are the foundation of my continuous improvement. 
            I&apos;m always eager to hear from you!&quot;
          </p>
        </div>

        <div className="flex justify-center items-center gap-12 pt-12 flex-col sm:flex-row">
          {/* Email Card */}
          <div
            onClick={copyEmail} // Call copyEmail function on click
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <CardContainer className="inter-var relative rounded-3xl w-96 border border-cyan-500 h-96 shadow-2xl hover:shadow-cyan-500/50 transition-shadow">
              <BackgroundGradient className="h-96 w-96 bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-500 rounded-3xl p-4">
                <div className="flex justify-center items-center h-full w-full">
                  <Card1 mousePosition={mousePosition} windowSize={windowSize} />
                </div>
              </BackgroundGradient>
            </CardContainer>
          </div>

          {/* LinkedIn Card */}
          <Link href={"https://www.linkedin.com/in/realshubham/"} target="_blank">
            <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <CardContainer className="inter-var relative rounded-3xl w-96 border border-cyan-500 h-96 shadow-2xl hover:shadow-cyan-500/50 transition-shadow">
                <BackgroundGradient className="h-96 w-96 bg-gradient-to-bl from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl p-4">
                  <div className="flex justify-center items-center h-full w-full">
                    <Card2 mousePosition={mousePosition} windowSize={windowSize} />
                  </div>
                </BackgroundGradient>
              </CardContainer>
            </div>
          </Link>
        </div>
      </div>

      {/* Background Effect */}
      <style jsx global>{`
        .background-effect {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.7));
          pointer-events: none; // Ensure the background effect doesn't block interactions
          transition: background 0.2s ease;
          z-index: -1; // Position behind other elements
        }
      `}</style>

      <div className="background-effect" />
    </div>
  );
}

function Card1({ mousePosition, windowSize }: { mousePosition: { x: number; y: number }, windowSize: { width: number, height: number } }) {
  return (
    <div
      className="text-neutral-200 w-full h-full flex justify-center items-center flex-col gap-4"
      style={{
        transform: `translate(${(mousePosition.x - windowSize.width / 2) / 50}px, ${
          (mousePosition.y - windowSize.height / 2) / 50
        }px)`, // Move card based on mouse position
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 text-cyan-300 transition-transform duration-300 hover:scale-110"
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
      <h1 className="text-3xl font-mono font-semibold transition-colors duration-300 hover:text-cyan-400">
        Copy My Email
      </h1>
    </div>
  );
}

function Card2({ mousePosition, windowSize }: { mousePosition: { x: number; y: number }, windowSize: { width: number, height: number } }) {
  return (
    <div
      className="flex justify-center items-center h-full w-full flex-col gap-6 "
      style={{
        transform: `translate(${(mousePosition.x - windowSize.width / 2) / 50}px, ${
          (mousePosition.y - windowSize.height / 2) / 50
        }px)`, // Move card based on mouse position
      }}
    >
      <Image
        src="/images/linkedins.png" // Ensure this is the square LinkedIn logo
        alt="LinkedIn"
        height={150}
        width={150}
        priority={true}
        className="rounded-xl border-4 border-white shadow-md hover:scale-110 transition-transform duration-300"
      />
      <p className="text-center text-white text-2xl font-mono font-semibold transition-colors duration-300 hover:text-cyan-400">
        Connect with me on LinkedIn
      </p>
    </div>
  );
}
