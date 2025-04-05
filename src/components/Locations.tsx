'use client';

import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Locations() {
  const t = useTranslations('Locations');

  return (
    <section className="py-20 bg-gray-50 relative z-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">{t('title')}</h2>
       
        
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>

        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Link href="https://maps.app.goo.gl/4yXqck8ZDG4z6zBZ9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors">
              <MapPin className="w-6 h-6 text-yellow-500 mb-2" />
              <span className="text-lg">{t('riyadhAddress')}</span>
              <span className="text-lg mt-2">{t('riyadhPhone')}</span>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Link href="https://maps.app.goo.gl/EdPwG84nUPLwLUrK9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-700 hover:text-yellow-500 transition-colors">
              <MapPin className="w-6 h-6 text-yellow-500 mb-2" />
              <span className="text-lg">{t('riyadhAddress2')}</span>
              <span className="text-lg mt-2">{t('riyadhPhone2')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 