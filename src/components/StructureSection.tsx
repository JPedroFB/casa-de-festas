"use client";

import StructureCard from "./StructureCard";
import ExpandableKidsArea from "./ExpandableKidsArea";
import { Henny_Penny } from "next/font/google";
import { StructureItem, KidsAreaData } from "@/data/mockData";

interface StructureSectionProps {
  items: StructureItem[];
  kidsArea: KidsAreaData;
}

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function StructureSection({ items, kidsArea }: StructureSectionProps) {
  return (
    <section id="estrutura" className="w-full bg-pink-100 relative pb-16">
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-amber-50"
          fill="currentColor"
        >
          <path d="M0,40 L100,0 L200,60 L300,20 L400,80 L500,10 L600,70 L700,30 L800,90 L900,20 L1000,60 L1100,10 L1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="w-full sm:container mx-auto py-16 px-2.5 sm:px-4 sm:w-[90%] max-w-[1920px]">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 px-2.5 sm:px-0">
          <span className={hennyPenny.className}>Nossa Estrutura</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 px-2.5 sm:px-0">
          Tudo o que você precisa para criar momentos inesquecíveis
        </p>

        <div className="space-y-8 px-0">
          {items.map((item) => (
            <StructureCard
              key={item.number}
              number={item.number}
              title={item.title}
              imageSrc={item.imageSrc}
              colorClass={item.colorClass}
              items={item.items}
            />
          ))}

          <ExpandableKidsArea
            title={kidsArea.title}
            number={kidsArea.number}
            imageSrc={kidsArea.imageSrc}
            items={kidsArea.items}
          />
        </div>
      </div>
    </section>
  );
}
