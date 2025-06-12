import { ReactNode } from "react";
export interface StructureItem {
  number: number;
  title: string;
  imageSrc: string;
  colorClass: string;
  items: string[];
}

export interface KidsAreaData {
  number: number;
  title: string;
  imageSrc: string;
  items: string[];
}

export interface Service {
  title: string;
  imageSrc: string;
  colorClass: string;
  items: string[];
  icon: ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

export const slideImages: string[] = [
  "/images/mesas.png",
  "/images/mesas2.png",
  "/images/brinquedos.png",
];

export const structureItems: StructureItem[] = [
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

export const kidsAreaData: KidsAreaData = {
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

export const services: Service[] = [
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
    buttonText: "Conheça o Cardápio",
    buttonLink: "#cardapio",
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
