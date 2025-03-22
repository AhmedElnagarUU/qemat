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

// Define the supported locales
const locales = ['en', 'ar'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params promise to extract the locale
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    // Dynamically import the locale-specific messages
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
