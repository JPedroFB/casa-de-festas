import { useState, useEffect, useRef } from "react";

export const useScrollControls = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicators, setShowScrollIndicators] = useState(true);

  // Funções para rolagem horizontal com botões
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Detecção de quando chegamos no início ou fim da rolagem
  useEffect(() => {
    const checkScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      // Se estamos no final ou perto do final, esconda indicadores
      if (
        scrollLeft + clientWidth >= scrollWidth - 10 ||
        scrollWidth <= clientWidth
      ) {
        setShowScrollIndicators(false);
      } else {
        setShowScrollIndicators(true);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Verificação inicial
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return {
    scrollContainerRef,
    showScrollIndicators,
    scrollLeft,
    scrollRight,
  };
};
