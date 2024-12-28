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
        x: 200,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".timeline-content",
      { opacity: 0, x: 300 },
      {
        opacity: 1,
        x: -50,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 95%",
          end: "bottom 80%",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex text-white justify-center items-center">
      {/* Left side for the title */}
      <div className="w-[45%] relative h-screen flex justify-center items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-[90%] object-cover pointer-events-none opacity-20 mt-5 rounded-r-[40px]"
        >
          <source src="/videos/expvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Title */}
        <h1 className="timeline-title text-7xl font-bold transform -rotate-90 whitespace-nowrap z-10">
          [02] Mi experiencia
        </h1>
      </div>

      {/* Right side for the timeline content */}
      <div className="timeline-content w-[55%]">
        <TimeLine />
      </div>
    </div>
  );
};

export default Experience;