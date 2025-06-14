import { useEffect } from "react";
import Image from "next/image";
import { ImageModalProps } from "./types";

const ImageModal = ({
  isOpen,
  images,
  activeIndex,
  theme,
  imageOpacity = 1,
  onClose,
  onNext,
  onPrev,
  onSetIndex,
  onKeyDown,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: ImageModalProps) => {
  // Fallback handlers se não fornecidos
  const handleKeyDown = onKeyDown || ((e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  });

  // Handler para fechar modal apenas quando clicado exatamente no fundo
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Verificar se o clique foi exatamente no backdrop, não em seus filhos
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTouchStart = onTouchStart || ((e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    (e.currentTarget as HTMLElement).dataset.touchStartX = touchStartX.toString();
  });

  const handleTouchMove = onTouchMove || ((e: React.TouchEvent) => {
    const touchEndX = e.touches[0].clientX;
    (e.currentTarget as HTMLElement).dataset.touchEndX = touchEndX.toString();
  });
  const handleTouchEnd = onTouchEnd || ((e: React.TouchEvent) => {
    const element = e.currentTarget as HTMLElement;
    const touchStartX = parseFloat(element.dataset.touchStartX || "0");
    const touchEndX = parseFloat(element.dataset.touchEndX || "0");

    if (touchStartX && touchEndX) {
      if (touchStartX - touchEndX > 50) {
        onNext();
      } else if (touchEndX - touchStartX > 50) {
        onPrev();
      }
    }
  });

  // Pré-carregamento das imagens adjacentes para navegação mais fluida
  useEffect(() => {
    if (isOpen && images.length > 1) {
      const prevIndex = (activeIndex - 1 + images.length) % images.length;
      const nextIndex = (activeIndex + 1) % images.length;
      
      // Pré-carregar imagem anterior
      const prevImg = new window.Image();
      prevImg.src = images[prevIndex].src;
      
      // Pré-carregar próxima imagem
      const nextImg = new window.Image();
      nextImg.src = images[nextIndex].src;
    }
  }, [activeIndex, images, isOpen]);

  if (!isOpen) return null;
  return (    <div
      id="decoration-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn overflow-auto"
      onClick={handleBackdropClick} // Ao clicar no fundo escuro, o modal fecha
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >      <div
        className="relative w-full h-full flex items-center justify-center animate-zoomIn"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botão de fechar modernizado */}
        <button
          className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-md transition-all duration-300 border border-white/10"
          onClick={onClose}
          aria-label="Fechar visualização"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Tema da foto e número atual */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-md">
          <p className="text-sm sm:text-base font-medium">
            {theme} - {activeIndex + 1}/{images.length}
          </p>
        </div>        {/* Container da imagem em tela cheia */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-h-screen">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt || "Imagem ampliada"}
              fill
              style={{ 
                objectFit: "contain", 
                objectPosition: "center",
                opacity: imageOpacity,
                transition: "opacity 150ms ease-in-out"
              }}
              sizes="100vw"
              priority
              className="transition-all duration-150"
            />
          </div>
        </div>        {/* Navegação por setas modernizadas */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
              onClick={onPrev}
              aria-label="Imagem anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
              onClick={onNext}
              aria-label="Próxima imagem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}        {/* Indicadores modernizados */}
        <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-center gap-2 py-2">
          <div className="bg-black/60 backdrop-blur-md px-3 py-2 sm:py-3 rounded-full flex gap-2 sm:gap-3">
            {images.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => onSetIndex(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-white w-7 sm:w-10"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir para imagem ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
