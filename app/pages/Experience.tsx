import TimeLine from "@/app/components/timeline";
import { useEffect } from "react";
import { gsap } from "gsap";

const Experience = () => {
  useEffect(() => {
    gsap.fromTo(
      ".timeline-title",
      { opacity: 0, x: -300 }, 
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 95%",
          end: "bottom 5%",
          scrub: true,
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".timeline-content",
      { opacity: 0, x: 300 }, 
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 95%",
          end: "bottom 5%",
          scrub: true,
          toggleActions: "play none none none",
        },
      },
    );
  }, []);
  return (
    <div className="min-h-full text-white flex justify-center items-center -space-x-96">
      {/* Left side for the title */}
      <div className="w-[45%] flex justify-end items-center">
        <h1 className="timeline-title text-8xl font-bold transform -rotate-90 whitespace-nowrap mt-24">
          [02] Mi experiencia
        </h1>
      </div>

      {/* Right side for the timeline content */}
      <div className="timeline-content w-[45%] mt-40">
        <TimeLine />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-70"></div>
    </div>
  );
};
export default Experience;
