"use client";

import ServiceCard from "./ServiceCard";
import { Henny_Penny } from "next/font/google";
import { Service } from "@/data/mockData";

interface ServicesSectionProps {
  services: Service[];
}

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicos" className="w-full bg-amber-50 relative">
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-pink-50"
          fill="currentColor"
        >
          <path d="M0,40 L50,10 L100,50 L150,20 L200,70 L250,30 L300,80 L350,0 L400,60 L450,10 L500,90 L550,20 L600,70 L650,30 L700,80 L750,10 L800,50 L850,30 L900,60 L950,0 L1000,50 L1050,20 L1100,80 L1150,40 L1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="w-full sm:container mx-auto py-16 px-2.5 sm:px-4 sm:w-[90%] max-w-[1920px] mb-20">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-2.5 sm:px-0">
          <span className={hennyPenny.className}>Nossos Serviços</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 px-2.5 sm:px-0">
          Oferecemos serviços completos para que seu evento seja perfeito do início ao fim
        </p>

        <div className="space-y-8 px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              colorClass={service.colorClass}
              icon={service.icon}
              items={service.items}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
