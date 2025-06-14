import { useState, useEffect, useRef } from "react";
import { MainImage, SupportImage } from "./types";

interface UseModalControlsProps {
  allImages: (MainImage | SupportImage)[];
  imageButtonRefs: React.MutableRefObject<Map<string, HTMLButtonElement>>;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  galleryContainerRef?: React.RefObject<HTMLDivElement | null>;
}

export const useModalControls = ({
  allImages,
  imageButtonRefs,
  scrollContainerRef,
  galleryContainerRef,
}: UseModalControlsProps) => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Encontrar o índice da imagem selecionada no array completo
  const findImageIndex = (src: string) => {
    return allImages.findIndex((img) => img.src === src);
  };

  // Navegação entre imagens no modal (mais rápida)
  const nextImage = () => {
    if (isNavigating) return; // Previne cliques múltiplos
    setIsNavigating(true);
    setActiveIndex((prev) => (prev + 1) % allImages.length);

    // Reset do flag após um delay curto
    setTimeout(() => setIsNavigating(false), 100);
  };

  const prevImage = () => {
    if (isNavigating) return; // Previne cliques múltiplos
    setIsNavigating(true);
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

    // Reset do flag após um delay curto
    setTimeout(() => setIsNavigating(false), 100);
  };

  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ""; // Restaura rolagem do body
  };

  // Abrir modal com animações e centralização
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
    }    // Delay reduzido para abertura mais rápida do modal
    setTimeout(() => {
      // Rolar para o topo da galeria com offset similar ao ExpandableKidsArea
      if (galleryContainerRef?.current) {
        const yOffset = -20; // Respiro de 20 pixels do topo
        const y = galleryContainerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Fallback caso a ref não esteja disponível
        window.scrollTo({
          top: window.scrollY + window.innerHeight / 2 - 300,
          behavior: "smooth",
        });
      }

      setShowModal(true);
      document.body.style.overflow = "hidden"; // Previne rolagem do body
    }, 150); // Delay reduzido de 300ms para 150ms
  };

  // Handlers para eventos de teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  // Handlers para eventos de touch (navegação por gesto no mobile)
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

  // Limpar efeitos quando o componente é desmontado
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return {
    // States
    showModal,
    activeIndex,
    setActiveIndex,
    isNavigating,

    // Functions
    openModal,
    closeModal,
    nextImage,
    prevImage,

    // Event handlers
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
