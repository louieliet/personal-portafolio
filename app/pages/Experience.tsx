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
          trigger: ".experience-section",
          start: "top 90%",
          end: "bottom 75%",
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
          trigger: ".experience-section",
          start: "top 95%",
          end: "bottom 75%",
          scrub: true,
          toggleActions: "play none none none",
        },
      },
    );
  }, []);
  return (
    <div className="flex text-white justify-center items-center -space-x-96 -mt-6">
      {/* Left side for the title */}
      <div className="w-[45%] flex justify-end items-center">
        <h1 className="timeline-title text-8xl font-bold transform -rotate-90 whitespace-nowrap z-10">
          [02] Mi experiencia
        </h1>
        <div className="absolute top-0 -z-2 opacity-50">
          <video
              autoPlay
              loop
              muted
              className="w-full h-auto pointer-events-none"
              style={{ background: "transparent", width: "65%" }}
            >
              <source src="/videos/expvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>

      {/* Right side for the timeline content */}
      <div className="timeline-content w-[45%]">
        <TimeLine />
      </div>
    </div>
  );
};
export default Experience;
