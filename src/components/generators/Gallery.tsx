'use client';

import { useTranslations } from 'next-intl';
import { images } from '@/config/images';
import Features from './Features';
import GalleryGrid from '@/components/GalleryGrid';

export default function GeneratorsGallery() {
  const t = useTranslations('Products.product3');

  const galleryImages = [
    { src: images.gallery.generators.image1, alt: t('title'), className: 'col-span-4 aspect-[4/3]' },
    { src: images.gallery.generators.image2, alt: t('title'), className: 'col-span-4 aspect-[4/3]' },
    { src: images.gallery.generators.image3, alt: t('title'), className: 'col-span-4 aspect-[4/3]' },
    { src: images.gallery.generators.image4, alt: t('title'), className: 'col-span-4 aspect-[4/3]' },
    { src: images.gallery.generators.image5, alt: 'generators', className: 'col-span-4 aspect-[4/3]' },
  ];

  return (
    <section className="mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>

        <div className="w-full">
          <Features />
        </div>
        <div className="mt-30 w-full">
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </section>
  );
} 