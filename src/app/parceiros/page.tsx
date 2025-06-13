"use client";

import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import PartnerCard from "../../components/PartnerCard";
import { partners } from "@/data/partners";
import { Henny_Penny } from "next/font/google";
import { useState } from "react";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function Parceiros() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = [
    "Todos",
    ...Array.from(new Set(partners.map((p) => p.category))),
  ];
  const filteredPartners =
    activeCategory === "Todos"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="w-full bg-gradient-to-br from-indigo-950 to-purple-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px] text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300 ${hennyPenny.className}`}>Nossos Parceiros</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Conheça profissionais que tornam sua festa ainda mais especial.
          </p>
        </div>
      </section>
      <section className="bg-amber-50 py-16 flex-1">
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px]">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === cat ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-purple-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
