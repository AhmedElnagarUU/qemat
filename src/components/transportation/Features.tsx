import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function TransportationFeatures() {
  const t = useTranslations('Products.product4');

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold relative inline-block">
          <span className="relative z-10 text-gray-800">{t('keyFeatures')}</span>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 opacity-50 -z-10"></div>
        </h3>
      </div>
      
      <ul className="space-y-6 max-w-2xl mx-auto ">
        {t.raw('features').map((feature: string, index: number) => (
          <li 
            key={index} 
            className="flex items-center justify-end gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
          >
            <span className="text-lg text-right md:text-xl text-gray-700 group-hover:text-gray-900 transition-colors">
              {feature}
            </span>
            <CheckCircle2 className="w-8 h-8 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
          </li>
        ))}
      </ul>
    </div>
  );
}    