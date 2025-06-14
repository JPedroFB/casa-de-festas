// Exemplo de como usar os hooks customizados separadamente

import { useModalControls, useScrollControls } from './DecorationGallery/';

// Exemplo de componente que usa apenas o controle de modal
const SimpleImageViewer = ({ images }) => {
  const imageButtonRefs = useRef(new Map());
  const mockScrollRef = useRef(null);

  const {
    showModal,
    activeIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
    setActiveIndex,
  } = useModalControls({
    allImages: images,
    imageButtonRefs,
    scrollContainerRef: mockScrollRef,
  });

  return (
    <div>
      {images.map((image, index) => (
        <button key={index} onClick={() => openModal(image.src)}>
          <img src={image.src} alt={image.alt} />
        </button>
      ))}
      
      {showModal && (
        <div className="modal">
          <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
          <button onClick={prevImage}>Anterior</button>
          <button onClick={nextImage}>Próxima</button>
          <button onClick={closeModal}>Fechar</button>
        </div>
      )}
    </div>
  );
};

// Exemplo de componente que usa apenas o controle de scroll
const HorizontalGallery = ({ images }) => {
  const {
    scrollContainerRef,
    showScrollIndicators,
    scrollLeft,
    scrollRight,
  } = useScrollControls();

  return (
    <div className="relative">
      <button onClick={scrollLeft} disabled={!showScrollIndicators}>
        ←
      </button>
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto flex gap-4"
      >
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      
      <button onClick={scrollRight} disabled={!showScrollIndicators}>
        →
      </button>
    </div>
  );
};

export { SimpleImageViewer, HorizontalGallery };
