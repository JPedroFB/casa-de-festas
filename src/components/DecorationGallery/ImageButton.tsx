import Image from "next/image";
import { ImageButtonProps } from "./types";

const ImageButton = ({
  image,
  isMain = false,
  className = "",
  onClick,
  index,
}: ImageButtonProps) => {
  const defaultClassName = isMain
    ? "relative w-[280px] h-full sm:w-[400px] sm:h-full md:w-[520px] md:h-full rounded-2xl overflow-hidden group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    : "relative w-[180px] h-full sm:w-[260px] sm:h-[calc(33.33%-10px)] rounded-2xl overflow-hidden group ring-1 ring-indigo-200 dark:ring-indigo-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer";

  return (
    <div
      className={`${defaultClassName} ${className}`}
      tabIndex={0}
      aria-label={`Imagem${isMain ? " principal" : ""}: ${image.alt}`}
      onClick={() => onClick && onClick(index || 0)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick(index || 0);
        }
      }}
      role="button"
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
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
    </div>
  );
};

export default ImageButton;
