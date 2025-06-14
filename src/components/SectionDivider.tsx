"use client";

interface SectionDividerProps {
  pattern?: 'wave' | 'zigzag'; // Tipo de padrão do divisor
  color?: string; // Classe de cor do Tailwind (ex: 'text-pink-100')
  position?: 'top' | 'bottom'; // Posição do divisor
  invertedOnDark?: boolean; // Se deve inverter cores em modo escuro
}

/**
 * Componente que renderiza um divisor de seção com padrões diferentes
 * @param pattern - Tipo de padrão: 'wave' (ondas) ou 'zigzag' (zigue-zague)
 * @param color - Classe de cor do Tailwind (text-*)
 * @param position - Posição do divisor: 'top' ou 'bottom'
 * @param invertedOnDark - Se deve inverter cores em modo escuro
 */
export default function SectionDivider({
  pattern = 'wave',
  color = 'text-pink-100',
  position = 'bottom',
  invertedOnDark = false
}: SectionDividerProps) {
  const positionClasses = position === 'top' ? 'top-0' : 'bottom-0';
  
  // Para cor invertida no modo escuro
  const colorClass = invertedOnDark
    ? `${color} dark:text-gray-900` 
    : color;

  // Escolha do padrão SVG baseado no tipo
  const renderSvgPath = () => {
    if (pattern === 'wave') {
      return (
        <path 
          d="M0,0 L120,40 L240,0 L360,40 L480,0 L600,40 L720,0 L840,40 L960,0 L1080,40 L1200,0 L1200,120 L0,120 Z"
        />
      );
    } else {
      return (
        <path 
          d="M0,40 L50,10 L100,50 L150,20 L200,70 L250,30 L300,80 L350,0 L400,60 L450,10 L500,90 L550,20 L600,70 L650,30 L700,80 L750,10 L800,50 L850,30 L900,60 L950,0 L1000,50 L1050,20 L1100,80 L1150,40 L1200,60 L1200,120 L0,120 Z"
        />
      );
    }
  };

  return (
    <div className={`absolute ${positionClasses} left-0 w-full h-20 overflow-hidden`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute ${positionClasses} left-0 w-full h-full ${colorClass}`}
        fill="currentColor"
      >
        {renderSvgPath()}
      </svg>
    </div>
  );
}
