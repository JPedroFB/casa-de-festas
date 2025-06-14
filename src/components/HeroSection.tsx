"use client";

import MainCarousel from "./MainCarousel";
import { Henny_Penny } from "next/font/google";
import type { Slide } from "@/data/mockData";
import SectionDivider from "./SectionDivider";

interface HeroSectionProps {
  slides: Slide[];
}

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection({ slides }: HeroSectionProps) {  return (
    <section
      id="inicio"
      className="w-full bg-gradient-to-tl from-emerald-300/90 via-purple-300/90 to-yellow-200/90 relative pb-16 pt-24"
    >
      <SectionDivider pattern="wave" color="text-pink-100" position="bottom" />
      <div className="w-full flex flex-col justify-center items-center py-8 px-2.5 sm:px-4">
        <div className="w-full sm:w-[90%] max-w-[1920px] mb-10 text-center px-2.5 sm:px-0">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-purple-600 ${hennyPenny.className}`}
            >
              Mansão dos Sonhos
            </span>
          </h1>          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Para as crianças, aniversários são momentos inesquecíveis. Somos a
            maior casa de festas infantis da Zona Norte, com mais de 800 m² de
            diversão no Grajaú.
          </p>
        </div>

        <div className="w-full sm:w-[90%] max-w-[1920px] px-0 sm:px-0">
          <MainCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
