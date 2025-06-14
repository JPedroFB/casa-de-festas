import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { Henny_Penny } from "next/font/google";
import DecorationGallery from "../../components/DecorationGallery";
import { getAllAlbums } from "../../utils/albumsService";
import SectionDivider from "../../components/SectionDivider";

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
              instagramProfile: album.photographePartner?.label || "#",
              profileImage:
                album.photographePartner?.profileImage ||
                "https://i.pravatar.cc/100", // Usa a imagem de perfil se disponível, ou avatar genérico como fallback
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
      <Navbar />{" "}
      <main className="min-h-screen">        {/* Cabeçalho */}
        <section className="w-full bg-gradient-to-tl from-emerald-300/90 via-purple-300/90 to-yellow-200/90 relative pt-24 px-4 pb-32">
          <div className="w-full flex flex-col justify-center items-center py-8 px-2.5 sm:px-4">
            <div className="w-full sm:w-[90%] max-w-[1920px] mb-10 text-center px-2.5 sm:px-0">              <h1
                className={`${hennyPenny.className} text-4xl md:text-5xl lg:text-6xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-purple-600`}
              >
                Decorações dos Sonhos
              </h1>
              <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
                Transformamos qualquer ambiente em um cenário mágico para seu
                evento especial, com decorações exclusivas e personalizadas.
              </p>
            </div>
          </div>
          <SectionDivider
            pattern="wave"
            color="text-pink-100"
            position="bottom"
          />
        </section>{" "}
        {/* Galerias de Decorações */}
        <section className="py-12 px-4 bg-pink-100 relative pb-32">
          <div className="container mx-auto max-w-6xl space-y-16 pb-8">
            <Suspense
              fallback={
                <p className="text-center text-xl">Carregando galerias...</p>
              }
            >
              <DecorationsContent />
            </Suspense>
          </div>
          <SectionDivider
            pattern="zigzag"
            color="text-indigo-950"
            position="bottom"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
