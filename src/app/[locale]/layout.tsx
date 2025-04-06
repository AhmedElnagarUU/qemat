import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

// Define the supported locales
const locales = ['en', 'ar'];

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  
  // Define metadata for each language
  const metadataByLocale: Record<string, Metadata> = {
    en: {
      title: "Qimat Al-Rafa'at | Crane & Heavy Equipment Rental Services",
      description: "Qimat Al-Rafa'at offers heavy equipment rentals, including cranes, forklifts, man lifts, scissor lifts, generators, and automatic hoists. We provide effective solutions for industrial and construction projects in Saudi Arabia.",
    },
    ar: {
      title: "قمة الرافعات | خدمات تأجير كرينات ومعدات الثقيلة",
      description: "قمة الرافعات لتأجير المعدات الثقيلة - تأجير كرينات، روافع شوكية، مان ليفت، سيزر ليفت، مولدات كهربائية وثقالات أتوماتيك. نقدم حلول فعالة تلبي احتياجات المشاريع الصناعية والإنشائية في المملكة العربية السعودية.",
    },
  };

  return metadataByLocale[locale] || metadataByLocale['ar'];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(params.locale)) {
    notFound();
  }

  let messages;
  try {
    // Dynamically import the locale-specific messages
    messages = (await import(`@/messages/${params.locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={params.locale} className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4KG6SLTBS4" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4KG6SLTBS4');
          `}
        </Script>
      </head>
      <body className={`${params.locale === 'ar' ? 'font-arabic' : ''} ${inter.className}`}>
        <NextIntlClientProvider locale={params.locale} messages={messages} timeZone="Asia/Riyadh">
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
