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
    instagramProfile?: string; // Nome de usuário do Instagram para link
    profileImage: string;
  };
}

// Dados fake para validar o layout
const DEFAULT_THEME = "Unicórnio Encantado";
const DEFAULT_PHOTOGRAPHER = {
  name: "João Silva",
  instagram: "@fotografiasmagicas",
  instagramProfile: "fotografiasmagicas",
  profileImage: "https://i.pravatar.cc/100" // Avatar aleatório para teste
};

const DecorationGallery = ({
  mainImage,
  supportImages,
  theme = DEFAULT_THEME,
  photographer = DEFAULT_PHOTOGRAPHER
}: DecorationGalleryProps) => {  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicators, setShowScrollIndicators] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  
  // Mapa de referências para os botões das imagens
  const imageButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Criar array com todas as imagens para facilitar a navegação
  const allImages = [mainImage, ...supportImages];

  // Encontrar o índice da imagem selecionada no array completo
  const findImageIndex = (src: string) => {
    return allImages.findIndex(img => img.src === src);
  };
  
  // Função para registrar os botões de imagem
  const registerImageButton = (src: string, element: HTMLButtonElement | null) => {
    if (element) {
      imageButtonRefs.current.set(src, element);
    }
  };  // Funções para abrir o modal e configurar a imagem ativa
  const openModal = (src: string) => {
    const index = findImageIndex(src);
    setActiveIndex(index >= 0 ? index : 0);
    
    // Primeiro centralize a imagem clicada na galeria
    const imageButton = imageButtonRefs.current.get(src);
    if (imageButton && scrollContainerRef.current) {
      // Centralizar a imagem com animação suave
      imageButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
    
    // Pequeno atraso para dar tempo da animação de centralização da galeria ocorrer
    setTimeout(() => {
      // Rolar para o topo do componente para garantir visibilidade total do modal
      window.scrollTo({
        top: window.scrollY + (window.innerHeight / 2) - 300,
        behavior: 'smooth'
      });
      
      setShowModal(true);
      document.body.style.overflow = 'hidden'; // Previne rolagem do body
    }, 300); // Delay para a animação de centralização terminar
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

  // Navegação por gesto de arrastar no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      if (touchStartX - touchEndX > 50) {
        nextImage();
      } else if (touchEndX - touchStartX > 50) {
        prevImage();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
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

  return (    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden p-3 md:p-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      {/* Cabeçalho com tema e fotógrafo - design moderno */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Tema: {theme}
        </h3>
        {photographer && (
          <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 px-4 py-1.5 rounded-full">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-500">
                <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              <a href={`https://instagram.com/${photographer.instagram.replace('@', '')}`}
                target="_blank" rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                {photographer.instagramProfile}
              </a>
            </span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-purple-300 dark:border-purple-500 shadow-md">
              <Image
                src={photographer.profileImage}
                alt={`Perfil de ${photographer.name}`}
                width={40}
                height={40}
                className="object-cover w-full h-full"
                unoptimized={photographer.profileImage.includes('pravatar')}
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
        </button>        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto pb-3 sm:pb-5 scroll-smooth hide-scrollbar h-[300px] sm:h-[420px] md:h-[540px]"
        >
          <div className="flex gap-3 sm:gap-5 w-max h-full">
            {/* Imagem principal - centralizada no desktop e com respiros adequados */}
            <div className="flex flex-col">              <button
                ref={(el) => registerImageButton(mainImage.src, el)}
                className="relative w-[280px] h-full sm:w-[400px] sm:h-full md:w-[520px] md:h-full rounded-2xl overflow-hidden cursor-zoom-in group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => openModal(mainImage.src)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openModal(mainImage.src);
                }}
                tabIndex={0}
                aria-label={`Expandir imagem principal: ${mainImage.alt}`}
              >
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, 520px"
                  className="transition-transform duration-500 ease-out group-hover:scale-105"
                />                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/80 dark:bg-indigo-900/80 p-3 rounded-full backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-purple-600 dark:text-purple-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>

            {/* Grid de imagens de suporte organizadas em colunas - layout moderno */}
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-5 h-full">              {supportImages.slice(0, 3).map((img) => (
                <button
                  key={img.src}
                  ref={(el) => registerImageButton(img.src, el)}
                  className="relative w-[180px] h-full sm:w-[260px] sm:h-[calc(33.33%-10px)] rounded-2xl overflow-hidden cursor-zoom-in group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => openModal(img.src)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openModal(img.src);
                  }}
                  tabIndex={0}
                  aria-label={`Expandir imagem: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 640px) 180px, 260px"
                    className="transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                    <div className="bg-white/80 dark:bg-indigo-900/80 p-2 rounded-full backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-purple-600 dark:text-purple-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>            {/* Imagens adicionais com layout aprimorado */}            {supportImages.slice(3).map((img) => (
              <button
                key={img.src}
                ref={(el) => registerImageButton(img.src, el)}
                className="relative w-[180px] h-full sm:w-[260px] sm:h-full rounded-2xl overflow-hidden cursor-zoom-in group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => openModal(img.src)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openModal(img.src);
                }}
                tabIndex={0}
                aria-label={`Expandir imagem: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 640px) 180px, 260px" 
                  className="transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                  <div className="bg-white/80 dark:bg-indigo-900/80 p-2 rounded-full backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-purple-600 dark:text-purple-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Indicador de scroll moderno para desktop */}
        <div className="hidden sm:flex justify-center mt-4">
          <div className="bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-1.5 w-24 backdrop-blur-sm">
            <div className={`bg-gradient-to-r from-purple-500 to-indigo-500 h-1.5 rounded-full transition-all duration-500 ${showScrollIndicators ? 'w-1/2' : 'w-full'}`}></div>
          </div>        </div>      </div>      {/* Modal modernizado para visualização de imagens em tela cheia */}
      {showModal && (
        <div
          id="decoration-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full h-full flex items-center justify-center animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >            {/* Botão de fechar modernizado */}
            <button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-md transition-all duration-300 border border-white/10"
              onClick={closeModal}
              aria-label="Fechar visualização"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Tema da foto e número atual */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-md">
              <p className="text-sm sm:text-base font-medium">
                {theme} - {activeIndex + 1}/{allImages.length}
              </p>
            </div>
              {/* Container da imagem em tela cheia */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full max-h-screen">
                <Image
                  src={allImages[activeIndex].src}
                  alt={allImages[activeIndex].alt || 'Imagem ampliada'}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="100vw"
                  priority
                  className="transition-opacity duration-300"
                />
              </div>
            </div>            {/* Navegação por setas modernizadas */}
            {allImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
                  onClick={prevImage}
                  aria-label="Imagem anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10"
                  onClick={nextImage}
                  aria-label="Próxima imagem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}            {/* Indicadores modernizados */}
            <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-center gap-2 py-2">
              <div className="bg-black/60 backdrop-blur-md px-3 py-2 sm:py-3 rounded-full flex gap-2 sm:gap-3">
                {allImages.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'bg-white w-7 sm:w-10'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Ir para imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos aprimorados para animações e interações */}      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideIn {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(126, 34, 206, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(126, 34, 206, 0); }
          100% { box-shadow: 0 0 0 0 rgba(126, 34, 206, 0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .animate-zoomIn {
          animation: zoomIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .animate-pulse-purple {
          animation: pulse 2s infinite;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default DecorationGallery;
