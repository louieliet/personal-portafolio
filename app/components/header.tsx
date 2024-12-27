import Link from "next/link";

interface HeaderProps {
  textcolor?: string;
}

const Header: React.FC<HeaderProps> = ({ textcolor = "black" }) => {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 w-full">
      <p className="font-bold" style={{ color: textcolor }}>
        EMG
      </p>
      <div className="flex flex-row gap-5">
        <Link href="/about" style={{ color: textcolor }}>
          ¿Qué hago?
        </Link>
        <hr className="border border-gray-600 h-6" />
        <Link href="/projects" style={{ color: textcolor }}>
          Experiencia
        </Link>
        <hr className="border border-gray-600 h-6" />
        <Link href="/contact" style={{ color: textcolor }}>
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Header;
