"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {

    return (
        <div className='flex flex-col md:flex-row items-center justify-center min-h-screen w-full md:gap-20 gap-10 px-5'>
            {/* Imagen circular, ajustada para pantallas pequeñas y grandes */}
            <div className='w-[250px] h-[250px] md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden z-40'>
                <Image 
                    src="/pp.png" 
                    priority 
                    width="400"  
                    height="400" 
                    alt="Profile picture" 
                    className='object-cover object-center' 
                />
            </div>

            <div className='text-center md:text-left md:w-[600px] w-full mb-5'>
                <h1 className='text-3xl md:text-4xl py-5 md:py-10'>
                    <TypeAnimation
                        sequence={[
                            'Hello, I am Emiliano.',
                            2000,
                            'I am a frontend developer.',
                            2000,
                            'I am a Unity developer.',
                            2000,
                            'I am a iOS developer.',
                            2000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className='font-extrabold text-white'
                    />
                </h1>

                <p className='text-center md:text-left text-base md:text-xl text-white font-semibold'>
                    ¡Hola! Soy estudiante de Ingeniería en Animación y Videojuegos en la Universidad Panamericana. 
                    Me gusta mucho la programación y el diseño. Me caracterizo por ser una persona con ganas de aprender, organizada, con capacidad de trabajar en equipo y bajo presión. 
                    Mi objetivo es formar parte de una empresa competitiva, en la cual pueda desarrollarme como programador y/o diseñador con experiencia sólida.
                </p>
            </div>
        </div>
    )
}

export default Introduction;