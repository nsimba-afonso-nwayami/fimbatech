import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full fixed top-0 left-0 
        bg-blue-950 text-gray-100 shadow-lg 
        flex items-center justify-between 
        px-6 py-4 z-50
      "
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide z-50">
        FIMBATECH
      </Link>

      {/* MENU ÚNICO */}
      <nav
        className={`
          flex flex-col gap-6 
          absolute md:static 
          top-full left-0 w-full md:w-auto
          bg-blue-900 md:bg-transparent
          px-6 py-6 md:p-0
          md:flex md:flex-row md:items-center md:gap-8
          transition-all duration-300 ease-in-out
          z-40

          ${open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4 md:opacity-100 md:pointer-events-auto md:translate-y-0"
          }
        `}
      >
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <a href="#sobre" className="hover:text-cyan-400">Sobre</a>
        <a href="#servicos" className="hover:text-cyan-400">Serviços</a>
        <a href="#tecnologia" className="hover:text-cyan-400">Tecnologia</a>
        <a href="#recursos" className="hover:text-cyan-400">Recursos</a>
        <a href="#contato" className="hover:text-cyan-400">Contato</a>
        <a href="#faq" className="hover:text-cyan-400">FAQ</a>

        <a
          href="#orcamento"
          className="
            bg-violet-600 px-5 py-2 rounded-lg text-white font-semibold 
            hover:bg-violet-700 transition text-center
          "
        >
          Solicite um orçamento
        </a>
      </nav>

      {/* BOTÃO MOBILE ANIMADO */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden text-gray-100 text-3xl z-50 
          transition-transform duration-300
        "
      >
        <i
          className={`
            fas transition-all duration-300
            ${open 
              ? "fa-times rotate-180 scale-110" 
              : "fa-bars rotate-0 scale-100"}
          `}
        ></i>
      </button>
    </header>
  );
}
