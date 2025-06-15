import Image from "next/image";
import { ImageButtonProps } from "./types";

const ImageButton = ({
  image,
  isMain = false,
  className = "",
}: ImageButtonProps) => {
  const defaultClassName = isMain
    ? "relative w-[280px] h-full sm:w-[400px] sm:h-full md:w-[520px] md:h-full rounded-2xl overflow-hidden group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-shadow duration-300"
    : "relative w-[180px] h-full sm:w-[260px] sm:h-[calc(33.33%-10px)] rounded-2xl overflow-hidden group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-all duration-300";

  const iconSize = isMain ? "w-6 h-6" : "w-5 h-5";
  const iconPadding = isMain ? "p-3" : "p-2";

  return (
    <div
      className={`${defaultClassName} ${className}`}
      tabIndex={0}
      aria-label={`Imagem${isMain ? " principal" : ""}: ${image.alt}`}
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
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageButton;
