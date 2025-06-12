"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StructureSection from "../components/StructureSection";
import ServicesSection from "../components/ServicesSection";
import DecorationsSection from "../components/DecorationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import { slideImages, structureItems, kidsAreaData, services } from "@/data/mockData";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection images={slideImages} />
      <StructureSection items={structureItems} kidsArea={kidsAreaData} />
      <ServicesSection services={services} />
      <DecorationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
