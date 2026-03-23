import type { Metadata } from 'next';
import Script from 'next/script';
import { Zen_Old_Mincho, Cormorant_Garamond, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { JsonLd } from '@/components/JsonLd';
import { getLocalBusinessJsonLd, getWebSiteJsonLd } from '@/lib/schema';
import { BASE_URL, SALON_NAME } from '@/lib/constants';

const zenOldMincho = Zen_Old_Mincho({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zen-old-mincho',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const defaultTitle = `${SALON_NAME} | 福岡の二の腕ダイエット専門サロン`;
const defaultDescription =
  '福岡県福岡市東区にある二の腕痩せに特化した専門サロン。独自の技術で理想の細い二の腕を実現。完全予約制のプライベートサロンです。';
const ogImagePath = '/opengraph-image.png';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SALON_NAME}`,
  },
  description: defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: SALON_NAME,
    url: BASE_URL,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SALON_NAME}のサロンイメージ`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImagePath],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'xbClnrtHY9IMu4vpVugSEJ925t7K2BqYY_MMmkB9b10',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = 'G-XJVQSV835K';

  return (
    <html lang="ja" className={`${zenOldMincho.variable} ${cormorant.variable} ${notoSansJP.variable}`}>
      <body className="antialiased bg-[#f5f2ed]">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <JsonLd data={getWebSiteJsonLd()} />
        <JsonLd data={getLocalBusinessJsonLd()} />
        <Header />
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
