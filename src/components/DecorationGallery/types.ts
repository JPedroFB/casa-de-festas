export interface MainImage {
  src: string;
  alt: string;
}

export interface SupportImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Photographer {
  name: string;
  instagram: string;
  instagramProfile?: string;
  profileImage: string;
}

export interface DecorationGalleryProps {
  mainImage: MainImage;
  supportImages: SupportImage[];
  theme?: string;
  photographer?: Photographer;
}

export interface ImageButtonProps {
  image: MainImage | SupportImage;
  isMain?: boolean;
  onClick: (src: string) => void;
  onRegisterRef: (src: string, element: HTMLButtonElement | null) => void;
  className?: string;
}

export interface GalleryHeaderProps {
  theme: string;
  photographer?: Photographer;
}

export interface ImageModalProps {
  isOpen: boolean;
  images: (MainImage | SupportImage)[];
  activeIndex: number;
  theme: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSetIndex: (index: number) => void;
}

export interface NavigationControlsProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
  showScrollIndicators: boolean;
}

export interface ScrollIndicatorProps {
  showScrollIndicators: boolean;
}
