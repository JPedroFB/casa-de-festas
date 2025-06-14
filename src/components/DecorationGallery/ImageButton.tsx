import Image from "next/image";
import { ImageButtonProps } from "./types";

const ImageButton = ({
  image,
  isMain = false,
  onClick,
  onRegisterRef,
  className = "",
}: ImageButtonProps) => {
  const defaultClassName = isMain
    ? "relative w-[280px] h-full sm:w-[400px] sm:h-full md:w-[520px] md:h-full rounded-2xl overflow-hidden cursor-zoom-in group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-shadow duration-300"
    : "relative w-[180px] h-full sm:w-[260px] sm:h-[calc(33.33%-10px)] rounded-2xl overflow-hidden cursor-zoom-in group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-all duration-300";

  const iconSize = isMain ? "w-6 h-6" : "w-5 h-5";
  const iconPadding = isMain ? "p-3" : "p-2";

  return (
    <button
      ref={(el) => onRegisterRef(image.src, el)}
      className={`${defaultClassName} ${className}`}
      onClick={() => onClick(image.src)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(image.src);
      }}
      tabIndex={0}
      aria-label={`Expandir imagem${isMain ? " principal" : ""}: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority={isMain}
        sizes={
          isMain
            ? "(max-width: 640px) 280px, (max-width: 768px) 400px, 520px"
            : "(max-width: 640px) 180px, 260px"
        }
        className="transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex ${isMain ? 'items-center justify-center' : 'items-end justify-center pb-3'}`}>
        <div className={`bg-white/80 dark:bg-indigo-900/80 ${iconPadding} rounded-full backdrop-blur-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${iconSize} text-purple-600 dark:text-purple-300`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ImageButton;
