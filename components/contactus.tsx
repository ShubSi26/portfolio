"use client";

import { useState } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";
import Image from "next/image";
import Link from "next/link";

const MyComponent = () => {
  const turnstile = useTurnstile();
  const [email, setEmail] = useState("");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-4xl font-bold">Let&apos;s Connect</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
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
            {email === "" ? "Verify Captcha" : `Email: ${email}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
