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
      
      {/* Experience Section */}
      <section className="timeline-section aboutme-bg">
        <Experience />
      </section>
    </main>
  );
}