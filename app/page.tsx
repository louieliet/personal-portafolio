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
    // GSAP ScrollTrigger animation between sections
    gsap.fromTo(
      ".timeline-section",
      { opacity: 0, y: 100 }, // Start values
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: ".timeline-section", // Element that triggers the animation
          start: "top 80%", // Start when the top of the timeline section hits 80% of the viewport
          end: "bottom 20%", // When to end the animation
          scrub: true, // Smooth animation progress as the user scrolls
        },
      }
    );
  }, []);

  return (
    <main>
      {/* Introduction Section */}
      <section className="introduction-section h-screen bg-gray-800 flex justify-center items-center text-center">
        <Introduction />
      </section>
      
      {/* Timeline Section */}
      <section className="timeline-section h-screen bg-gray-900 text-white text-center p-10">
        <h1 className="text-6xl font-bold mb-10">Mi experiencia</h1>
        <TimeLine />
      </section>
    </main>
  );
}