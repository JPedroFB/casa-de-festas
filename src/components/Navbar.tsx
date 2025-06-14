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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // Fecha o menu mobile após clicar em um link
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-500/90 via-purple-500/90 to-yellow-400/90 text-white transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-xl ${hennyPenny.className}`}>Mansão dos Sonhos</span>
          </Link>

          {/* Ícone de menu mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-md"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                // Ícone X quando menu está aberto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ícone de hambúrguer quando menu está fechado
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Links de navegação para desktop */}
          <div className="hidden md:flex items-center space-x-4">            <button
              onClick={() => scrollToSection("inicio")}
              className="px-4 py-2 rounded hover:bg-white/20 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("estrutura")}
              className="px-4 py-2 rounded hover:bg-white/20 transition-colors"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="px-4 py-2 rounded hover:bg-white/20 transition-colors"
            >
              Serviços
            </button>            <button
              onClick={() => scrollToSection("decoracoes")}
              className="px-4 py-2 rounded hover:bg-white/20 transition-colors"
            >
              Decorações
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-4 py-2 rounded bg-emerald-600/80 hover:bg-emerald-600 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>

        {/* Menu mobile - aparece abaixo do cabeçalho em telas pequenas */}
        <div
          className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-80" : "max-h-0"
          }`}
        >          <div className="flex flex-col pt-2 pb-3 space-y-1 border-t border-white/30 mt-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="px-4 py-3 hover:bg-white/20 transition-colors rounded-md"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("estrutura")}
              className="px-4 py-3 hover:bg-white/20 transition-colors rounded-md"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="px-4 py-3 hover:bg-white/20 transition-colors rounded-md"
            >
              Serviços
            </button>            <button
              onClick={() => scrollToSection("decoracoes")}
              className="px-4 py-3 hover:bg-white/20 transition-colors rounded-md"
            >
              Decorações
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-4 py-3 bg-emerald-600/80 hover:bg-emerald-600 transition-colors rounded-md"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
