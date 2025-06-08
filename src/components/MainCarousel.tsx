"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface MainCarouselProps {
  images: string[];
}

export default function MainCarousel({ images }: MainCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-[90%] aspect-[16/9] max-w-[1920px] my-12">
      {/* Carrossel com cantos arredondados */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-10000 hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 transform transition-all duration-700 translate-y-0">
                  Casa de Festas
                </h2>
                <p className="text-lg md:text-xl max-w-xl transform transition-all duration-700 translate-y-0">
                  O local perfeito para seu evento inesquecível
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação modernizados */}
      <div className="flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-4">
        <button
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
          aria-label="Slide anterior"
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
          aria-label="Próximo slide"
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
