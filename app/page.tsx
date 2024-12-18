"use client";
import { useEffect } from "react";
import Introduction from "@/components/introduction";
import TimeLine from "@/components/timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
      <section id="intro" className="introduction-section min-h-full flex justify-center items-center text-center intro-bg">
        <Introduction />
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section min-h-full flex justify-center items-center text-white">
        <div className="about-content w-[80%]">
          <h1 className="about-title text-8xl font-bold">[01] Sobre mí</h1>
          <p className="about-text text-2xl mt-10">
            Soy un desarrollador web con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles. 
            Me apasiona la programación y el diseño web, y siempre estoy buscando nuevas tecnologías para mejorar mis habilidades.
          </p>
        </div>
        <div className="absolute inset-0 pointer-events-none bg-noise opacity-70"></div>
      </section>

      
      {/* Timeline Section */}
      <section className="timeline-section min-h-full text-white flex justify-center items-center -space-x-96 timeline-bg">
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