"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutWeb from "@/app/pages/About/AboutWeb";
import AboutMobile from "@/app/pages/About/AboutMobile";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen" data-aos="fade">
      <div className="text-start w-full px-20">
        <h1 className="text-8xl text-white font-extrabold md:text-6xl py-5 md:py-10 md:w-full">
          [01] ¿Qué hago?
        </h1>

        {/* Desarrollo web */}
        <hr className="border-1 border-gray-100 mb-10" />
        <AboutWeb />

        {/* Desarrollo móvil */}
        <hr className="border-1 border-gray-100 mt-40 mb-14 w-[90%] mx-auto" />
        <AboutMobile />
      </div>
    </div>
  );
};

export default AboutMe;
