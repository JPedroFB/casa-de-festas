"use client";

import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { Henny_Penny } from "next/font/google";
import type { Slide } from "@/data/mockData";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

interface MainCarouselProps {
  slides: Slide[];
}
function MainCarousel({ slides }: MainCarouselProps) {
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
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="w-[100%] max-w-[1920px] my-12">
      {/* Carrossel com cantos arredondados */}
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full h-full">                <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-10000 hover:scale-105"
                priority={index === 0}
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full hidden md:block">
                <h2 className={`text-3xl md:text-5xl font-bold mb-3 transform transition-all duration-700 translate-y-0 ${hennyPenny.className}`}>
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-xl transform transition-all duration-700 translate-y-0">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação modernizados */}
      <div className="hidden md:flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-4">
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
      </div>      {/* Indicadores de slide - movidos para fora do carrossel */}
        {/* Indicadores de slide para desktop - posicionados abaixo do carrossel */}
      <div className="hidden md:flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
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
      
      {/* Texto abaixo do carrossel para dispositivos móveis */}
      <div className="md:hidden text-center text-white mt-6 px-6">
        <h2 className={`text-2xl font-bold mb-2 ${hennyPenny.className}`}>{slides[currentSlide].title}</h2>
        <p className="text-base">{slides[currentSlide].description}</p>
      </div>

      {/* Navegação e indicador em dispositivos móveis */}
      <div className="flex md:hidden justify-between items-center mt-4">
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

        <div className="flex space-x-2">
          {slides.map((_, index) => (
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
    </div>
  );
}

// Memorizando o componente para evitar re-renderizações desnecessárias
export default memo(MainCarousel);
