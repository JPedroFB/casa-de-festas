"use client";

import MainCarousel from "./MainCarousel";
import { Henny_Penny } from "next/font/google";

interface HeroSectionProps {
  images: string[];
}

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection({ images }: HeroSectionProps) {
  return (
    <section id="inicio" className="w-full bg-gradient-to-br from-indigo-950 to-purple-900 relative pb-16 pt-24">
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-pink-100"
          fill="currentColor"
        >
          <path d="M0,0 L120,40 L240,0 L360,40 L480,0 L600,40 L720,0 L840,40 L960,0 L1080,40 L1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="w-full flex flex-col justify-center items-center py-8 px-2.5 sm:px-4">
        <div className="w-full sm:w-[90%] max-w-[1920px] mb-10 text-center px-2.5 sm:px-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300 ${hennyPenny.className}`}>Mansão dos Sonhos</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Para as crianças, aniversários são momentos inesquecíveis. Somos a maior casa de festas infantis da Zona Norte, com mais de 800 m² de diversão no Grajaú.
          </p>
        </div>

        <div className="w-full sm:w-[90%] max-w-[1920px] px-0 sm:px-0">
          <MainCarousel images={images} />
        </div>
      </div>
    </section>
  );
}
