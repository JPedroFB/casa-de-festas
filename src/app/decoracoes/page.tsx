import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { Henny_Penny } from "next/font/google";
import DecorationGallery from "../../components/DecorationGallery";
import { getAllAlbums } from "../../utils/albumsService";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

async function DecorationsContent() {
  // Busca os álbuns de forma dinâmica
  const albums = await getAllAlbums();
    return (
    <div className="space-y-12 md:space-y-16">
      {albums.map((album) => (
        <div key={album.id} className="mb-12">
          <DecorationGallery
            mainImage={album.mainImage}
            supportImages={album.supportImages}
            theme={album.tema}
            photographer={{
              name: album.photographePartner?.label || "Fotógrafo",
              instagram: album.photographePartner?.link || "#",
              profileImage: "https://i.pravatar.cc/100" // Avatar genérico
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function Decoracoes() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Cabeçalho */}
        <section className="w-full bg-gradient-to-br from-indigo-950 to-purple-900 relative pt-24 px-4 pb-32">
          <div className="w-full flex flex-col justify-center items-center py-8 px-2.5 sm:px-4">
            <div className="w-full sm:w-[90%] max-w-[1920px] mb-10 text-center px-2.5 sm:px-0">
              <h1 className={`${hennyPenny.className} text-4xl md:text-5xl lg:text-6xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300`}>
                Decorações dos Sonhos
              </h1>
              <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                Transformamos qualquer ambiente em um cenário mágico para seu evento especial, com decorações exclusivas e personalizadas.
              </p>
            </div>
          </div>
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
        </section>

        {/* Galerias de Decorações */}
        <section className="py-12 px-4 bg-pink-100 relative pb-32">
          <div className="container mx-auto max-w-6xl space-y-16 pb-8">
            <Suspense fallback={<p className="text-center text-xl">Carregando galerias...</p>}>
              <DecorationsContent />
            </Suspense>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-full text-pink-100"
              fill="currentColor"
            >
              <path d="M0,40 L50,10 L100,50 L150,20 L200,70 L250,30 L300,80 L350,0 L400,60 L450,10 L500,90 L550,20 L600,70 L650,30 L700,80 L750,10 L800,50 L850,30 L900,60 L950,0 L1000,50 L1050,20 L1100,80 L1150,40 L1200,60 L1200,120 L0,120 Z"></path>
            </svg>          </div>
        </section>
        
        {/* Seção de Contato */}
        <ContactSection 
          title="Vamos Criar Sua Decoração de Sonho?"
          description="Entre em contato conosco para discutir sua visão e transformá-la em uma experiência única e memorável."
        />
      </main>
      <Footer />
    </>
  );
}
