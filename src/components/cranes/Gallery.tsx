'use client';

import { useTranslations } from 'next-intl';
import { images } from '@/config/images';
import Features from './Features';
import GalleryGrid from '@/components/GalleryGrid';

export default function CranesGallery() {
  const t = useTranslations('Products.product1');

  const galleryImages = [
    {
      src: images.gallery.cranes.image14,
      alt: t('title'),
      className: 'col-span-12 aspect-[16/9]'
    },
    {
      src: images.gallery.cranes.image12,
      alt: t('title'),
      className: 'col-span-6 aspect-[16/9]' 
    },
    {
      src: images.gallery.cranes.image4,
      alt: t('title'), 
      className: 'col-span-6 aspect-[16/9]'
    },
    {
      src: images.gallery.cranes.image5,
        alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image6,
          alt: 'cranes', 
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image7,
      alt: 'cranes',
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image8,
      alt: 'cranes',
      className: 'col-span-6 aspect-[16/9]'
    },
    {
      src: images.gallery.cranes.image9,
      alt: t('title'),
      className: 'col-span-6 aspect-[16/9]'
    },
    {
      src: images.gallery.cranes.image10,
      alt: t('title'),
      className: 'col-span-12 aspect-[16/9]'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>

        <div className="flex justify-center max-w-[90%] mx-auto gap-8">
          <GalleryGrid images={galleryImages} />
          <Features />
        </div>
      </div>
    </section>
  );
}