"use client";

import dynamic from 'next/dynamic';
import Navbar from "../components/Navbar";
// Componente HeroSection será importado dinamicamente mais abaixo
import Footer from "../components/Footer";

import { slides, structureItems, kidsAreaData, services } from "@/data/mockData";

// Importações dinâmicas para componentes pesados
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  loading: () => <div className="w-full h-[60vh] bg-gradient-to-r from-purple-100/30 to-indigo-100/30 animate-pulse"></div>,
  ssr: true
});

const StructureSection = dynamic(() => import("../components/StructureSection"), {
  loading: () => <div className="w-full h-96 bg-gradient-to-r from-purple-100/20 to-indigo-100/20 animate-pulse"></div>,
});

const ServicesSection = dynamic(() => import("../components/ServicesSection"), {
  loading: () => <div className="w-full h-96 bg-gradient-to-r from-purple-100/10 to-indigo-100/10 animate-pulse"></div>,
});

const DecorationsSection = dynamic(() => import("../components/DecorationsSection"), {
  loading: () => <div className="w-full h-96 bg-gradient-to-r from-purple-100/10 to-indigo-100/10 animate-pulse"></div>,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection slides={slides} />
      <StructureSection items={structureItems} kidsArea={kidsAreaData} />
      <ServicesSection services={services} />
      <DecorationsSection />
      <Footer />
    </div>
  );
}
