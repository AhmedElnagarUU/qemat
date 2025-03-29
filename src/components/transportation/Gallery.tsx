'use client';

import { useTranslations } from 'next-intl';
import { images } from '@/config/images';
import Features from './Features';
import GalleryGrid from '@/components/GalleryGrid';

export default function TransportationGallery() {
  const t = useTranslations('Products.product4');

  const galleryImages = [
    {
      src: images.gallery.transportation.image5,
      alt: t('title'), 
      className: 'col-span-12 aspect-[16/9]'
    },
    {
      src: images.gallery.transportation.image2,
      alt: t('title'),
      className: 'col-span-4 aspect-[16/9]'
    },
    {
      src: images.gallery.transportation.image3,
      alt: t('title'), 
      className: 'col-span-4 aspect-[16/9]'
    },
    {
      src: images.gallery.transportation.image4,
      alt: t('title'),
      className: 'col-span-4 aspect-[16/9]'
    },
    {
      src: images.gallery.transportation.image1,
      alt: t('title'),
      className: 'col-span-6 aspect-[16/9]'
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

        <div className="flex flex-col md:flex-row gap-8">
          <GalleryGrid images={galleryImages} />
          <Features />
        </div>
      </div>
    </section>
  );
} 