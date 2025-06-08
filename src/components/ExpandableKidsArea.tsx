"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface KidsImage {
  image: string;
  caption: string;
}

interface ExpandableKidsAreaProps {
  title: string;
  number: number;
  imageSrc: string;
  items: string[];
}

export default function ExpandableKidsArea({
  title,
  number,
  imageSrc,
  items,
}: ExpandableKidsAreaProps) {
  const [expanded, setExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Gera o array de imagens/legendas com base nos items
  const kidsImages: KidsImage[] = items.map((item, index) => ({
    // Alternar entre imagens disponíveis para simular várias fotos
    image: index % 2 === 0 ? "/images/brinquedos.png" : (
      index % 3 === 0 ? "/images/brinquedos.png" : "/images/mesas2.png"
    ),
    caption: item
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === kidsImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? kidsImages.length - 1 : prev - 1
    );
  };

  // Rolar a página para mostrar o conteúdo expandido
  useEffect(() => {
    if (expanded && cardRef.current) {
      // Adicionando um respiro de 20 pixels do topo
      const yOffset = -20;
      const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [expanded]);

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                transition-all duration-500 border border-gray-100 dark:border-gray-700
                ${expanded ? 'flex flex-col' : ''} mx-0 sm:mx-2`}
    >
      {/* Estrutura geral que muda entre linha e coluna */}
      <div className={`${expanded ? 'flex-col' : 'flex flex-col md:flex-row'}`}>

        {/* Imagem área das crianças */}
        <div
          className={`${
            expanded 
              ? "w-full h-64 sm:aspect-video sm:h-auto" 
              : "w-full md:w-1/3 aspect-[4/3] md:aspect-square"
          } relative overflow-hidden transition-all duration-500`}
        >
          {!expanded ? (
            // Modo normal - imagem estática
            <div className="w-full h-full relative">
              <Image
                src={imageSrc}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/40 to-amber-400/10 pointer-events-none" />
            </div>
          ) : (
            // Modo expandido - carrossel
            <div className="w-full h-full relative">
              {kidsImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${title} - ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <p className="text-lg md:text-xl font-medium">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}

              {/* Botões de navegação do carrossel */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                <button
                  onClick={prevSlide}
                  className="bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                  aria-label="Imagem anterior"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                  aria-label="Próxima imagem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Indicadores de slide */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {kidsImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Conteúdo à direita (modo não expandido) ou abaixo (modo expandido) */}
        <div className={`p-4 sm:p-6 md:p-8 ${expanded ? 'w-full' : 'w-full md:w-2/3'}`}>
          <div className="flex items-center mb-4 justify-between flex-wrap">
            <div className="flex items-center">
              <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mr-3 text-base sm:text-lg">
                {number}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
            </div>

            {/* Botão Ver Mais - reposicionado de volta à posição original */}
            <button
              onClick={() => setExpanded(!expanded)}
              className={`
                px-4 sm:px-6 py-2 sm:py-3 text-white rounded-xl transition-all duration-300 
                shadow-lg font-medium text-sm sm:text-base flex items-center justify-center mt-2 md:mt-0
                w-full sm:w-auto
                ${expanded 
                  ? "bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500" 
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                }
                transform hover:scale-[1.02] active:scale-[0.98]
              `}
            >
              {expanded ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                  Recolher
                </>
              ) : (
                <>
                  Explorar Área Kids
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {!expanded ? (
            <ul className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-base sm:text-lg">
              {items.map((item, index) => (
                <li key={index} className="py-1">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600 dark:text-gray-300 mb-4">
              <p className="mb-4">
                Nossa área kids foi projetada para garantir que os pequenos
                convidados tenham uma experiência incrível, permitindo que os
                pais aproveitem o evento com tranquilidade.
              </p>
              <p>
                Use as setas acima para navegar pelas fotos e conhecer mais
                sobre nosso espaço infantil!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
