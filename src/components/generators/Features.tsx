import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function Features() {
  const t = useTranslations('Products.product3');

  return (
    <div className="w-1/2 p-6">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-yellow-400">Key Features</span>
      </h3>
      <ul className="space-y-4">
        {t.raw('features').map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 