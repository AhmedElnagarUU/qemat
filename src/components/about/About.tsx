'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('title')}</h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('description')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-yellow-400 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">خدمات متكاملة</h3>
              <p className="text-gray-600">نقدم مجموعة شاملة من خدمات تأجير المعدات الثقيلة لتلبية احتياجات مشاريعكم</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-2 bg-yellow-400 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">خبرة واسعة</h3>
              <p className="text-gray-600">نمتلك خبرة واسعة في مجال تأجير المعدات الثقيلة في المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}