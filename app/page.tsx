"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Header from "@/app/components/header";
import Introduction from "@/app/components/introduction";
import AboutMe from "@/app/components/aboutme";
import TimeLine from "@/app/components/timeline";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Animación del título y del TimeLine
    gsap.fromTo(
      ".timeline-title",
      { opacity: 0, x: -100 }, // Start state
      { 
        opacity: 1, x: 0, duration: 1.5, ease: "power3.out", 
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".timeline-content",
      { opacity: 0, x: 100 }, // Start state
      { 
        opacity: 1, x: 0, duration: 1.5, ease: "power3.out", 
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main>
      {/* Introduction Section */}
      <section id="intro" className="introduction-section intro-bg">
        <Header />
        <Introduction />
      </section>

      {/* About Me Section */}
      <section id="aboutme" className="aboutme-section aboutme-bg">
        <Header textcolor="white"/>
        <div className="w-full px-12 py-5">
          <AboutMe />
        </div>
      </section>

      
      {/* Timeline Section */}
      <section className="timeline-section min-h-full text-white flex justify-center items-center -space-x-96 aboutme-bg">
        {/* Left side for the title */}
        <div className="w-[45%] flex justify-end items-center">
          <Image 
            src="/images/arrow.svg" 
            alt="Arrow" 
            width={100} 
            height={100} 
            layout="intrinsic" 
            className="transform rotate-90"
          />
          <h1 className="timeline-title text-8xl font-bold transform -rotate-90 whitespace-nowrap mt-24">
            [02] Mi experiencia
          </h1>
        </div>

        {/* Right side for the timeline content */}
        <div className="timeline-content w-[45%] mt-40">
          <TimeLine />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-noise opacity-70"></div>
      </section>
    </main>
  );
}