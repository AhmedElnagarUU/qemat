"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import Logo from "./logo"
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Header')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLanguageChange = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  const navItems = [
    { href: "/", label: t('home') },
    { href: "#about", label: t('about') },
    { href: "#services", label: t('products') },
    { href: "#locations", label: t('locations') },
    { href: "#contact", label: t('contact') }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo ar={"hidden md:block text-base"} en={" hidden md:block text-xs "} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={handleLanguageChange}
                className="text-white hover:text-yellow-400 transition-colors flex items-center gap-2" 
                aria-label="Switch Language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm">{locale === 'en' ? 'عربي' : 'English'}</span>
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={handleLanguageChange}
              className="text-white hover:text-yellow-400 transition-colors mr-4 flex items-center gap-2" 
              aria-label="Switch Language"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm">{locale === 'en' ? 'عربي' : 'English'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

