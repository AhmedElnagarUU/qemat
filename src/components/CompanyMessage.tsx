import { useTranslations } from 'next-intl';
import { Target, Compass, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { images } from '@/config/images';

export default function CompanyMessage() {
  const t = useTranslations('CompanyMessage');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t('title')}</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">{t('subtitle')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('vision.title')}</h3>
                  <p className="text-gray-600">{t('vision.description')}</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Compass className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t('mission.title')}</h3>
                  <p className="text-gray-600">{t('mission.description')}</p>
                </div>
              </div>
            </div>

            {/* Goals List */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">{t('goals.title')}</h3>
              <ul className="space-y-4">
                {['goal1', 'goal2', 'goal3'].map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                    <span className="text-gray-600">{t(`goals.${goal}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={images.company.message}
              alt={t('imageAlt')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 