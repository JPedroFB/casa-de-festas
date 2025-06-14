const GalleryStyles = () => {
  return (
    <style jsx global>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.92);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes slideIn {
        from {
          transform: translateY(-10px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(126, 34, 206, 0.4);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(126, 34, 206, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(126, 34, 206, 0);
        }
      }

      .animate-fadeIn {
        animation: fadeIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .animate-zoomIn {
        animation: zoomIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .animate-slideIn {
        animation: slideIn 0.5s ease-out forwards;
      }

      .animate-pulse-purple {
        animation: pulse 2s infinite;
      }

      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  );
};

export default GalleryStyles;
