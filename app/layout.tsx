import type { Metadata } from 'next';
import { Zen_Old_Mincho, Cormorant_Garamond, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyCta } from '@/components/StickyCta';
import { JsonLd } from '@/components/JsonLd';
import { getLocalBusinessJsonLd } from '@/lib/schema';
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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SALON_NAME} | 福岡の二の腕ダイエット専門サロン`,
    template: `%s | ${SALON_NAME}`,
  },
  description:
    '福岡県福岡市東区にある二の腕痩せに特化した専門サロン。独自の技術で理想の細い二の腕を実現。完全予約制のプライベートサロンです。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: SALON_NAME,
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenOldMincho.variable} ${cormorant.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">
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
