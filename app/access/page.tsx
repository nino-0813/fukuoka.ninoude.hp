import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { LOCATION, HOURS, LINE_URL, BASE_URL } from '@/lib/constants';
import { DeferredMap } from '@/components/DeferredMap';
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
      <article className="pt-20 pb-16 bg-[#f5f2ed]">
        <header className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30" aria-hidden>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a67c52]/10 to-transparent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-en-serif text-[#a67c52] text-6xl md:text-8xl font-light italic tracking-widest mb-4">
              Access
            </h1>
            <p className="font-serif-jp text-xl text-[#1a1a1a] tracking-[0.3em]">アクセス・店舗案内</p>
            <p className="mt-6 text-[#5a5a5a] max-w-2xl mx-auto text-sm md:text-base">
              福岡市東区の完全予約制プライベートサロンです。詳細な住所はご予約確定時にお伝えします。
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <nav aria-label="パンくずリスト" className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
            <Link href="/" className="hover:text-[#a67c52]">TOP</Link>
            <span aria-hidden>&gt;</span>
            <span className="text-[#a67c52]">アクセス</span>
          </nav>
        </div>

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
            <DeferredMap title="福岡県福岡市東区の地図" className="rounded-[inherit]" />
          </div>
        </section>
      </article>
    </>
  );
}
