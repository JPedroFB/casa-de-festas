"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array com as imagens do carrossel
  const slideImages = ["/images/mesas.png", "/images/mesas2.png", "/images/brinquedos.png" ];

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slideImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Seção do Carrossel */}
      <div className="relative w-[90%] aspect-[16/9] max-w-[1920px] my-12">
        {/* Carrossel com cantos arredondados */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
          {slideImages.map((src, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ${
                currentSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-10000 hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 transform transition-all duration-700 translate-y-0">
                    Casa de Festas
                  </h2>
                  <p className="text-lg md:text-xl max-w-xl transform transition-all duration-700 translate-y-0">
                    O local perfeito para seu evento inesquecível
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação modernizados */}
        <div className="flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            aria-label="Slide anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            aria-label="Próximo slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Indicadores de slide */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Nova Seção: Estrutura da Casa de Festas (Redesenhada como linhas horizontais) */}
      <div className="w-[90%] max-w-[1920px] mb-20">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300">
          Nossa Estrutura
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Tudo o que você precisa para criar momentos inesquecíveis
        </p>

        <div className="space-y-8">
          {/* Item 1: Entrada */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem real em vez de ícone */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/mesas.png"
                  alt="Entrada da Casa de Festas"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-blue-400/10 pointer-events-none" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Entrada</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">
                    Espaço amplo e bem iluminado proporcionando ambiente acolhedor
                  </li>
                  <li className="py-1">Estacionamento seguro com capacidade para 50 veículos</li>
                  <li className="py-1">Decoração personalizada de acordo com o tema do evento</li>
                  <li className="py-1">
                    Sistema de segurança com câmeras e equipe treinada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2: Recepção */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem real em vez de ícone */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/mesas2.png"
                  alt="Área de Recepção"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 to-pink-400/10 pointer-events-none" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Recepção</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">
                    Equipe profissional para recepcionar e orientar os convidados
                  </li>
                  <li className="py-1">
                    Espaço para personalização com a temática da sua festa
                  </li>
                  <li className="py-1">Área de espera confortável para os convidados</li>
                  <li className="py-1">
                    Sistema moderno de confirmação e registro de presentes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 3: Disposição de Mesas */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem real em vez de ícone */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/mesas.png"
                  alt="Disposição de Mesas"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 to-emerald-400/10 pointer-events-none" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 text-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Disposição de Mesas</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">Capacidade total para até 200 convidados sentados</li>
                  <li className="py-1">
                    Mesas redondas para 8 pessoas cada, garantindo maior interação
                  </li>
                  <li className="py-1">Diferentes arranjos disponíveis para personalização</li>
                  <li className="py-1">
                    Amplo espaço entre mesas para fácil circulação dos convidados e
                    equipe
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 4: Área das Crianças */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem real em vez de ícone */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/brinquedos.png"
                  alt="Área das Crianças"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/40 to-amber-400/10 pointer-events-none" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 text-lg">
                    4
                  </div>
                  <h3 className="text-2xl font-bold">Área das Crianças</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">
                    Espaço kids completo com brinquedos e jogos para todas as idades
                  </li>
                  <li className="py-1">
                    Monitores especializados garantindo a diversão e segurança
                  </li>
                  <li className="py-1">Área visível aos pais para maior tranquilidade</li>
                  <li className="py-1">
                    Decoração temática e atividades personalizadas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nova Seção: Serviços */}
      <div className="w-[90%] max-w-[1920px] mb-20">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-300 dark:to-indigo-300">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Oferecemos serviços completos para que seu evento seja perfeito do início ao fim
        </p>

        <div className="space-y-8">
          {/* Serviço 1: Buffet */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/mesas2.png"
                  alt="Buffet Premium"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-purple-400/10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-4xl">
                  Buffet
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-purple-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold">Buffet Premium</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">
                    Menu personalizado com opções para todos os gostos e preferências
                  </li>
                  <li className="py-1">
                    Chefs especializados em gastronomia nacional e internacional
                  </li>
                  <li className="py-1">
                    Opções para dietas especiais (vegano, vegetariano, sem glúten, etc.)
                  </li>
                  <li className="py-1">
                    Bebidas não-alcoólicas inclusas e opção de open bar personalizado
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Serviço 2: Equipe */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/mesas.png"
                  alt="Equipe Profissional"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/40 to-indigo-400/10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-4xl">
                  Equipe
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-indigo-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold">Equipe Profissional</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">
                    Garçons treinados e uniformizados para atendimento de primeira classe
                  </li>
                  <li className="py-1">
                    Coordenador de eventos dedicado para cuidar de todos os detalhes
                  </li>
                  <li className="py-1">
                    Gerente de festas que acompanha toda a execução do evento
                  </li>
                  <li className="py-1">
                    Equipe de limpeza e manutenção durante todo o evento
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Serviço 3: Segurança */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Imagem */}
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                <Image
                  src="/images/brinquedos.png"
                  alt="Segurança Completa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-blue-400/10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6 text-white font-bold text-4xl">
                  Segurança
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold">Segurança Completa</h3>
                </div>

                <ul className="space-y-4 text-gray-600 dark:text-gray-300 list-disc pl-5 text-lg">
                  <li className="py-1">
                    Equipe de segurança profissional e discreta durante todo o evento
                  </li>
                  <li className="py-1">
                    Sistema de câmeras de monitoramento em todas as áreas
                  </li>
                  <li className="py-1">
                    Controle de acesso na entrada com lista de convidados
                  </li>
                  <li className="py-1">
                    Protocolos de emergência e primeiros socorros disponíveis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
