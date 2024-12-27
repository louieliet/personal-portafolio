import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface HeaderProps {
  textcolor?: string;
}

gsap.registerPlugin(ScrollToPlugin);

const Header: React.FC<HeaderProps> = ({ textcolor = "black" }) => {
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
      <button className="font-bold" onClick={() => scrollToSection("intro")} style={{ color: textcolor }}>
        EMG
      </button>
      <div className="flex flex-row gap-5">
        <button
          onClick={() => scrollToSection("aboutme")}
          style={{ color: textcolor }}
        >
          ¿Qué hago?
        </button>
        <hr className="border border-gray-600 h-6" />
        <button
          onClick={() => scrollToSection("experience")}
          style={{ color: textcolor }}
        >
          Experiencia
        </button>
        <hr className="border border-gray-600 h-6" />
        <button
          onClick={() => scrollToSection("contact")}
          style={{ color: textcolor }}
        >
          Contacto
        </button>
      </div>
    </div>
  );
};

export default Header;