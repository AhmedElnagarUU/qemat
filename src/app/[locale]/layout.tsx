import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const metadata: Metadata = {
  title: "قمة الرافعات | خدمات تأجير كرينات ومعدات الثقيلة",
  description: "قمة الرافعات لتأجير المعدات الثقيلة - تأجير كرينات، روافع شوكية، مان ليفت، سيزر ليفت، مولدات كهربائية وثقالات أتوماتيك. نقدم حلول فعالة تلبي احتياجات المشاريع الصناعية والإنشائية في المملكة العربية السعودية",
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
      <body className={`${locale === 'ar' ? 'font-arabic' : ''} ${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Riyadh">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
