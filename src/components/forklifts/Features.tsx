import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function Features() {
  const t = useTranslations('Products.product2');

  return (
    <div className="w-1/2 p-8 bg-white rounded-xl shadow-lg">
      <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-8 flex items-center justify-end gap-3 text-right">
        <span className="text-yellow-400 border-b-4 border-yellow-400 pb-2">{t('keyFeatures')}</span>
      </h3>
      <ul className="space-y-6">
        {t.raw('features').map((feature: string, index: number) => (
          <li key={index} className="flex items-center justify-end gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
            <span className="text-lg md:text-xl lg:text-1xl text-gray-700 group-hover:text-gray-900 transition-colors text-right">{feature}</span>
            <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
          </li>
        ))}
      </ul>
    </div>
  );
}