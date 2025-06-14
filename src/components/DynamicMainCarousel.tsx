"use client";

import dynamic from 'next/dynamic';
import { Slide } from '@/data/mockData';

// Carregamento dinâmico do componente MainCarousel
const MainCarousel = dynamic(() => import('./MainCarousel'), {
  loading: () => (
    <div className="w-[100%] max-w-[1920px] my-12">
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse"></div>
    </div>
  ),
  ssr: false // Desabilita o Server-Side Rendering para este componente
});

interface DynamicMainCarouselProps {
  slides: Slide[];
}

export default function DynamicMainCarousel({ slides }: DynamicMainCarouselProps) {
  return <MainCarousel slides={slides} />;
}
