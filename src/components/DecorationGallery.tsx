"use client";

import { useState, useEffect, useRef } from "react";
import {
  GalleryHeader,
  ImageButton,
  NavigationControls,
  ScrollIndicator,
  ImageModal,
  GalleryStyles,
  DecorationGalleryProps,
  SupportImage,
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
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicators, setShowScrollIndicators] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Mapa de referências para os botões das imagens
  const imageButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Criar array com todas as imagens para facilitar a navegação
  const allImages = [mainImage, ...supportImages];

  // Encontrar o índice da imagem selecionada no array completo
  const findImageIndex = (src: string) => {
    return allImages.findIndex((img) => img.src === src);
  };

  // Função para registrar os botões de imagem
  const registerImageButton = (
    src: string,
    element: HTMLButtonElement | null
  ) => {
    if (element) {
      imageButtonRefs.current.set(src, element);
    }
  }; // Funções para abrir o modal e configurar a imagem ativa
  const openModal = (src: string) => {
    const index = findImageIndex(src);
    setActiveIndex(index >= 0 ? index : 0);

    // Primeiro centralize a imagem clicada na galeria
    const imageButton = imageButtonRefs.current.get(src);
    if (imageButton && scrollContainerRef.current) {
      // Centralizar a imagem com animação suave
      imageButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    // Pequeno atraso para dar tempo da animação de centralização da galeria ocorrer
    setTimeout(() => {
      // Rolar para o topo do componente para garantir visibilidade total do modal
      window.scrollTo({
        top: window.scrollY + window.innerHeight / 2 - 300,
        behavior: "smooth",
      });

      setShowModal(true);
      document.body.style.overflow = "hidden"; // Previne rolagem do body
    }, 300); // Delay para a animação de centralização terminar
  };

  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ""; // Restaura rolagem do body
  };

  // Navegação entre imagens no modal
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Fechar modal com escape ou ao clicar fora
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  // Navegação por gesto de arrastar no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      if (touchStartX - touchEndX > 50) {
        nextImage();
      } else if (touchEndX - touchStartX > 50) {
        prevImage();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Funções para rolagem horizontal com botões
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Detecção de quando chegamos no início ou fim da rolagem
  useEffect(() => {
    const checkScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      // Se estamos no final ou perto do final, esconda indicadores
      if (
        scrollLeft + clientWidth >= scrollWidth - 10 ||
        scrollWidth <= clientWidth
      ) {
        setShowScrollIndicators(false);
      } else {
        setShowScrollIndicators(true);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Verificação inicial
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  // Limpar efeitos quando o componente é desmontado
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-3 md:p-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      {/* Cabeçalho com tema e fotógrafo - design moderno */}
      <GalleryHeader theme={theme} photographer={photographer} />      <ScrollIndicator showScrollIndicators={showScrollIndicators} />      {/* Galeria de imagens com scroll horizontal e controles de navegação */}
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
          <div className="flex gap-3 sm:gap-5 w-max h-full">            {/* Imagem principal - centralizada no desktop e com respiros adequados */}
            <div className="flex flex-col">
              <ImageButton
                image={mainImage}
                isMain={true}
                onClick={openModal}
                onRegisterRef={registerImageButton}
              />
            </div>            {/* Grid de imagens de suporte organizadas em colunas - layout moderno */}
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
            </div>{" "}            {/* Imagens adicionais com layout aprimorado */}
            {supportImages.slice(3).map((img: SupportImage) => (
              <ImageButton
                key={img.src}
                image={img}
                onClick={openModal}
                onRegisterRef={registerImageButton}
                className="sm:h-full"
              />
            ))}
          </div>        </div>
        <ScrollIndicator showScrollIndicators={showScrollIndicators} />
      </div>      {/* Modal modernizado para visualização de imagens em tela cheia */}
      <ImageModal
        isOpen={showModal}
        images={allImages}
        activeIndex={activeIndex}
        theme={theme}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        onSetIndex={setActiveIndex}
      />      {/* Estilos aprimorados para animações e interações */}
      <GalleryStyles />
    </div>
  );
};

export default DecorationGallery;
