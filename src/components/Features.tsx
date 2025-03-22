"use client";

import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('Features');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t('title')}</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('feature1.title')}</h3>
              <p className="text-gray-600">{t('feature1.description')}</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('feature2.title')}</h3>
              <p className="text-gray-600">{t('feature2.description')}</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('feature3.title')}</h3>
              <p className="text-gray-600">{t('feature3.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 