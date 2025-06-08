"use client";

import Image from "next/image";

interface StructureCardProps {
  number: number;
  title: string;
  imageSrc: string;
  colorClass: string;
  items: string[];
}

export default function StructureCard({
  number,
  title,
  imageSrc,
  colorClass,
  items,
}: StructureCardProps) {
  const colorVariants = {
    blue: {
      bg: "from-blue-600/40 to-blue-400/10",
      numberBg: "bg-blue-100 dark:bg-blue-900/40",
      numberText: "text-blue-600 dark:text-blue-300",
    },
    pink: {
      bg: "from-pink-600/40 to-pink-400/10",
      numberBg: "bg-pink-100 dark:bg-pink-900/40",
      numberText: "text-pink-600 dark:text-pink-300",
    },
    emerald: {
      bg: "from-emerald-600/40 to-emerald-400/10",
      numberBg: "bg-emerald-100 dark:bg-emerald-900/40",
      numberText: "text-emerald-600 dark:text-emerald-300",
    },
    amber: {
      bg: "from-amber-600/40 to-amber-400/10",
      numberBg: "bg-amber-100 dark:bg-amber-900/40",
      numberText: "text-amber-600 dark:text-amber-300",
    },
  };

  const colors = colorVariants[colorClass as keyof typeof colorVariants];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row">
        {/* Imagem */}
        <div className="md:w-1/3 aspect-square relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.bg} pointer-events-none`} />
        </div>

        {/* Conteúdo */}
        <div className="p-6 md:p-8 md:w-2/3">
          <div className="flex items-center mb-4">
            <div className={`${colors.numberBg} ${colors.numberText} w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 text-lg`}>
              {number}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>

          <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
            {items.map((item, index) => (
              <li key={index} className="py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
