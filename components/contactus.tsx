"use client";

import { useState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile"; // A wrapper for Cloudflare Turnstile
import Image from "next/image";

const MyComponent = () => {
  const turnstile = useTurnstile();
  const [email,setEmail] = useState("");
  console.log(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
  return (
    <div className=" w-screen h-screen flex justify-center items-center gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/images/linkedins.png"
                width={100}
                height={100}
                className=""
                alt="Linkedin"
              />
              <div className="font-bold">Connect On Linkedin</div>
            </div>
                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                  onVerify={(token) => {
                    fetch("/api/verify-captcha", {
                      method: "POST",
                      body: JSON.stringify({ token }),
                    }).then((response:any) => {
                      if (!response.ok) turnstile.reset();
                      setEmail(response.email);
                    }).catch(() => {
                      turnstile.reset();
                    });
                  }}
                />
                <div>
                  {email} 
                </div>
    </div>
    );
};

export default MyComponent;
