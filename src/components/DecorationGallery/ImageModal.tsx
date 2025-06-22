"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ImageModalProps } from "./types";

const ImageModal = ({
  isOpen,
  images,
  activeIndex,
  theme,
  onSetIndex,
}: ImageModalProps) => {
  const [imageOpacity, setImageOpacity] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchMoveX, setTouchMoveX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Estado para controlar a exibição da dica de navegação em mobile
  const [showMobileTip, setShowMobileTip] = useState(true);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onSetIndex(-1); // Fechar o modal
      } else if (e.key === "ArrowLeft") {
        changeImage((activeIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        changeImage((activeIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, images.length]);
  // Não vamos mais bloquear o scroll do site
  // Removemos o código que alterava document.body.style.overflow

  const changeImage = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setImageOpacity(0);

      // Pequeno atraso para a animação de fade
      setTimeout(() => {
        onSetIndex(newIndex);
        setImageOpacity(1);
        setTimeout(() => setIsTransitioning(false), 300);
      }, 200);
    },
    [onSetIndex, isTransitioning]
  );

  // Esconder a dica após alguns segundos ou após o primeiro gesto
  useEffect(() => {
    if (showMobileTip) {
      const timer = setTimeout(() => setShowMobileTip(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMobileTip]);

  // Atualizar a função de toque para esconder a dica no primeiro uso
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchMoveX(0);
    if (showMobileTip) setShowMobileTip(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchMoveX(e.touches[0].clientX - touchStartX);
  };
  const handleTouchEnd = () => {
    // Limiar reduzido para detectar gestos mais facilmente
    if (Math.abs(touchMoveX) > 30) {
      // Swipe esquerda ou direita - determina direção
      if (touchMoveX > 0) {
        changeImage((activeIndex - 1 + images.length) % images.length);
      } else {
        changeImage((activeIndex + 1) % images.length);
      }
    } else if (Math.abs(touchMoveX) < 10) {
      // Tap simples pode fechar o modal (comportamento opcional)
      // onSetIndex(-1);
    }
  };

  if (!isOpen) return null;

  const currentImage = images[activeIndex];
  return (
    <div
      className="absolute inset-0 z-20 bg-black flex items-center justify-center rounded-2xl overflow-hidden"
      onClick={() => onSetIndex(-1)}
    >
      {/* Container para navegação e exibição da imagem - ocupa todo o espaço da seção */}
      <div
        className="relative w-full h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar - posicionado no canto superior direito */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 text-white bg-black/50 hover:bg-black/70 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg"
          onClick={() => onSetIndex(-1)}
          aria-label="Fechar visualização ampliada"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Removida a etiqueta de tema do topo */}
        {/* Imagem atual com feedback visual para gestos */}
        <div
          className="w-full h-[calc(100%-50px)] sm:h-[calc(100%-60px)] flex items-center justify-center pt-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            // Efeito sutil de movimento lateral conforme o usuário desliza
            transform:
              touchMoveX !== 0 ? `translateX(${touchMoveX * 0.1}px)` : "none",
          }}
        >
          <div
            className="relative w-full h-full transition-opacity duration-300"
            style={{ opacity: imageOpacity }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              priority
              className="object-contain"
            />
            {/* Áreas clicáveis invisíveis para navegação mais intuitiva em touch */}
            <div
              className="absolute top-0 bottom-0 left-0 w-1/3 sm:hidden"
              onClick={(e) => {
                e.stopPropagation();
                changeImage((activeIndex - 1 + images.length) % images.length);
              }}
            />
            <div
              className="absolute top-0 bottom-0 right-0 w-1/3 sm:hidden"
              onClick={(e) => {
                e.stopPropagation();
                changeImage((activeIndex + 1) % images.length);
              }}
            />
          </div>
        </div>
        {/* Navegação por pontos integrada na barra inferior - apenas em telas maiores */}
        <div className="hidden">
          {/* Esta navegação por pontos foi removida, pois agora temos a barra inferior unificada */}
        </div>
        {/* Botões de navegação lateral - ocultados em mobile e mais otimizados */}
        <button
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center z-20"
          onClick={() => changeImage((activeIndex - 1 + images.length) % images.length)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 w-10 h-10 md:w-12 md:h-12 rounded-full items-center justify-center z-20"
          onClick={() => changeImage((activeIndex + 1) % images.length)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {/* Informações e instruções na parte inferior - posicionado abaixo da imagem */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-gradient-to-t from-black via-black/90 to-black/0 pt-8 pb-3 px-3">
          <div className="font-semibold text-sm sm:text-base">{theme}</div>
          <div className="flex justify-center items-center gap-2 text-xs sm:text-sm mt-1">
            <span className="font-medium">
              {activeIndex + 1}/{images.length}
            </span>
            <span className="sm:inline-block">•</span>
            <span>
              {images.length > 10 ? (
                <span>Use as setas para navegar</span>
              ) : (
                <div className="inline-flex gap-1 items-center">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeImage(index)}
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </span>
          </div>
        </div>
        {/* Dica de navegação para mobile - aparece apenas em dispositivos móveis e apenas uma vez */}
        {showMobileTip && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none sm:hidden z-30">
            <div className="bg-black/70 text-white px-5 py-3 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm">Deslize para navegar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
