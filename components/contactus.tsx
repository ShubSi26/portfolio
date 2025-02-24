"use client";

import { useState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";
import Image from "next/image";
import Link from "next/link";

const MyComponent = () => {
  const turnstile = useTurnstile();
  const [email, setEmail] = useState("");

  return (
    <div className="w-screen h-screen dark:bg-slate-800 flex flex-col justify-center items-center gap-4">
      <div className="text-4xl font-bold">Let&apos;s Connect</div>
      <div className="flex flex-wrap justify-center flex-col sm:flex-row items-center gap-4">
        <Link href="https://www.linkedin.com/in/shubh001">
          <div className="flex flex-col items-center cursor-pointer">
            <Image
              src="/images/linkedins.png"
              width={100}
              height={100}
              alt="Linkedin"
            />
            <div className="font-bold">Connect On Linkedin</div>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
            onVerify={(token: string) => {
              fetch("/api/verify-captcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
              })
                .then((response) => {
                  if (!response.ok) {
                    turnstile.reset();
                  }
                  return response.json();
                })
                .then((data) => {
                  setEmail(data.email);
                })
                .catch(() => {
                  turnstile.reset();
                });
            }}
          />
          <div>
            {email === "" ? "Verify Captcha" : <EmailDisplay email={email} />}
          </div>
        </div>
      </div>
      <Link href={".."} className="cursor-pointer group flex justify-center items-center flex-col">
        <div>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
        </div>
        <p className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xl font-bold">
          Go Back
        </p>

      </Link>
      <p className="text-2xl text-gray-800 font-roboto text-center dark:text-slate-200">
          Feedback and suggestions are the foundation of my continuous improvement. 
            I&apos;m always eager to hear from you!
          </p>
    </div>
  );
};

function EmailDisplay({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return(
    <div className="flex flex-col items-center">
      <div>{email}</div>
      <button className="bg-blue-600 p-2 rounded-2xl text-white hover:scale-110 transition-all" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Email"}
      </button>
    </div>
  )
}


export default MyComponent;
