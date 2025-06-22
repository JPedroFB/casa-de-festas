"use client";

import { useRef, useState } from "react";
import {
  GalleryHeader,
  ImageButton,
  GalleryStyles,
  DecorationGalleryProps,
  SupportImage,
  useScrollControls,
  ImageModal,
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

  // Estado para controle do modal de imagens
  const [activeImageIndex, setActiveImageIndex] = useState<number>(-1);

  // Criar array com todas as imagens para facilitar a navegação
  const allImages = [mainImage, ...supportImages];

  // Hook para controle de scroll da galeria
  const {
    scrollContainerRef,
  } = useScrollControls();

  // Manipulador para clique nas imagens
  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div 
      ref={galleryContainerRef}
      className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-3 md:p-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
    >      {/* Cabeçalho com tema e fotógrafo - design moderno */}
      <GalleryHeader theme={theme} photographer={photographer} />{" "}
        {/* Galeria de imagens com scroll horizontal (visível apenas quando não há visualização ampliada) */}
      <div className={`relative transition-all duration-300 ${activeImageIndex >= 0 ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100'}`}>
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto pb-3 sm:pb-5 scroll-smooth hide-scrollbar h-[300px] sm:h-[420px] md:h-[540px]"
        >
          <div className="flex gap-3 sm:gap-5 w-max h-full">
            {/* Imagem principal - centralizada no desktop e com respiros adequados */}
            <div className="flex flex-col">
              <ImageButton
                image={mainImage}
                isMain={true}
                onClick={handleImageClick}
                index={0}
              />
            </div>{" "}
            
            {/* Grid de imagens de suporte organizadas em colunas - layout moderno */}
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-5 h-full">
              {supportImages.slice(0, 3).map((img: SupportImage, idx: number) => (
                <ImageButton
                  key={img.src}
                  image={img}
                  className="sm:h-[calc(33.33%-10px)]"
                  onClick={handleImageClick}
                  index={idx + 1}
                />
              ))}
            </div>{" "}
            
            {/* Imagens adicionais com layout aprimorado */}
            {supportImages.slice(3).map((img: SupportImage, idx: number) => (
              <ImageButton
                key={img.src}
                image={img}
                className="sm:h-full"
                onClick={handleImageClick}
                index={idx + 4}
              />
            ))}
          </div>{" "}
        </div>
      </div>{" "}
        {/* Container do carrossel de visualização ampliada */}      <div className={`relative transition-all duration-300 ${activeImageIndex >= 0 ? 'opacity-100 max-h-[800px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>        {/* Botão para retornar à visualização da galeria - visível apenas em telas maiores */}
        <button 
          onClick={() => setActiveImageIndex(-1)}
          className="hidden sm:flex absolute top-2 left-1/2 transform -translate-x-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-medium items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para a galeria
        </button>

        <div className="h-[300px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
          <ImageModal 
            isOpen={activeImageIndex >= 0}
            images={allImages}
            activeIndex={activeImageIndex}
            theme={theme}
            onSetIndex={setActiveImageIndex}
          />
        </div>
      </div>
      
      {/* Estilos aprimorados para animações e interações */}
      <GalleryStyles />
    </div>
  );
};

export default DecorationGallery;
