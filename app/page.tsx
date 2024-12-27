"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "@/app/components/header";
import Introduction from "@/app/pages/Introduction";
import AboutMe from "@/app/pages/AboutMe";
import Experience from "@/app/pages/Experience";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="">
      {/* Introduction Section */}
      <section id="intro" className="introduction-section intro-bg min-h-screen">
        <Header />
        <Introduction />
      </section>

      {/* About Me Section */}
      <section id="aboutme" className="aboutme-section aboutme-bg min-h-screen">
        <Header textcolor="white" />
        <div className="w-full px-12 py-5">
          <AboutMe />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="timeline-section experience-bg min-h-screen">
        <Header textcolor="white" />
        <Experience />
      </section>
    </main>
  );
}
