import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface HeaderProps {
  textcolor?: string;
}

const Header: React.FC<HeaderProps> = ({ textcolor = "black" }) => {
  const [activeSection, setActiveSection] = useState<string>("intro");

  useEffect(() => {
    // Configura ScrollTrigger para cada sección
    const sections = ["intro", "aboutme", "experience", "contact"];
    sections.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 50%", // Cuando la sección esté a la mitad del viewport
        end: "bottom 50%",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      gsap.to(window, {
        scrollTo: { y: section.offsetTop, offsetY: 0 },
        duration: 1,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 w-full">
      <button
        className={`font-bold ${activeSection === "intro" ? "underline" : ""}`}
        onClick={() => scrollToSection("intro")}
        style={{ color: textcolor }}
      >
        EMG
      </button>
      <div className="flex flex-row gap-5">
        <button
          onClick={() => scrollToSection("aboutme")}
          className={`${
            activeSection === "aboutme" ? "font-bold underline" : ""
          }`}
          style={{ color: textcolor }}
        >
          ¿Qué hago?
        </button>
        <hr className="border border-gray-600 h-6" />
        <button
          onClick={() => scrollToSection("experience")}
          className={`${
            activeSection === "experience" ? "font-bold underline" : ""
          }`}
          style={{ color: textcolor }}
        >
          Experiencia
        </button>
        <hr className="border border-gray-600 h-6" />
        <button
          onClick={() => scrollToSection("contact")}
          className={`${
            activeSection === "contact" ? "font-bold underline" : ""
          }`}
          style={{ color: textcolor }}
        >
          Contacto
        </button>
      </div>
    </div>
  );
};

export default Header;