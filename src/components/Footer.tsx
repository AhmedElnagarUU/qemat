"use client"

import { useLocale, useTranslations } from 'next-intl'
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  const t = useTranslations('Footer')
  const locale = useLocale();

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo ar={"text-xs"} en={"text-xs"} />
            </div>
            <p className="text-gray-400 mb-6">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('home')}
                </Link>
              </li>
            
              <li>
                <Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('products')}
                </Link>
              </li>
              {/*  */}
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('ourServices')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${locale}/products/cranes`} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('craneRental')}
                </Link>
              </li>
              <li>
                <Link href={`${locale}/products/forklifts`} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('forkliftRental')}
                </Link>
              </li>
              <li>
                <Link href={`${locale}/products/generators`} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('generatorRental')}
                </Link>
              </li>
              <li>
                <Link href={`${locale}/products/transportation`} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('transportationServices')}
                </Link>
              </li>
              <li>
                <Link href={`${locale}/products/transportation`} className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {t('technicalSupport')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-400">{t('phone')}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-400">{t('email')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Qemat Alrafeat for Renting Equipment Est. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
