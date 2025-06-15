import Image from "next/image";
import { GalleryHeaderProps } from "./types";

const GalleryHeader = ({ theme, photographer }: GalleryHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
      <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
        Tema: {theme}
      </h3>{" "}
      {photographer && (
        <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 px-4 py-1.5 rounded-full">
          <div className="flex items-center gap-3 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-purple-500"
            >
              <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
              <path
                fillRule="evenodd"
                d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <a
                href={`https://instagram.com/${photographer.instagram.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
              >
                {photographer.instagramProfile}
              </a>
            </span>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-purple-300 dark:border-purple-500 shadow-md flex-shrink-0">
            <Image
              src={photographer.profileImage}
              alt={`Perfil de ${photographer.name}`}
              width={40}
              height={40}
              className="object-cover w-full h-full"
              unoptimized={photographer.profileImage.includes("pravatar")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryHeader;
