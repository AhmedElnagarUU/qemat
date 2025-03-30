'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import {images} from '@/config/images'
import Link from 'next/link';

interface EquipmentCard {
  titleKey: string;
  image: string;
  width: number;
  height: number;
  href: string;
}

export default function Services() {
  const t = useTranslations('Products');
  const locale = useLocale();

  const equipmentList: EquipmentCard[] = [
    {
      titleKey: t('product1.title'),
      image: images.equipment.cranes,
      width: 320,
      height: 320,
      href: `/${locale}/products/cranes`
    },
    {
      titleKey: t('product2.title'), 
      image: images.equipment.forklift,
      width: 300,
      height: 300,
      href: `/${locale}/products/forklifts`
    },
    {
      titleKey: t('product4.title'),
      image: images.equipment.transportation,
      width: 280,
      height: 280,
      href: `/${locale}/products/transportation`
    },
    // {
    //   titleKey: t('product3.title'),
    //   image: images.equipment.generators,
    //   width: 300,
    //   height: 300,
    //   href: `/${locale}/products/generators`
    // },
  ];

  return (
    <div id="services" className="mt-30 max-w-screen mx-auto overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold uppercase mb-2">{t('title')}</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl mb-20 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {equipmentList.map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                className="shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-yellow-400 overflow-hidden flex flex-col w-60 h-[400px] group"
              >
                <div className="p-4">
                  <h3 className="font-medium text-center mb-2">{item.titleKey}</h3>
                </div>
                <div className="flex-grow flex items-center justify-center px-4">
                  <Image
                    src={item.image}
                    alt={item.titleKey}
                    width={item.width}
                    height={item.height}
                    className="absolute transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="bg-yellow-400 py-2 text-center transition-colors duration-300 ease-in-out">
                  <span className="text-sm font-medium uppercase">{t('learnMore')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
