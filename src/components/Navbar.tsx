"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < scrollPosition) {
        // Rolando para cima - mostrar navbar
        setShowNavbar(true);
      } else if (currentScrollY > 100) {
        // Rolando para baixo e já passou do início - esconder navbar
        setShowNavbar(false);
      }

      setScrollPosition(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página inicial, rola até a seção
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        // Rolagem suave para a seção
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se não estamos na página inicial, redireciona para a página inicial com âncora
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-indigo-950 text-white transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-xl hidden sm:inline ${hennyPenny.className}`}>Mansão dos Sonhos</span>
        </Link>

        {/* Links de navegação */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          <button
            onClick={() => scrollToSection("inicio")}
            className="px-2 sm:px-4 py-2 rounded hover:bg-purple-900 transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("estrutura")}
            className="px-2 sm:px-4 py-2 rounded hover:bg-purple-900 transition-colors"
          >
            Estrutura
          </button>
          <button
            onClick={() => scrollToSection("decoracoes")}
            className="px-2 sm:px-4 py-2 rounded hover:bg-purple-900 transition-colors"
          >
            Decorações
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="px-2 sm:px-4 py-2 rounded hover:bg-purple-900 transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="px-2 sm:px-4 py-2 rounded bg-purple-700 hover:bg-purple-600 transition-colors"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
