"use client";
import "aos/dist/aos.css";
import AboutWeb from "@/app/pages/About/AboutWeb";
import AboutMobile from "@/app/pages/About/AboutMobile";

const AboutMe = () => {
  return (
    <div className="flex min-h-screen">
      <div className="text-start w-full px-20">
        <h1 className="text-8xl text-white font-extrabold md:text-6xl py-5 md:py-10 md:w-full">
          [01] ¿Qué hago?
        </h1>

        {/* Desarrollo web */}
        <hr className="border-1 border-gray-100 mb-10" />
        <div className="about-web">
          <AboutWeb />
        </div>

        {/* Desarrollo móvil */}
        <hr className="border-1 border-gray-100 mt-40 mb-14 w-[90%] mx-auto" />
        <div className="about-mobile">
          <AboutMobile />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
