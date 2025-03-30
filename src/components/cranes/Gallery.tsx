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
    <section className="mt-30">
      <div className="container  mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="order-2 md:order-1  w-full md:w-1/2 flex justify-center">
            <GalleryGrid images={galleryImages} />
          </div>
          <div className="order-1 md:order-2  w-full md:w-1/2 flex justify-center">
            <Features />
          </div>
        </div>
      </div>
    </section>
  );
}