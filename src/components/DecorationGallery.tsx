"use client";

import { useState } from 'react';
import Image from 'next/image';

interface DecorationGalleryProps {
  mainImage: {
    src: string;
    alt: string;
  };
  supportImages: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  theme?: string;
  photographer?: {
    name: string;
    instagram: string;
    profileImage: string;
  };
}

// Dados fake para validar o layout
const DEFAULT_THEME = "Unicórnio Encantado";
const DEFAULT_PHOTOGRAPHER = {
  name: "João Silva",
  instagram: "@fotografiasmagicas",
  profileImage: "https://i.pravatar.cc/100" // Avatar aleatório para teste
};

const DecorationGallery = ({
  mainImage,
  supportImages,
  theme = DEFAULT_THEME,
  photographer = DEFAULT_PHOTOGRAPHER
}: DecorationGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(mainImage.src);

  // Função para selecionar imagem com suporte a teclado
  const handleSelectImage = (src: string, e?: React.KeyboardEvent) => {
    if (e && e.key !== 'Enter' && e.key !== ' ') return;
    setSelectedImage(src);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-4 md:p-6">
      {/* Cabeçalho com tema e fotógrafo */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300">
          Tema: {theme}
        </h3>
        {photographer && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Fotógrafo parceiro: <a href={`https://instagram.com/${photographer.instagram.replace('@', '')}`}
                target="_blank" rel="noopener noreferrer"
                className="text-purple-600 hover:underline">
                {photographer.instagram}
              </a>
            </span>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={photographer.profileImage}
                alt={`Perfil de ${photographer.name}`}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Galeria de imagens com scroll horizontal */}
      <div className="relative overflow-x-auto">
        <div className="flex gap-4 w-max">
          {/* Imagem principal (ocupando 4 espaços - maior) */}
          <div className="flex flex-col">
            <button
              className={`relative w-[520px] h-[520px] rounded-xl overflow-hidden cursor-pointer transition-all
                ${mainImage.src === selectedImage ? 'ring-4 ring-purple-500' : ''}`}
              onClick={() => setSelectedImage(mainImage.src)}
              onKeyDown={(e) => handleSelectImage(mainImage.src, e)}
              tabIndex={0}
              aria-label={`Selecionar imagem principal: ${mainImage.alt}`}
            >
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="520px"
              />
            </button>
          </div>

          {/* Grid de imagens de suporte organizadas em colunas */}
          <div className="flex flex-col gap-4">
            {supportImages.slice(0, 3).map((img) => (
              <button
                key={img.src}
                className={`relative w-[260px] h-[160px] rounded-xl overflow-hidden cursor-pointer transition-all
                  ${img.src === selectedImage ? 'ring-4 ring-purple-500' : ''}`}
                onClick={() => setSelectedImage(img.src)}
                onKeyDown={(e) => handleSelectImage(img.src, e)}
                tabIndex={0}
                aria-label={`Selecionar imagem: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="260px"
                />
              </button>
            ))}
          </div>

          {/* Imagens adicionais em colunas */}
          {supportImages.slice(3).map((img) => (
            <button
              key={img.src}
              className={`relative w-[260px] h-[160px] rounded-xl overflow-hidden cursor-pointer transition-all
                ${img.src === selectedImage ? 'ring-4 ring-purple-500' : ''}`}
              onClick={() => setSelectedImage(img.src)}
              onKeyDown={(e) => handleSelectImage(img.src, e)}
              tabIndex={0}
              aria-label={`Selecionar imagem: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="260px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecorationGallery;
