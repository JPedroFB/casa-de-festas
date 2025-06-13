"use client";

import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import PartnerCard from "../../components/PartnerCard";
import { partners } from "@/data/partners";
import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function Parceiros() {
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
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p) => (
            <PartnerCard key={p.id} partner={p} />
          ))}
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
