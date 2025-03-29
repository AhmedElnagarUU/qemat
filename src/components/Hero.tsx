"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import ShapeDivider from './ShapeDivider'
import { images } from '@/config/images'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute h-full w-full inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={images.hero.main}
          alt={t('title')}
          fill
          priority
          className="object-cover brightness-[0.4]"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t('title')} <br />
          <span className="text-yellow-500">{t('highlight')}</span>
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-8">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#test"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors"
          >
            {t('cta')}
          </Link>
          <Link
            href="#contact"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            {t('contact')}
          </Link>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <ShapeDivider variant="wave" fillColor="#ffffff" />
      </div>
    </section>
  )
}
