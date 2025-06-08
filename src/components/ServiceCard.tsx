"use client";

import Image from "next/image";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  colorClass: string;
  icon: React.ReactNode;
  items: string[];
  buttonText?: string;
  buttonLink?: string;
}

// Interface para as imagens do cardápio
interface MenuImage {
  src: string;
  alt: string;
}

// Interface para as categorias do cardápio
interface MenuCategory {
  title: string;
  items: string[];
}

export default function ServiceCard({
  title,
  imageSrc,
  colorClass,
  icon,
  items,
  buttonText,
  buttonLink,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Imagens do cardápio (amostra)
  const menuImages: MenuImage[] = [
    { src: "/images/mesas.png", alt: "Salgados fritos" },
    { src: "/images/mesas2.png", alt: "Salgados de forno" },
    { src: "/images/brinquedos.png", alt: "Bebidas" },
  ];

  // Categorias do cardápio
  const menuCategories: MenuCategory[] = [
    {
      title: "Salgados Fritos",
      items: [
        "Coxinha de frango",
        "Bolinha de queijo",
        "Risole de camarão",
        "Kibe",
        "Pastel de carne",
      ],
    },
    {
      title: "Salgados de Forno",
      items: [
        "Empada de frango",
        "Folhado de presunto e queijo",
        "Esfirra de carne",
        "Mini quiche de legumes",
        "Pão de queijo",
      ],
    },
  ];

  const colorVariants = {
    purple: {
      bg: "from-purple-600/40 to-purple-400/10",
      button: "bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500",
    },
    indigo: {
      bg: "from-indigo-600/40 to-indigo-400/10",
      button: "bg-gradient-to-r from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500",
    },
    blue: {
      bg: "from-blue-600/40 to-blue-400/10",
      button: "bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500",
    },
  };

  const colors = colorVariants[colorClass as keyof typeof colorVariants];

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImage((prev) => (prev === menuImages.length - 1 ? 0 : prev + 1));
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? menuImages.length - 1 : prev - 1));
  };

  // Função para alternar a expansão do card
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl
                transition-all duration-500 border border-gray-100 dark:border-gray-700
                ${expanded ? "flex flex-col" : ""}`}
    >
      {/* Estrutura geral que muda entre linha e coluna */}
      <div className={`${expanded ? "flex-col" : "flex flex-col md:flex-row"}`}>
        {/* Imagem */}
        <div
          className={`
            ${expanded ? "w-full aspect-video" : "md:w-1/3 aspect-square"}
            relative overflow-hidden transition-all duration-500
          `}
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
              <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} pointer-events-none`} />
              <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-4xl">
                {title.split(" ")[0]}
              </div>
            </div>
          ) : (
            // Modo expandido - carrossel
            <div className="w-full h-full relative">
              {menuImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <p className="text-lg md:text-xl font-medium">{item.alt}</p>
                  </div>
                </div>
              ))}

              {/* Botões de navegação do carrossel */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                <button
                  onClick={prevImage}
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
                  onClick={nextImage}
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
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className={`p-6 md:p-8 ${expanded ? "w-full" : "md:w-2/3"}`}>
          <div className="flex items-center mb-4 justify-between flex-wrap">
            <div className="flex items-center">
              {icon}
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>

            {/* Botão */}
            {buttonText && (
              <button
                onClick={toggleExpand}
                className={`
                  px-6 py-3 text-white rounded-xl transition-all duration-300 
                  shadow-lg font-medium text-base flex items-center justify-center mt-2 md:mt-0
                  ${colors.button}
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
                    Fechar Cardápio
                  </>
                ) : (
                  <>
                    {buttonText}
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
            )}
          </div>

          {/* Conteúdo principal do card */}
          {!expanded ? (
            <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
              {items.map((item, index) => (
                <li key={index} className="py-1">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600 dark:text-gray-300">
              <p className="mb-6 text-lg">
                Nosso cardápio foi elaborado por chefs especializados para proporcionar uma experiência gastronômica única. Use as setas acima para navegar pelas fotos e conhecer as opções do nosso buffet premium!
              </p>

              {/* Lista de categorias do cardápio */}
              <div className="space-y-6">
                {menuCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className={`text-xl font-semibold mb-3 text-${colorClass}-600`}>
                      {category.title}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="py-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
