import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const metadata: Metadata = {
  title: "Qemat Alrafeat | Equipment Rental Services",
  description: "Your trusted partner in heavy equipment rental in Saudi Arabia",
}

// Validate that the incoming `locale` parameter is valid
const locales = ['en', 'ar'];

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${locale === 'ar' ? 'font-arabic' : ''}`}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Riyadh">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
