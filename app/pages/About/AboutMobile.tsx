import Image from "next/image";
import IconsMobile from "@/app/assets/tecsmobile.svg";
import { useEffect } from "react";
import { gsap } from "gsap";


const AboutMobile = () => {
  useEffect(() => {
    gsap.fromTo(
      ".habitus-video",
      { opacity: 0, x: -600 }, 
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-mobile",
          start: "top 90%",
          end: "bottom 30%",
          scrub: true,
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".habitus-content",
      { opacity: 0 }, 
      {
        opacity: 1, // Estado final: Opacidad 1
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-mobile", // Elemento que activa la animación
          start: "top 20%", // Inicia cuando el top del .about-mobile alcanza el 90% del viewport
          scrub: true, // Anima en función del desplazamiento del scroll
          toggleActions: "play none none none", // Control de acciones
        },
      }
    );
  }, []);

  return (
    <div className="w-full px-4" data-aos="fade">
      <p className="text-white font-bold text-4xl pt-10 pb-5">
        Desarrollo móvil
      </p>
      <p className="text-white text-lg mr-32">
        Creo aplicaciones móviles modernas, funcionales y adaptadas a las
        necesidades de los usuarios, especializado en frontend. Con un enfoque
        en la experiencia del usuario y la eficiencia, utilizo tecnologías
        avanzadas para desarrollar soluciones innovadoras que funcionen tanto en
        plataformas iOS como Android. Cada proyecto móvil está diseñado para
        ofrecer un rendimiento óptimo y una interfaz intuitiva, asegurando que
        las aplicaciones no solo cumplan con su propósito, sino que también
        superen las expectativas.
      </p>
      <p className="text-white font-bold text-2xl pt-10 pb-10">
        Tecnologías que uso
      </p>
      <Image
        src={IconsMobile}
        alt="Tecnologías móvil"
        width={300}
        height={300}
      />
      <p className="text-white font-bold text-2xl pt-10 -mb-20">Mi trabajo</p>

      <div className="flex flex-col w-full gap-10">
        {/* HabitusApp */}
        <div className="w-full flex flex-row">
          <div className="habitus-video w-[150%] relative -ml-96">
            {/* Video sin controles */}
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto pointer-events-none"
              style={{ background: "transparent" }}
            >
              <source src="/videos/HabitusVideo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="habitus-content text-white font-regular text-lg -ml-96 my-auto w-[60%]">
            Habitus es una app hecha 100% con React Native junto con FireBase
            que te ayuda a crear hábitos saludables y a llevar un control de tus
            actividades diarias. Estuve a cargo de toda la programación y parte
            del diseño de la app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
