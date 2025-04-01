'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  className: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => ((prev as number) === 0 ? images.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => ((prev as number) === images.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <div className="px-10 w-full ">
      <div className="grid grid-cols-12 gap-3">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`group relative overflow-hidden rounded-lg cursor-pointer ${image.className}`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-[101]"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="relative w-full h-full max-w-5xl mx-4">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-[101]"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </div>
  );
} 