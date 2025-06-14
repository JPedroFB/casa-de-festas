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
  const [imageOpacity, setImageOpacity] = useState(1);

  // Encontrar o índice da imagem selecionada no array completo
  const findImageIndex = (src: string) => {
    return allImages.findIndex((img) => img.src === src);
  };  // Função para mudança de imagem com animação fade
  const changeImageWithFade = (newIndex: number) => {
    if (isNavigating || newIndex === activeIndex) return;

    setIsNavigating(true);

    // Fade out da imagem atual
    setImageOpacity(0);

    setTimeout(() => {
      // Muda o índice após o fade out
      setActiveIndex(newIndex);

      // Pré-carrega a nova imagem
      const newImage = new window.Image();
      newImage.onload = () => {
        // Fade in da nova imagem
        setImageOpacity(1);
        setTimeout(() => setIsNavigating(false), 50);

        // Pré-carregar próximas imagens adjacentes para navegação mais fluida
        if (allImages.length > 1) {
          const prevIndex = (newIndex - 1 + allImages.length) % allImages.length;
          const nextIndex = (newIndex + 1) % allImages.length;

          // Pré-carregar imagem anterior
          const prevImg = new window.Image();
          prevImg.src = allImages[prevIndex].src;

          // Pré-carregar próxima imagem
          const nextImg = new window.Image();
          nextImg.src = allImages[nextIndex].src;
        }
      };
      newImage.onerror = () => {
        // Em caso de erro, ainda assim mostra a imagem
        setImageOpacity(1);
        setTimeout(() => setIsNavigating(false), 50);
      };
      newImage.src = allImages[newIndex].src;
    }, 150); // Tempo do fade out
  };

  // Navegação entre imagens no modal (otimizada)
  const nextImage = () => {
    const newIndex = (activeIndex + 1) % allImages.length;
    changeImageWithFade(newIndex);
  };

  const prevImage = () => {
    const newIndex = (activeIndex - 1 + allImages.length) % allImages.length;
    changeImageWithFade(newIndex);
  };

  // Navegação direta para um índice específico
  const setActiveIndexWithFade = (index: number) => {
    changeImageWithFade(index);
  };  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
    // Restaurar a visibilidade do navbar
    if (window && (window as any).setNavbarVisible) {
      (window as any).setNavbarVisible(true);
    }
    // Não precisa mais restaurar a rolagem, pois não será bloqueada
  };// Abrir modal com animações e centralização
  const openModal = (src: string) => {
    // Fechar qualquer outro modal que esteja aberto (implementação global)
    if ((window as any).closeAllModals && typeof (window as any).closeAllModals === 'function') {
      (window as any).closeAllModals();
    }

    // Registra esta função no objeto global para permitir fechamento por outros modais
    (window as any).closeAllModals = closeModal;

    const index = findImageIndex(src);
    setActiveIndex(index >= 0 ? index : 0);
    setImageOpacity(1); // Garantir que a primeira imagem apareça

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
      } setShowModal(true);

      // Ocultar o navbar quando o modal abrir
      if (window && (window as any).setNavbarVisible) {
        (window as any).setNavbarVisible(false);
      }

      // Pré-carregar imagens adjacentes para navegação mais fluida
      const currentIndex = index >= 0 ? index : 0;
      if (allImages.length > 1) {
        const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        const nextIndex = (currentIndex + 1) % allImages.length;

        // Pré-carregar imagem anterior
        const prevImg = new window.Image();
        prevImg.src = allImages[prevIndex].src;

        // Pré-carregar próxima imagem
        const nextImg = new window.Image();
        nextImg.src = allImages[nextIndex].src;
      }

      // Não bloqueamos mais a rolagem da página
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
  };  // Limpar efeitos quando o componente é desmontado
  useEffect(() => {
    return () => {
      // Limpar referência global ao fechar modal
      if (window && (window as any).closeAllModals === closeModal) {
        (window as any).closeAllModals = undefined;
      }

      // Garantir que a navbar seja restaurada quando o componente for desmontado
      if (window && (window as any).setNavbarVisible) {
        (window as any).setNavbarVisible(true);
      }
    };
  }, []); return {
    // States
    showModal,
    activeIndex,
    setActiveIndex: setActiveIndexWithFade,
    isNavigating,
    imageOpacity,

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
