import Image from "next/image";
import IconsWeb from "@/app/assets/tecsweb.svg";

const AboutWeb = () => {
  return (
    <div className="w-full px-4">
      <p className="text-white font-bold text-4xl pt-10 pb-5">Desarrollo web</p>
      <p className="text-white text-lg mr-32">
        Construyo experiencias digitales intuitivas y eficientes que combinan
        creatividad y funcionalidad. Como desarrollador web, me especializo
        principalmente en frontend para crear sitios modernos y aplicaciones
        robustas utilizando tecnologías de vanguardia. Cada línea de código está
        orientada a resolver problemas, mejorar la experiencia del usuario y
        lograr resultados óptimos.
      </p>
      <p className="text-white font-bold text-2xl pt-10 pb-10">
        Tecnologías que uso
      </p>
      <Image src={IconsWeb} alt="Tecnologías web" width={600} height={600} />
      <p className="text-white font-bold text-2xl pt-10 pb-10">Mi trabajo</p>

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
            Página de Hus, realizada con NextJS, React + TypeScript y Tailwind
            CSS, donde me encargué principalmente del frontend, realizando
            componentes reutilizables y optimizando la velocidad de carga.
          </p>
        </div>
        {/* Página de Ragabe */}
        <div className="w-full flex flex-row">
          <p className="text-white font-regular text-lg mx-auto my-auto w-[20%]">
            Página para Ragabe, realizada con NextJS, React + TypeScript y
            Tailwind CSS, donde estuve totalmente a cargo del frontend,
            realizando componentes reutilizables, optimizando la velocidad de
            carga y asegurando la compatibilidad con dispositivos móviles.
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
  );
};

export default AboutWeb;
