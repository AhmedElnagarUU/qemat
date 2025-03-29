'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { images } from '@/config/images';

export default function CranesHero() {
  const t = useTranslations('Products.product1');

  return (
    <section className="relative text-center pt-20 h-[50vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={images.hero.main}
          alt='cranes'     
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="container  mx-auto px-4 relative z-10">
        <h1 className="text-4xl  text-center md:text-5xl font-bold text-yellow-400 mb-4">{t('title')}</h1>
       
      </div>
    </section>
  );
} 