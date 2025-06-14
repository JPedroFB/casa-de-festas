"use client";

import { useRef } from "react";
import {
  GalleryHeader,
  ImageButton,
  NavigationControls,
  ScrollIndicator,
  ImageModal,
  GalleryStyles,
  DecorationGalleryProps,
  SupportImage,
  useModalControls,
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
  // Mapa de referências para os botões das imagens
  const imageButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
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
  // Hook para controle do modal
  const {
    showModal,
    activeIndex,
    setActiveIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useModalControls({
    allImages,
    imageButtonRefs,
    scrollContainerRef,
    galleryContainerRef,
  });

  // Função para registrar os botões de imagem
  const registerImageButton = (
    src: string,
    element: HTMLButtonElement | null
  ) => {
    if (element) {
      imageButtonRefs.current.set(src, element);
    }
  };  return (
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
                onClick={openModal}
                onRegisterRef={registerImageButton}
              />
            </div>{" "}
            {/* Grid de imagens de suporte organizadas em colunas - layout moderno */}
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-5 h-full">
              {supportImages.slice(0, 3).map((img: SupportImage) => (
                <ImageButton
                  key={img.src}
                  image={img}
                  onClick={openModal}
                  onRegisterRef={registerImageButton}
                  className="sm:h-[calc(33.33%-10px)]"
                />
              ))}
            </div>{" "}
            {/* Imagens adicionais com layout aprimorado */}
            {supportImages.slice(3).map((img: SupportImage) => (
              <ImageButton
                key={img.src}
                image={img}
                onClick={openModal}
                onRegisterRef={registerImageButton}
                className="sm:h-full"
              />
            ))}
          </div>{" "}
        </div>
      </div>{" "}      {/* Modal modernizado para visualização de imagens em tela cheia */}
      <ImageModal
        isOpen={showModal}
        images={allImages}
        activeIndex={activeIndex}
        theme={theme}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        onSetIndex={setActiveIndex}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />{" "}
      {/* Estilos aprimorados para animações e interações */}
      <GalleryStyles />
    </div>
  );
};

export default DecorationGallery;
