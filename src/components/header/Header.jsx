import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //verificando o scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full fixed top-0 left-0
        flex items-center justify-between
        px-6 py-4 z-50
        rounded-b-2xl
        transition-all duration-500 ease-in-out

        ${scrolled
          ? "bg-linear-to-b from-blue-900/40 to-blue-950/20 backdrop-blur-3xl shadow-2xl border-b border-white/10"
          : "bg-transparent shadow-none border-none"
        }
        text-gray-100
      `}
    >
      {/* Logo + ícone */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-wide z-50">
        <i className="fas fa-microchip text-cyan-400"></i>
        <span className="text-gray-100">FIMBATEC</span>
      </Link>

      {/* Overlay escuro mobile */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0
          bg-black/80 backdrop-blur-sm
          h-screen w-screen
          transition-opacity duration-500
          md:hidden z-40
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      ></div>

      {/* Menu */}
      <nav
        className={`
          flex flex-col gap-6
          absolute md:static
          top-0 right-0 h-screen md:h-auto
          w-72 md:w-auto

          bg-gray-900/50 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0
          border-l border-gray-800 md:border-none

          px-8 py-24 md:p-0
          md:flex md:flex-row md:items-center md:gap-8

          transition-transform duration-500 ease-in-out
          ${open
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none md:translate-x-0 md:pointer-events-auto"
          }
          z-50
          text-gray-100
        `}
      >
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/sobre" className="hover:text-cyan-400">Sobre</Link>
        <Link to="/servicos" className="hover:text-cyan-400">Serviços</Link>
        <Link to="#tecnologia" className="hover:text-cyan-400">Tecnologia</Link>
        <Link to="#recursos" className="hover:text-cyan-400">Recursos</Link>
        <Link to="#contato" className="hover:text-cyan-400">Contato</Link>
        <Link href="#faq" className="hover:text-cyan-400">FAQ</Link>

        <Link
          to="#orcamento"
          className="
            bg-blue-600 px-5 py-2 rounded-lg text-white font-semibold
            hover:bg-blue-700 transition text-center
          "
        >
          Solicite um orçamento
        </Link>
      </nav>

      {/* Botão mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-100 text-3xl z-50 transition-transform duration-300"
      >
        <i
          className={`
            fas transition-all duration-300
            ${open ? "fa-times rotate-180 scale-110" : "fa-bars rotate-0 scale-100"}
          `}
        ></i>
      </button>
    </header>
  );
}
