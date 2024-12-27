"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full gap-10 px-5 h-screen -mt-12 mb-20"
      data-aos="fade"
    >
      {/* Imagen circular, ajustada para pantallas pequeñas y grandes */}
      <div className="w-[250px] h-[250px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden z-40 relative">
        <Image
          src="/pp.png"
          priority
          fill
          alt="Profile picture"
          className="object-cover object-center"
        />
      </div>

      <div className="text-center md:text-left md:w-[900px] w-full mb-5">
        <h1 className="text-3xl md:text-6xl py-5 md:py-10 md:w-full">
          <TypeAnimation
            sequence={[
              "Hello, I am Emiliano.",
              2000,
              "I am a frontend developer.",
              2000,
              "I am a Unity developer.",
              2000,
              "I am a iOS developer.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-extrabold text-custom-Brown"
          />
        </h1>

        <p className="text-center md:text-left text-base md:text-xl text-custom-Brown font-semibold">
          ¡Hola! Soy estudiante de Ingeniería en Animación y Videojuegos en la
          Universidad Panamericana. Me gusta mucho la programación y el diseño.
          Me caracterizo por ser una persona con ganas de aprender, organizada,
          con capacidad de trabajar en equipo y bajo presión. Mi objetivo es
          formar parte de una empresa competitiva, en la cual pueda
          desarrollarme como programador y/o diseñador con experiencia sólida.
        </p>
        <p className="text-center md:text-left text-base md:text-xl text-custom-Brown font-semibold mt-10">
          ¿Quieres saber más de mi? ¡Sigue bajando! 👇
        </p>
      </div>
    </div>
  );
};

export default Introduction;
