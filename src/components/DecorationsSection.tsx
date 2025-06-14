"use client";

import { Henny_Penny } from "next/font/google";
import Link from "next/link";
import SectionDivider from "./SectionDivider";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
});

export default function DecorationsSection() {
  return (
    <section id="decoracoes" className="w-full bg-pink-50 relative pb-16">
      {" "}
      <SectionDivider
        pattern="zigzag"
        color="text-indigo-950"
        position="bottom"
      />
      <div className="w-full sm:container mx-auto py-16 px-2.5 sm:px-4 sm:w-[90%] max-w-[1920px]">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 px-2.5 sm:px-0">
          <span className={hennyPenny.className}>Nossas Decorações</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 px-2.5 sm:px-0">
          Transforme sua celebração em um evento mágico com nossas decorações
          temáticas personalizadas
        </p>        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 px-2.5 sm:px-0">
          <Link href="/decoracoes" className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/albuns/1/foto1.png"
                alt="Decoração de aniversário"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-4">
                <span className="text-white font-medium text-lg">
                  Mundo Bita
                </span>
              </div>
            </div>
          </Link>
          
          <Link href="/decoracoes" className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/albuns/1/foto2.png"
                alt="Decoração de casamento"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-4">
                <span className="text-white font-medium text-lg">
                  Principe
                </span>
              </div>
            </div>
          </Link>
          
          <Link href="/decoracoes" className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/albuns/1/foto3.png"
                alt="Decoração infantil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-4">
                <span className="text-white font-medium text-lg">
                  Miraculous Ladybug
                </span>
              </div>
            </div>
          </Link>
        </div>        <div className="text-center px-2.5 sm:px-0">
          <Link
            href="/decoracoes"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:from-purple-700 hover:to-pink-600 transition-all hover:shadow-lg"
          >
            Ver Todas as Decorações
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
