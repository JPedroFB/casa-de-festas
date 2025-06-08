"use client";

import { useState, useEffect, useRef } from 'react';
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
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicators, setShowScrollIndicators] = useState(true);

  // Criar array com todas as imagens para facilitar a navegação
  const allImages = [mainImage, ...supportImages];

  // Encontrar o índice da imagem selecionada no array completo
  const findImageIndex = (src: string) => {
    return allImages.findIndex(img => img.src === src);
  };

  // Função para selecionar imagem com suporte a teclado
  const handleSelectImage = (src: string, e?: React.KeyboardEvent) => {
    if (e && e.key !== 'Enter' && e.key !== ' ') return;
    setSelectedImage(src);
  };

  // Funções para abrir o modal e configurar a imagem ativa
  const openModal = (src: string) => {
    const index = findImageIndex(src);
    setActiveIndex(index >= 0 ? index : 0);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Previne rolagem do body
  };

  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ''; // Restaura rolagem do body
  };

  // Navegação entre imagens no modal
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Fechar modal com escape ou ao clicar fora
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Funções para rolagem horizontal com botões
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Detecção de quando chegamos no início ou fim da rolagem
  useEffect(() => {
    const checkScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Se estamos no final ou perto do final, esconda indicadores
      if (scrollLeft + clientWidth >= scrollWidth - 10 || scrollWidth <= clientWidth) {
        setShowScrollIndicators(false);
      } else {
        setShowScrollIndicators(true);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Verificação inicial
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  // Limpar efeitos quando o componente é desmontado
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-2.5 md:p-6">
      {/* Cabeçalho com tema e fotógrafo - agora em colunas em mobile */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-4 gap-2 sm:gap-0">
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-800 dark:text-indigo-300">
          Tema: {theme}
        </h3>
        {photographer && (
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Fotógrafo parceiro: <a href={`https://instagram.com/${photographer.instagram.replace('@', '')}`}
                target="_blank" rel="noopener noreferrer"
                className="text-purple-600 hover:underline">
                {photographer.instagram}
              </a>
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
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

      {/* Indicador de rolagem para mobile */}
      <div className="flex items-center justify-center mb-1 sm:mb-3 text-xs text-gray-500 sm:hidden">
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
          Deslize para ver mais fotos
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>

      {/* Galeria de imagens com scroll horizontal e controles de navegação */}
      <div className="relative">
        {/* Botões de navegação (visíveis em telas maiores) */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full z-10 backdrop-blur-sm hidden sm:block hover:bg-white dark:hover:bg-gray-800"
          aria-label="Rolar para esquerda"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full z-10 backdrop-blur-sm hidden sm:block hover:bg-white dark:hover:bg-gray-800 ${!showScrollIndicators ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Rolar para direita"
          disabled={!showScrollIndicators}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto pb-2 sm:pb-4 scroll-smooth hide-scrollbar"
        >
          <div className="flex gap-2 sm:gap-4 w-max">
            {/* Imagem principal - tamanho reduzido em mobile */}
            <div className="flex flex-col">
              <button
                className={`relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-xl overflow-hidden cursor-zoom-in group
                  ${mainImage.src === selectedImage ? 'ring-4 ring-purple-500' : 'ring-1 ring-gray-200 dark:ring-gray-700'}`}
                onClick={() => openModal(mainImage.src)}
                onKeyDown={(e) => handleSelectImage(mainImage.src, e)}
                tabIndex={0}
                aria-label={`Expandir imagem principal: ${mainImage.alt}`}
              >
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 520px"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* Grid de imagens de suporte organizadas em colunas - simplificado para mobile */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-4">
              {supportImages.slice(0, 3).map((img) => (
                <button
                  key={img.src}
                  className={`relative w-[180px] h-[180px] sm:w-[260px] sm:h-[160px] rounded-xl overflow-hidden cursor-zoom-in group
                    ${img.src === selectedImage ? 'ring-4 ring-purple-500' : 'ring-1 ring-gray-200 dark:ring-gray-700'}`}
                  onClick={() => openModal(img.src)}
                  onKeyDown={(e) => handleSelectImage(img.src, e)}
                  tabIndex={0}
                  aria-label={`Expandir imagem: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 180px, 260px"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                    <div className="bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-purple-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Imagens adicionais exibidas uma ao lado da outra em mobile */}
            {supportImages.slice(3).map((img) => (
              <button
                key={img.src}
                className={`relative w-[180px] h-[180px] sm:w-[260px] sm:h-[160px] rounded-xl overflow-hidden cursor-zoom-in group
                  ${img.src === selectedImage ? 'ring-4 ring-purple-500' : 'ring-1 ring-gray-200 dark:ring-gray-700'}`}
                onClick={() => openModal(img.src)}
                onKeyDown={(e) => handleSelectImage(img.src, e)}
                tabIndex={0}
                aria-label={`Expandir imagem: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 180px, 260px"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                  <div className="bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-purple-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Indicador de scroll para desktop */}
        <div className="hidden sm:flex justify-center mt-2">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-1 w-20">
            <div className={`bg-purple-600 h-1 rounded-full transition-all ${showScrollIndicators ? 'w-1/2' : 'w-full'}`}></div>
          </div>
        </div>
      </div>

      {/* Modal modernizado para visualização expandida da imagem */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/10 dark:bg-black/10 backdrop-blur-xl"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 transition-all duration-300 animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            {/* Cabeçalho do modal */}
            <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 z-10 bg-gradient-to-b from-black/50 to-transparent">
              <p className="text-white font-medium truncate max-w-[70%]">
                {allImages[activeIndex].alt || "Imagem em destaque"}
              </p>
              <button
                className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
                onClick={closeModal}
                aria-label="Fechar visualização"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Área da imagem */}
            <div className="w-full h-[calc(100vh-150px)] max-h-[800px] bg-gray-100 dark:bg-gray-800 relative">
              <Image
                src={allImages[activeIndex].src}
                alt={allImages[activeIndex].alt || "Imagem ampliada"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="p-4"
                priority
              />
            </div>

            {/* Navegação e contagem */}
            <div className="p-4 flex justify-between items-center bg-white dark:bg-gray-900">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors disabled:opacity-50"
                onClick={prevImage}
                disabled={allImages.length <= 1}
                aria-label="Imagem anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </button>

              <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium">
                {activeIndex + 1} / {allImages.length}
              </div>

              <button
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors disabled:opacity-50"
                onClick={nextImage}
                disabled={allImages.length <= 1}
                aria-label="Próxima imagem"
              >
                Próxima
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Miniaturas das imagens */}
            <div className="bg-gray-50 dark:bg-gray-950 p-4 overflow-x-auto">
              <div className="flex gap-2">
                {allImages.map((img, idx) => (
                  <button
                    key={`thumb-${img.src}`}
                    className={`relative min-w-[80px] h-[50px] rounded-md overflow-hidden transition-all
                      ${idx === activeIndex ? 'ring-2 ring-purple-500 scale-105' : 'ring-1 ring-gray-200 dark:ring-gray-700 opacity-60'}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || `Miniatura ${idx + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos para animação e esconder a barra de rolagem */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default DecorationGallery;
