"use client";

import MainCarousel from '../components/MainCarousel';
import StructureCard from '../components/StructureCard';
import ExpandableKidsArea from '../components/ExpandableKidsArea';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';

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

        <div className="w-full flex justify-center items-center py-16 px-4">
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
            Nossa Estrutura
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
            className="absolute bottom-0 left-0 w-full h-full text-indigo-950"
            fill="currentColor"
          >
            <path d="M0,40 L50,10 L100,50 L150,20 L200,70 L250,30 L300,80 L350,0 L400,60 L450,10 L500,90 L550,20 L600,70 L650,30 L700,80 L750,10 L800,50 L850,30 L900,60 L950,0 L1000,50 L1050,20 L1100,80 L1150,40 L1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="container mx-auto py-16 px-4 w-[90%] max-w-[1920px] mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Nossos Serviços
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

      {/* Seção de Contato - Adicionando uma seção simples de contato */}
      <section id="contato" className="w-full bg-indigo-950 text-white py-16">
        <div className="container mx-auto px-4 w-[90%] max-w-[1920px]">
          <h2 className="text-4xl font-bold text-center mb-8">Entre em Contato</h2>

          <div className="max-w-lg mx-auto bg-indigo-900/50 p-6 rounded-xl">
            <div className="flex flex-col space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
                <input type="text" id="nome" className="w-full px-4 py-2 rounded bg-white/10 border border-indigo-400" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded bg-white/10 border border-indigo-400" />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea id="mensagem" rows={4} className="w-full px-4 py-2 rounded bg-white/10 border border-indigo-400"></textarea>
              </div>

              <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                Enviar Mensagem
              </button>
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
