"use client";

import MainCarousel from '../components/MainCarousel';
import StructureCard from '../components/StructureCard';
import ExpandableKidsArea from '../components/ExpandableKidsArea';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import { Henny_Penny } from "next/font/google";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  // Array com as imagens do carrossel
  const slideImages = ["/images/mesas.png", "/images/mesas2.png", "/images/brinquedos.png"];

  // Dados da seção de estrutura
  const structureItems = [
    {
      number: 1,
      title: "Entrada",
      imageSrc: "/images/mesas.png",
      colorClass: "blue",
      items: [
        "Espaço amplo e bem iluminado proporcionando ambiente acolhedor",
        "Estacionamento seguro com capacidade para 50 veículos",
        "Decoração personalizada de acordo com o tema do evento",
        "Sistema de segurança com câmeras e equipe treinada",
      ],
    },
    {
      number: 2,
      title: "Recepção",
      imageSrc: "/images/mesas2.png",
      colorClass: "pink",
      items: [
        "Equipe profissional para recepcionar e orientar os convidados",
        "Espaço para personalização com a temática da sua festa",
        "Área de espera confortável para os convidados",
        "Sistema moderno de confirmação e registro de presentes",
      ],
    },
    {
      number: 3,
      title: "Disposição de Mesas",
      imageSrc: "/images/mesas.png",
      colorClass: "emerald",
      items: [
        "Capacidade total para até 200 convidados sentados",
        "Mesas redondas para 8 pessoas cada, garantindo maior interação",
        "Diferentes arranjos disponíveis para personalização",
        "Amplo espaço entre mesas para fácil circulação dos convidados e equipe",
      ],
    },
  ];

  // Dados da área das crianças
  const kidsAreaData = {
    number: 4,
    title: "Área das Crianças",
    imageSrc: "/images/brinquedos.png",
    items: [
      "Espaço kids completo com brinquedos e jogos para todas as idades",
      "Monitores especializados garantindo a diversão e segurança",
      "Área visível aos pais para maior tranquilidade",
      "Decoração temática e atividades personalizadas",
    ],
  };

  // Dados da seção de serviços
  const services = [
    {
      title: "Buffet Premium",
      imageSrc: "/images/mesas2.png",
      colorClass: "purple",
      icon: (
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
      ),
      items: [
        "Menu personalizado com opções para todos os gostos e preferências",
        "Chefs especializados em gastronomia nacional e internacional",
        "Opções para dietas especiais (vegano, vegetariano, sem glúten, etc.)",
        "Bebidas não-alcoólicas inclusas e opção de open bar personalizado",
      ],
    },
    {
      title: "Equipe Profissional",
      imageSrc: "/images/mesas.png",
      colorClass: "indigo",
      icon: (
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
      ),
      items: [
        "Garçons treinados e uniformizados para atendimento de primeira classe",
        "Coordenador de eventos dedicado para cuidar de todos os detalhes",
        "Gerente de festas que acompanha toda a execução do evento",
        "Equipe de limpeza e manutenção durante todo o evento",
      ],
    },
    {
      title: "Segurança Completa",
      imageSrc: "/images/brinquedos.png",
      colorClass: "blue",
      icon: (
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
      ),
      items: [
        "Equipe de segurança profissional e discreta durante todo o evento",
        "Sistema de câmeras de monitoramento em todas as áreas",
        "Controle de acesso na entrada com lista de convidados",
        "Protocolos de emergência e primeiros socorros disponíveis",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Seção do Carrossel - Fundo em azul escuro/roxo */}
      <section id="inicio" className="w-full bg-gradient-to-br from-indigo-950 to-purple-900 relative pb-16 pt-24">
        {/* Forma em zigue-zague no final da seção */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full text-pink-100"
            fill="currentColor"
          >
            <path d="M0,0 L120,40 L240,0 L360,40 L480,0 L600,40 L720,0 L840,40 L960,0 L1080,40 L1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="w-full flex flex-col justify-center items-center py-8 px-4">
          {/* Mensagem de boas-vindas */}
          <div className="w-[90%] max-w-[1920px] mb-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300 ${hennyPenny.className}`}>Mansão dos Sonhos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              O lugar perfeito para transformar momentos especiais em lembranças inesquecíveis
            </p>
          </div>

          <div className="w-[90%] max-w-[1920px]">
            <MainCarousel images={slideImages} />
          </div>
        </div>
      </section>

      {/* Seção da Estrutura - Fundo em rosa claro */}
      <section id="estrutura" className="w-full bg-pink-100 relative pb-16">
        {/* Forma em zigue-zague no final da seção */}
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

        <div className="container mx-auto py-16 px-4 w-[90%] max-w-[1920px]">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            <span className={hennyPenny.className}>Nossa Estrutura</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Tudo o que você precisa para criar momentos inesquecíveis
          </p>

          <div className="space-y-8">
            {/* Cards da estrutura */}
            {structureItems.map((item) => (
              <StructureCard
                key={item.number}
                number={item.number}
                title={item.title}
                imageSrc={item.imageSrc}
                colorClass={item.colorClass}
                items={item.items}
              />
            ))}

            {/* Área das crianças - expandível */}
            <ExpandableKidsArea
              title={kidsAreaData.title}
              number={kidsAreaData.number}
              imageSrc={kidsAreaData.imageSrc}
              items={kidsAreaData.items}
            />
          </div>
        </div>
      </section>

      {/* Seção dos Serviços - Fundo em âmbar claro */}
      <section id="servicos" className="w-full bg-amber-50 relative">
        {/* Forma em zigue-zague no final da seção - mais irregular e divertida */}
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

        <div className="container mx-auto py-16 px-4 w-[90%] max-w-[1920px] mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            <span className={hennyPenny.className}>Nossos Serviços</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Oferecemos serviços completos para que seu evento seja perfeito do início ao fim
          </p>

          <div className="space-y-8">
            {/* Cards de serviços */}
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                imageSrc={service.imageSrc}
                colorClass={service.colorClass}
                icon={service.icon}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Decorações - Nova seção adicionada */}
      <section id="decoracoes" className="w-full bg-pink-50 relative pb-16">
        {/* Forma em zigue-zague no final da seção */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-full text-indigo-950"
              fill="currentColor"
          >
            <path d="M0,40 L50,10 L100,50 L150,20 L200,70 L250,30 L300,80 L350,0 L400,60 L450,10 L500,90 L550,20 L600,70 L650,30 L700,80 L750,10 L800,50 L850,30 L900,60 L950,0 L1000,50 L1050,20 L1100,80 L1150,40 L1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="container mx-auto py-16 px-4 w-[90%] max-w-[1920px]">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            <span className={hennyPenny.className}>Nossas Decorações</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Transforme sua celebração em um evento mágico com nossas decorações temáticas personalizadas
          </p>

          {/* Mini galeria de decorações */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/mesas.png"
                  alt="Decoração de aniversário"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium text-lg">Aniversário Encantado</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/mesas2.png"
                  alt="Decoração de casamento"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium text-lg">Sonho de Casamento</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/brinquedos.png"
                  alt="Decoração infantil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium text-lg">Mundo da Fantasia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botão para ver todas as decorações */}
          <div className="text-center">
            <a
              href="/decoracoes"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:from-purple-700 hover:to-pink-600 transition-all hover:shadow-lg"
            >
              Ver Todas as Decorações
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Contato - Renovada com redes sociais e mapa */}
      <section id="contato" className="w-full bg-indigo-950 text-white py-16">
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px]">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className={hennyPenny.className}>Entre em Contato</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Informações de contato e links sociais */}
            <div className="bg-indigo-900/50 p-6 rounded-xl flex flex-col space-y-6">
              <h3 className="text-2xl font-semibold">Fale Conosco</h3>

              {/* Redes sociais e contatos */}
              <div className="flex flex-col space-y-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-1.725 0-3.35-.405-4.8-1.125l-5.25 1.35 1.35-5.25a10.452 10.452 0 01-1.125-4.8c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5z" fillRule="nonzero"/>
                  </svg>
                  <span>WhatsApp: (11) 99999-9999</span>
                </a>

                <a
                  href="https://instagram.com/mansaodossonhos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>@mansaodossonhos</span>
                </a>

                <a
                  href="https://facebook.com/mansaodossonhos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  href="mailto:contato@mansaodossonhos.com.br"
                  className="flex items-center space-x-3 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@mansaodossonhos.com.br</span>
                </a>
              </div>
            </div>

            {/* Endereço e mapa */}
            <div className="bg-indigo-900/50 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Nossa Localização</h3>
              <address className="not-italic mb-6">
                <p className="text-lg mb-1">Avenida das Celebrações, 1000</p>
                <p className="text-lg mb-1">Jardim Flores - São Paulo/SP</p>
                <p className="text-lg mb-1">CEP: 00000-000</p>
              </address>

              {/* Mini mapa - iframe incorporado do Google Maps (substitua o src pelo seu endereço) */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975730756854!2d-46.65879282378059!3d-23.564228860680143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1686153292527!5m2!1sen!2sbr"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Mansão dos Sonhos"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Fundo em azul escuro/roxo */}
      <footer className="w-full bg-indigo-950 text-white py-10 border-t border-indigo-800">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Casa de Festas - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
