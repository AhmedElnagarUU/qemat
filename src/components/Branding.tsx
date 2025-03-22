import { useTranslations } from 'next-intl';
import { Shield, Clock, Award, Users } from 'lucide-react';

export default function Branding() {
  const t = useTranslations('Branding');

  const stats = [
    {
      icon: Shield,
      value: '15+',
      label: t('stats.experience'),
    },
    {
      icon: Clock,
      value: '24/7',
      label: t('stats.support'),
    },
    {
      icon: Award,
      value: '500+',
      label: t('stats.projects'),
    },
    {
      icon: Users,
      value: '100+',
      label: t('stats.clients'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t('title')}</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{t('subtitle')}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
                <stat.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t('values.quality.title')}</h3>
            <p className="text-gray-600">{t('values.quality.description')}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t('values.innovation.title')}</h3>
            <p className="text-gray-600">{t('values.innovation.description')}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t('values.reliability.title')}</h3>
            <p className="text-gray-600">{t('values.reliability.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 