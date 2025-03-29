'use client';

import { useTranslations } from 'next-intl';
import { images } from '@/config/images';
import Features from './Features';
import GalleryGrid from '@/components/GalleryGrid';

export default function GeneratorsGallery() {
  const t = useTranslations('Products.product3');

  const galleryImages = [
    {
      src: images.gallery.generators.image1,
      alt: t('title'),
      className: 'col-span-12 aspect-[21/9]'
    },
    
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <Features />
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </section>
  );
} 