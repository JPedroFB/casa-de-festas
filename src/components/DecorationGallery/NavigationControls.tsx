import { NavigationControlsProps } from "./types";

const NavigationControls = ({
  onScrollLeft,
  onScrollRight,
  showScrollIndicators,
}: NavigationControlsProps) => {
  return (
    <>
      {/* Botão esquerda */}
      <button
        onClick={onScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full z-10 backdrop-blur-sm hidden sm:block hover:bg-white dark:hover:bg-gray-800"
        aria-label="Rolar para esquerda"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Botão direita */}
      <button
        onClick={onScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full z-10 backdrop-blur-sm hidden sm:block hover:bg-white dark:hover:bg-gray-800 ${
          !showScrollIndicators ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Rolar para direita"
        disabled={!showScrollIndicators}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default NavigationControls;
