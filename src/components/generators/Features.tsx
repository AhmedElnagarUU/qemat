import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function GeneratorsFeatures() {
  const t = useTranslations('Features');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{t('title')}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.raw('features').map((feature: string, index: number) => (
            <div key={index} className="md:w-1/2 p-8 bg-white">
              <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-8 flex items-center justify-end gap-3 text-right">
                <span className="text-yellow-400 border-b-4 border-yellow-400 pb-2">{feature}</span>
              </h3>
              <ul className="space-y-6">
                {t.raw('features').map((subFeature: string, subIndex: number) => (
                  <li key={subIndex} className="flex items-center justify-end gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <span className="text-lg md:text-xl lg:text-1xl text-gray-700 group-hover:text-gray-900 transition-colors text-right">{subFeature}</span>
                    <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 