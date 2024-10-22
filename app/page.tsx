"use client";
import { useEffect, useRef } from "react";
import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TimeLine from "@/components/timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      // GSAP animations
      gsap.from(".section", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".section",
          start: "top 80%", // Animation triggers when top of the section reaches 80% of the viewport
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <main className="h-screen">      
      <section className="section bg-[#3a3a3a] h-screen snap-start flex justify-center items-center text-center">
        <Introduction />
      </section>
      
      <section className="section bg-[#2b2b2b] h-screen snap-start text-white text-center p-10">
        <h1 className="text-6xl font-bold mb-10">Mi experiencia</h1>
        <TimeLine />
      </section>
    </main>
  );
}