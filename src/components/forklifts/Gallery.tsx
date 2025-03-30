'use client';

import { useTranslations } from 'next-intl';
import { images } from '@/config/images';
import Features from './Features';
import GalleryGrid from '@/components/GalleryGrid';

export default function ForkliftsGallery() {
  const t = useTranslations('Products.product2');

  const galleryImages = [
    {
      src: images.gallery.forklifts.image1,
      alt: t('title'),
      className: 'col-span-6 aspect-[16/9]'
    },
    {
      src: images.gallery.forklifts.image2,
      alt: t('title'),
      className: 'col-span-6 aspect-[16/9]'
    },
    {
      src: images.gallery.forklifts.image3,
      alt: t('title'), 
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.forklifts.image4,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.forklifts.image5,
      alt: 'forklifts', 
      className: 'col-span-4 aspect-[4/3]'
    },
  ];

  return (
    <section className="mt-30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center">
            <GalleryGrid images={galleryImages} />
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center">
            <Features />
          </div>
        </div>
      </div>
    </section>
  );
} 