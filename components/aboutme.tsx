"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

import AboutWeb from "@/components/development/web/AboutWeb"
import IconsMobile from "@/app/assets/tecsmobile.svg"
import IconsVideogames from "@/app/assets/tecsvideogame.svg"

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return (
        <div className='flex min-h-screen' data-aos="fade">
            <div className='text-start w-full px-20'>
                <h1 className='text-8xl text-white font-extrabold md:text-6xl py-5 md:py-10 md:w-full'>
                    [01] ¿Qué hago?
                </h1>

                {/* Desarrollo web */}
                <hr className="border-1 border-gray-100 mb-10" />
                <AboutWeb />

                {/* Desarrollo móvil */}
                <hr className="border-1 border-gray-100 mt-40 mb-14 w-[90%] mx-auto" />
                <div className="w-full px-4">

                    <p className='text-white font-bold text-4xl pt-10 pb-5'>
                        Desarrollo móvil
                    </p>
                    <p className='text-white text-lg mr-32'>
                        Creo aplicaciones móviles modernas, funcionales y adaptadas a las necesidades de los usuarios, especializado en frontend. 
                        Con un enfoque en la experiencia del usuario y la eficiencia, utilizo tecnologías avanzadas para desarrollar soluciones innovadoras que funcionen 
                        tanto en plataformas iOS como Android. Cada proyecto móvil está diseñado para ofrecer un rendimiento óptimo y una interfaz intuitiva, 
                        asegurando que las aplicaciones no solo cumplan con su propósito, sino que también superen las expectativas.
                    </p>
                    <p className='text-white font-bold text-2xl pt-10 pb-10'>
                        Tecnologías que uso
                    </p>
                    <Image src={IconsMobile} alt="Tecnologías móvil" width={300} height={300} />
                    <p className='text-white font-bold text-2xl pt-10 pb-10'>
                        Mi trabajo
                    </p>

                    <div className="flex flex-col w-full gap-10">
                        {/* Página de HUS */}
                        <div className="w-full flex flex-row">
                            <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white w-[70%]">
                                <iframe
                                    src="https://hus-demo.vercel.app/" 
                                    title="YouTube video"
                                    width="100%"
                                    height="500"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                    style={{ border: "none" }}
                                    />
                            </div>
                            <p className="text-white font-regular text-lg mx-auto my-auto w-[20%]">
                                Página de Hus, realizada con NextJS, React + TypeScript  y Tailwind CSS, donde
                                me encargué principalmente del frontend, realizando componentes
                                reutilizables y optimizando la velocidad de carga.
                            </p>
                        </div>
                        {/* Página de Ragabe */}
                        <div className="w-full flex flex-row">
                            <p className="text-white font-regular text-lg mx-auto my-auto w-[20%]">
                                Página para Ragabe, realizada con NextJS, React + TypeScript y Tailwind CSS, donde estuve totalmente a cargo del frontend,
                                realizando componentes reutilizables, optimizando la velocidad de carga y asegurando la compatibilidad con dispositivos móviles.
                            </p>
                            <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white w-[70%]">
                                <iframe
                                    src="https://dev.ragabe.git.chainsol.io/" 
                                    title="YouTube video"
                                    width="100%"
                                    height="500"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Desarrollo de videojuegos */}
                <hr className="border-1 border-gray-100 mt-40 mb-14 w-[90%] mx-auto" />
                <div className="w-full px-4">

                    <p className='text-white font-bold text-4xl pt-10 pb-5'>
                        Desarrollo de videojuegos
                    </p>
                    <p className='text-white text-lg mr-32'>
                        Doy vida a ideas creativas mediante el desarrollo de videojuegos inmersivos y dinámicos. 
                        Mi enfoque combina narrativa, diseño visual y mecánicas innovadoras para ofrecer experiencias interactivas y atractivas. 
                        Utilizando motores y tecnologías de última generación, me especializo en crear juegos optimizados para múltiples plataformas, 
                        asegurando un equilibrio perfecto entre rendimiento, jugabilidad y gráficos. Cada proyecto está diseñado con atención al detalle 
                        para proporcionar entretenimiento memorable y de alta calidad.
                    </p>
                    <p className='text-white font-bold text-2xl pt-10 pb-8'>
                        Tecnologías que uso
                    </p>
                    <Image src={IconsVideogames} alt="Tecnologías videojuegos" width={50} height={50} />
                    <p className='text-white font-bold text-2xl pt-8 pb-10'>
                        Mi trabajo
                    </p>

                    <div className="flex flex-col w-full gap-10">
                        {/* Página de HUS */}
                        <div className="w-full flex flex-row">
                            <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white w-[70%]">
                                <iframe
                                    src="https://hus-demo.vercel.app/" 
                                    title="YouTube video"
                                    width="100%"
                                    height="500"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                    style={{ border: "none" }}
                                    />
                            </div>
                            <p className="text-white font-regular text-lg mx-auto my-auto w-[20%]">
                                Página de Hus, realizada con NextJS, React + TypeScript  y Tailwind CSS, donde
                                me encargué principalmente del frontend, realizando componentes
                                reutilizables y optimizando la velocidad de carga.
                            </p>
                        </div>
                        {/* Página de Ragabe */}
                        <div className="w-full flex flex-row">
                            <p className="text-white font-regular text-lg mx-auto my-auto w-[20%]">
                                Página para Ragabe, realizada con NextJS, React + TypeScript y Tailwind CSS, donde estuve totalmente a cargo del frontend,
                                realizando componentes reutilizables, optimizando la velocidad de carga y asegurando la compatibilidad con dispositivos móviles.
                            </p>
                            <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white w-[70%]">
                                <iframe
                                    src="https://dev.ragabe.git.chainsol.io/" 
                                    title="YouTube video"
                                    width="100%"
                                    height="500"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default AboutMe;