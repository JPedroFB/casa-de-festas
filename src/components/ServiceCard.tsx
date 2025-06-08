"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  colorClass: string;
  icon: React.ReactNode;
  items: string[];
}

export default function ServiceCard({
  title,
  imageSrc,
  colorClass,
  icon,
  items,
}: ServiceCardProps) {
  const colorVariants = {
    purple: {
      bg: "from-purple-600/40 to-purple-400/10",
    },
    indigo: {
      bg: "from-indigo-600/40 to-indigo-400/10",
    },
    blue: {
      bg: "from-blue-600/40 to-blue-400/10",
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
          <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-4xl">
            {title.split(' ')[0]}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 md:p-8 md:w-2/3">
          <div className="flex items-center mb-4">
            {icon}
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
