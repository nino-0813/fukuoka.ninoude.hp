import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { LOCATION, HOURS, LINE_URL, BASE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'アクセス・店舗案内 | ジプソフィル 福岡 二の腕痩せ専門サロン',
  description:
    'ジプソフィル福岡店へのアクセス。福岡市東区の完全予約制プライベートサロン。営業時間・LINE予約はこちら。',
  openGraph: {
    title: 'アクセス・店舗案内 | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    url: '/access',
  },
  alternates: { canonical: `${BASE_URL}/access` },
};

export default function AccessPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'アクセス', url: `${BASE_URL}/access` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <article className="pt-24 pb-16 bg-[#f5f2ed]">
        <div className="container mx-auto px-4 py-8">
          <nav aria-label="パンくずリスト" className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
            <Link href="/" className="hover:text-[#a67c52]">
              TOP
            </Link>
            <span aria-hidden>&gt;</span>
            <span className="text-[#a67c52]">アクセス</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-16">
          <h1 className="font-serif-jp text-3xl md:text-4xl text-[#1a1a1a] tracking-widest">
            アクセス・店舗案内
          </h1>
          <p className="mt-4 text-[#5a5a5a]">
            福岡市東区の完全予約制プライベートサロンです。詳細な住所はご予約確定時にお伝えします。
          </p>
        </header>

        <section className="max-w-4xl mx-auto px-4 bg-white rounded-[40px] shadow-xl overflow-hidden border border-[#a67c52]/5">
          <div className="p-12 lg:p-20">
            <h2 className="font-serif-jp text-2xl text-[#1a1a1a] mb-10 font-bold">
              ジプソフィル®︎ 福岡店
            </h2>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <span className="w-12 h-12 rounded-full bg-[#f5f2ed] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#a67c52]" size={24} aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">
                    所在地
                  </p>
                  <p className="text-[#5a5a5a] text-base leading-relaxed font-serif-jp">
                    {LOCATION}
                    <br />
                    <span className="text-sm text-[#a67c52]/80 mt-2 block">
                      ※詳細はご予約確定時にお伝えいたします。
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <span className="w-12 h-12 rounded-full bg-[#f5f2ed] flex items-center justify-center shrink-0">
                  <Clock className="text-[#a67c52]" size={24} aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">
                    営業時間
                  </p>
                  <p className="text-[#5a5a5a] text-base font-serif-jp">{HOURS}</p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#a67c52] text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-[#8c6239] transition-all shadow-lg text-sm font-bold"
                >
                  <MessageCircle size={20} aria-hidden />
                  <span>LINEで予約・相談</span>
                </a>
                <a
                  href="https://www.instagram.com/ninoude.fukuoka.emi/?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-[#a67c52]/20 rounded-full flex items-center justify-center text-[#a67c52] hover:bg-[#f5f2ed] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] relative curved-mask">
            <iframe
              src="https://www.google.com/maps?q=福岡県福岡市東区&output=embed"
              title="福岡県福岡市東区の地図"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </article>
    </>
  );
}
