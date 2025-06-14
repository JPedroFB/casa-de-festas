import { ScrollIndicatorProps } from "./types";

const ScrollIndicator = ({ showScrollIndicators }: ScrollIndicatorProps) => {
  return (
    <>
      {/* Indicador de rolagem para mobile */}
      <div className="flex items-center justify-center mb-1 sm:mb-3 text-xs text-gray-500 sm:hidden">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          Deslize para ver mais fotos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>

      {/* Indicador de scroll moderno para desktop */}
      <div className="hidden sm:flex justify-center mt-4">
        <div className="bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-1.5 w-24 backdrop-blur-sm">
          <div
            className={`bg-gradient-to-r from-purple-500 to-indigo-500 h-1.5 rounded-full transition-all duration-500 ${
              showScrollIndicators ? "w-1/2" : "w-full"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
