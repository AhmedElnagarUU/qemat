"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Products')

  const services = [
    {
      icon: '/image (1).jpg',
      title: t('product1.title'),
      description: t('product1.description'),
    },
    {
      icon: '/image (2).jfif',
      title: t('product2.title'),
      description: t('product2.description'),
    },
    {
      icon: '/image (3).jfif',
      title: t('product3.title'),
      description: t('product3.description'),
    },
    {
      icon: '/image (4).jfif',
      title: t('product4.title'),
      description: t('product4.description'),
    }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-start">
          {/* Services Grid - Left Side */}
          <div className="w-full lg:w-2/3">
            <div className="grid rounded-lg grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 border border-gray-100 hover:border-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 group"
                >
                  <div className="mb-6 h-48 relative rounded-lg overflow-hidden">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="text-yellow-500 hover:text-yellow-600 text-sm font-medium inline-flex items-center no-underline"
                  >
                    {t('learnMore')}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="w-full lg:w-1/3 text-center lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <Link
              href="#contact"
              className="bg-yellow-500 rounded-lg hover:bg-yellow-600 text-black font-medium py-4 px-8 inline-flex items-center transition-colors"
            >
              {t('learnMore')}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

