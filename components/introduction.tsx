"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {

    return (
        <div className='flex items-center justify-center min-h-screen w-full gap-40'>
            <div className='w-[400px] h-[400px] rounded-full overflow-hidden z-40'>
                <Image 
                    src="/pp.png" 
                    priority 
                    width="400"  
                    height="400" 
                    alt="Profile picture" 
                    className='object-cover object-center' 
                />
            </div>

            <div className='text-center w-[600px] mb-5'>
                <h1 className='text-4xl py-10 md:py-1' >
                    <TypeAnimation
                        sequence={[
                            'Hello, I am Emiliano',
                            2000,
                            'I am a frontend developer',
                            2000,
                            'I am a Unity developer',
                            2000,
                            'I am a iOS developer',
                            2000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className='font-bold text-white'
                    />
                </h1>

                <p className='text-xl text-white'>
                    ¡Hola! Soy estudiante de Ingeniería en Animación y Videojuegos en la Universidad Panamericana. 
                    Me gusta mucho la programación y el diseño. Me caracterizo por ser una persona con ganas de aprender, organizada, con capacidad de trabajar en equipo y bajo presión. 
                    Mi objetivo es formar parte de una empresa competitiva, en la cual pueda desarrollarme como programador y/o diseñador con experiencia sólida.
                </p>
            </div>
            
        </div>
    )
}

export default Introduction;