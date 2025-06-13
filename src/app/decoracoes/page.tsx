"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import DecorationGallery from "../../components/DecorationGallery";
import ContactSection from "../../components/ContactSection";
import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function Decoracoes() {
  // Dados das decorações
  const decorationThemes = [
    {
      id: "aniversario",
      title: "Aniversário Encantado",
      mainImage: {
        src: "/images/mesas.png",
        alt: "Mesa de bolo para festa de aniversário",
      },
      supportImages: [
        {
          src: "/images/mesas.png",
          alt: "Detalhe do bolo",
          width: 800,
          height: 600,
        },
        {
          src: "/images/mesas2.png",
          alt: "Decoração de parede",
          width: 400,
          height: 600,
        },
        {
          src: "/images/brinquedos.png",
          alt: "Docinhos e cupcakes",
          width: 600,
          height: 400,
        },
        {
          src: "/images/mesas2.png",
          alt: "Arranjos florais",
          width: 800,
          height: 800,
        },
        {
          src: "/images/brinquedos.png",
          alt: "Lembrancinhas",
          width: 400,
          height: 300,
        },
      ],
      description:
        "Transforme o aniversário em um evento mágico com nossa decoração temática personalizada. A mesa principal é o centro das atenções, com arranjos cuidadosamente planejados que encantam crianças e adultos.",
    },
    {
      id: "casamento",
      title: "Casamento Elegante",
      mainImage: {
        src: "/images/mesas2.png",
        alt: "Mesa de bolo para casamento",
      },
      supportImages: [
        {
          src: "/images/mesas2.png",
          alt: "Mesa do bolo de casamento",
          width: 800,
          height: 600,
        },
        {
          src: "/images/mesas.png",
          alt: "Arranjo floral central",
          width: 400,
          height: 600,
        },
        {
          src: "/images/brinquedos.png",
          alt: "Decoração da cerimônia",
          width: 800,
          height: 400,
        },
        {
          src: "/images/mesas.png",
          alt: "Iluminação especial",
          width: 500,
          height: 800,
        },
      ],
      description:
        "Criamos ambientes sofisticados para o dia mais importante da sua vida. Nossa decoração para casamentos combina elegância e romantismo, com atenção meticulosa a cada detalhe para criar uma atmosfera inesquecível.",
    },
    {
      id: "infantil",
      title: "Festa Infantil Temática",
      mainImage: {
        src: "/images/brinquedos.png",
        alt: "Decoração infantil temática",
      },
      supportImages: [
        {
          src: "/images/brinquedos.png",
          alt: "Mesa temática infantil",
          width: 800,
          height: 600,
        },
        {
          src: "/images/mesas.png",
          alt: "Balões coloridos",
          width: 600,
          height: 400,
        },
        {
          src: "/images/mesas2.png",
          alt: "Personagens em decoração",
          width: 400,
          height: 600,
        },
        {
          src: "/images/brinquedos.png",
          alt: "Área de atividades",
          width: 800,
          height: 500,
        },
      ],
      description:
        "Realize o sonho das crianças com nossas decorações temáticas que transformam qualquer espaço em um mundo de fantasia. Personagens favoritos, cores vibrantes e detalhes surpreendentes garantem uma festa memorável.",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("todos");

  const filteredDecorations =
    activeFilter === "todos"
      ? decorationThemes
      : decorationThemes.filter((theme) => theme.id === activeFilter);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-indigo-950 to-purple-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px] text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300 ${hennyPenny.className}`}>Decorações dos Sonhos</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Transformamos qualquer ambiente em um cenário mágico para seu evento
            especial, com decorações exclusivas e personalizadas.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-pink-100 py-8">
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px]">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("todos")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === "todos"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveFilter("aniversario")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === "aniversario"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              Aniversários
            </button>
            <button
              onClick={() => setActiveFilter("casamento")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === "casamento"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              Casamentos
            </button>
            <button
              onClick={() => setActiveFilter("infantil")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === "infantil"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              Infantil
            </button>
          </div>
        </div>
      </section>

      {/* Seção de galerias */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-2.5 sm:px-4 w-full sm:w-[90%] max-w-[1920px]">
          <div className="grid grid-cols-1 gap-12">
            {filteredDecorations.map((theme) => (
              <DecorationGallery
                key={theme.id}
                mainImage={theme.mainImage}
                supportImages={theme.supportImages}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solicite um Orçamento */}
      <ContactSection />

      {/* Footer */}
      <footer className="w-full bg-indigo-950 text-white py-10 border-t border-indigo-800">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Mansão dos Sonhos - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
