export interface Partner {
  id: string;
  service: string;
  category: string;
  logo: string;
  images: { src: string; alt: string }[];
  instagram: string;
  email: string;
  phone: string;
}

export const partners: Partner[] = [
  {
    id: "fotografo",
    service: "Fotógrafo",
    category: "Profissionais",
    logo: "/images/mesas.png",
    images: [
      { src: "/images/mesas.png", alt: "Ensaio" },
      { src: "/images/mesas2.png", alt: "Evento" },
      { src: "/images/brinquedos.png", alt: "Making of" },
    ],
    instagram: "https://instagram.com/fotografo",
    email: "foto@example.com",
    phone: "(21) 99999-9999",
  },
  {
    id: "pintura-rosto",
    service: "Pintura de Rosto",
    category: "Entretenimento",
    logo: "/images/mesas2.png",
    images: [
      { src: "/images/mesas2.png", alt: "Arte 1" },
      { src: "/images/brinquedos.png", alt: "Arte 2" },
      { src: "/images/mesas.png", alt: "Arte 3" },
    ],
    instagram: "https://instagram.com/pintura",
    email: "pintura@example.com",
    phone: "(21) 98888-8888",
  },
  {
    id: "tatuagem",
    service: "Tatuagem Temporária",
    category: "Entretenimento",
    logo: "/images/brinquedos.png",
    images: [
      { src: "/images/brinquedos.png", alt: "Tatuagem 1" },
      { src: "/images/mesas.png", alt: "Tatuagem 2" },
      { src: "/images/mesas2.png", alt: "Tatuagem 3" },
    ],
    instagram: "https://instagram.com/tatuagem",
    email: "tattoo@example.com",
    phone: "(21) 97777-7777",
  },
  {
    id: "boleira",
    service: "Boleira e Doces",
    category: "Comida",
    logo: "/images/salgados.png",
    images: [
      { src: "/images/salgados.png", alt: "Bolos" },
      { src: "/images/mesas.png", alt: "Doces" },
      { src: "/images/mesas2.png", alt: "Delícias" },
    ],
    instagram: "https://instagram.com/boleira",
    email: "doces@example.com",
    phone: "(21) 96666-6666",
  },
  {
    id: "decoracoes",
    service: "Decorações e Cenários",
    category: "Decoração",
    logo: "/images/mesas.png",
    images: [
      { src: "/images/mesas.png", alt: "Decoração 1" },
      { src: "/images/mesas2.png", alt: "Decoração 2" },
      { src: "/images/brinquedos.png", alt: "Decoração 3" },
    ],
    instagram: "https://instagram.com/decoracoes",
    email: "decor@example.com",
    phone: "(21) 95555-5555",
  },
  {
    id: "balao",
    service: "Esculturas de Balão",
    category: "Decoração",
    logo: "/images/brinquedos.png",
    images: [
      { src: "/images/brinquedos.png", alt: "Balão 1" },
      { src: "/images/mesas.png", alt: "Balão 2" },
      { src: "/images/mesas2.png", alt: "Balão 3" },
    ],
    instagram: "https://instagram.com/balao",
    email: "balao@example.com",
    phone: "(21) 94444-4444",
  },
];
