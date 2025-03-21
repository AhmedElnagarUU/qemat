"use client";

import { useTranslations } from 'next-intl';
import { Trash2, Recycle, FileCheck } from 'lucide-react';

export default function Features() {
  const t = useTranslations('Features');

  const features = [
    {
      icon: Trash2,
      title: t('feature1.title'),
      description: t('feature1.description'),
    },
    {
      icon: Recycle,
      title: t('feature2.title'),
      description: t('feature2.description'),
    },
    {
      icon: FileCheck,
      title: t('feature3.title'),
      description: t('feature3.description'),
    },
  
   
  
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-100 hover:border-yellow-500/20 group transition-all duration-300"
            >
              <div className="mb-6">
                <feature.icon className="h-8 w-8 text-yellow-500 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 