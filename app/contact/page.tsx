'use client';
import Contact from "@/components/contactus";
import { GlobeDemo } from "@/components/worldGlobe";
import { ShootingStars } from "@/components/shootingStars";
import { StarsBackground } from "@/components/starBackground";

export default function ContactPage() {
  return (<div className="h-screen w-screen flex flex-row justify-center items-center ">
    <Contact />
    <GlobeDemo />
    <ShootingStars />
    <StarsBackground />

  </div>);
}
