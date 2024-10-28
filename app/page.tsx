"use client";
import { useEffect } from "react";
import Introduction from "@/components/introduction";
import TimeLine from "@/components/timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
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
      <section id="intro" className="introduction-section h-screen custom-bg flex justify-center items-center text-center">
        <Introduction />
      </section>
      
      {/* Timeline Section */}
      <section className="timeline-section h-screen bg-gray-900 text-white flex justify-center items-center -space-x-96">
        {/* Left side for the title */}
        <div className="w-[45%] flex justify-end items-center">
          <h1 className="timeline-title text-8xl font-bold transform -rotate-90 whitespace-nowrap">
            [01] Mi experiencia
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