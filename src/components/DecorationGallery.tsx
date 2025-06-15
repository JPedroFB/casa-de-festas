"use client";

import { useRef } from "react";
import {
  GalleryHeader,
  ImageButton,
  NavigationControls,
  ScrollIndicator,
  GalleryStyles,
  DecorationGalleryProps,
  SupportImage,
  useScrollControls,
} from "./DecorationGallery/";

// Dados fake para validar o layout
const DEFAULT_THEME = "Unicórnio Encantado";
const DEFAULT_PHOTOGRAPHER = {
  name: "João Silva",
  instagram: "@fotografiasmagicas",
  instagramProfile: "fotografiasmagicas",
  profileImage: "https://i.pravatar.cc/100", // Avatar aleatório para teste
};

const DecorationGallery = ({
  mainImage,
  supportImages,
  theme = DEFAULT_THEME,
  photographer = DEFAULT_PHOTOGRAPHER,
}: DecorationGalleryProps) => {
  // Referência para o container da galeria para rolagem
  const galleryContainerRef = useRef<HTMLDivElement>(null);

  // Criar array com todas as imagens para facilitar a navegação
  const allImages = [mainImage, ...supportImages];

  // Hook para controle de scroll da galeria
  const {
    scrollContainerRef,
    showScrollIndicators,
    scrollLeft,
    scrollRight,
  } = useScrollControls();

  return (
    <div 
      ref={galleryContainerRef}
      className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-3 md:p-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
    >
      {/* Cabeçalho com tema e fotógrafo - design moderno */}
      <GalleryHeader theme={theme} photographer={photographer} />{" "}
      {/* Galeria de imagens com scroll horizontal e controles de navegação */}
      <div className="relative">
        {/* Botões de navegação (visíveis em telas maiores) */}
        <NavigationControls
          onScrollLeft={scrollLeft}
          onScrollRight={scrollRight}
          showScrollIndicators={showScrollIndicators}
        />{" "}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto pb-3 sm:pb-5 scroll-smooth hide-scrollbar h-[300px] sm:h-[420px] md:h-[540px]"
        >
          <div className="flex gap-3 sm:gap-5 w-max h-full">
            {" "}
            {/* Imagem principal - centralizada no desktop e com respiros adequados */}
            <div className="flex flex-col">
              <ImageButton
                image={mainImage}
                isMain={true}
              />
            </div>{" "}
            {/* Grid de imagens de suporte organizadas em colunas - layout moderno */}
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-5 h-full">
              {supportImages.slice(0, 3).map((img: SupportImage) => (
                <ImageButton
                  key={img.src}
                  image={img}
                  className="sm:h-[calc(33.33%-10px)]"
                />
              ))}
            </div>{" "}
            {/* Imagens adicionais com layout aprimorado */}
            {supportImages.slice(3).map((img: SupportImage) => (
              <ImageButton
                key={img.src}
                image={img}
                className="sm:h-full"
              />
            ))}
          </div>{" "}
        </div>
      </div>{" "}
      {/* Estilos aprimorados para animações e interações */}
      <GalleryStyles />
    </div>
  );
};

export default DecorationGallery;
