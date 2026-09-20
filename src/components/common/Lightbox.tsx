import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ActivityGalleryItem } from '../../types';
import { usePortfolio } from '../../context/PortfolioContext';

interface LightboxProps {
  images: ActivityGalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const { localize, t } = usePortfolio();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const hasMultiple = images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xs p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Modal controls bar */}
      <div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xs font-mono text-stone-400 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={t((d) => d.common.closeModal)}
          className="p-2 rounded-full bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation buttons */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label={t((d) => d.common.prevImage)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 border border-stone-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-400"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label={t((d) => d.common.nextImage)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 border border-stone-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-400"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image and Caption container */}
      <div
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-lg bg-stone-950 border border-stone-800 shadow-2xl">
          <img
            src={currentItem.src}
            alt={localize(currentItem.alt)}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl">
          <p className="text-sm sm:text-base text-stone-200 font-medium leading-relaxed">
            {localize(currentItem.caption)}
          </p>
          <p className="text-xs text-stone-400 mt-1 font-mono">
            {localize(currentItem.alt)}
          </p>
        </div>
      </div>
    </div>
  );
};
