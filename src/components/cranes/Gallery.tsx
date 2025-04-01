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
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image12,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image4,
      alt: t('title'), 
      className: 'col-span-4 aspect-[4/3]'
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
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image9,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    
    {
      src: images.gallery.cranes.image11,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image13,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image15,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image16,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image17,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image18,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image19,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image20,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image21,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image22,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image23,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image24,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    },
    {
      src: images.gallery.cranes.image25,
      alt: t('title'),
      className: 'col-span-4 aspect-[4/3]'
    }
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