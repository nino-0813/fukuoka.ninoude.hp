import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Activity, Clock } from 'lucide-react';
import { MENU_ITEMS } from '@/lib/constants';

const FIRST_MENU_IMAGE = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_135.webp';
const CUSTOM_MENU_IMAGE = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_135.webp';
import { SectionHeader } from '@/components/SectionHeader';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';
import { BASE_URL } from '@/lib/constants';

const iconMap = { Sparkles, Activity, Clock } as const;

export const metadata: Metadata = {
  title: 'メニュー・料金 | 二の腕痩せ 福岡 ジプソフィル',
  description:
    '二の腕痩せ専門サロン ジプソフィル福岡店のメニュー・料金。初回体験¥9,900。体験後はカスタムメニューが選べます。短期集中・ブライダルケア。完全予約制。',
  openGraph: {
    title: 'メニュー・料金 | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    description: '初回体験¥9,900。まずは体験から、その後カスタムメニューが選べます。福岡市東区完全予約制。',
    url: '/menu',
  },
  alternates: { canonical: `${BASE_URL}/menu` },
};

export default function MenuPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'メニュー・料金', url: `${BASE_URL}/menu` },
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
            <span className="text-[#a67c52]">メニュー・料金</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-12">
          <h1 className="font-serif-jp text-3xl md:text-4xl text-[#1a1a1a] tracking-widest">
            メニュー・料金
          </h1>
          <p className="mt-4 text-[#5a5a5a]">
            まずは初回体験（¥9,900）から。体験終了後、お悩みに合わせたカスタムメニューがお選びいただけます。
          </p>
        </header>

        <section className="container mx-auto px-4" aria-labelledby="menu-list-heading">
          <h2 id="menu-list-heading" className="sr-only">
            施術メニュー一覧
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {MENU_ITEMS.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
              return (
                <section
                  key={item.id}
                  className="group p-10 rounded-[40px] bg-white border border-[#a67c52]/10 hover:shadow-2xl transition-all flex flex-col text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-8 shrink-0 relative bg-[#f5f2ed]">
                    {item.id === 1 ? (
                      <Image
                        src={FIRST_MENU_IMAGE}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : item.id === 2 || item.id === 3 ? (
                      <Image
                        src={CUSTOM_MENU_IMAGE}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-[#a67c52]">
                        <Icon size={32} aria-hidden />
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif-jp text-xl text-[#1a1a1a] mb-4 font-bold tracking-widest">
                    {item.title}
                  </h3>
                  {item.price ? (
                    <>
                      <p className="text-[#a67c52] font-en-serif italic text-3xl mb-2">{item.price}</p>
                      <p className="text-[10px] text-[#a67c52]/60 mb-8 uppercase tracking-[0.3em]">
                        {item.duration}
                      </p>
                    </>
                  ) : (
                    <p className="text-[#a67c52]/80 text-sm mb-8">初回体験後にご案内</p>
                  )}
                  <p className="text-[#5a5a5a] text-sm leading-loose flex-1 mb-10 font-serif-jp">
                    {item.description}
                  </p>
                  <a
                    href="https://line.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#a67c52] text-white py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all tracking-widest text-xs uppercase block text-center"
                  >
                    LINEで予約
                  </a>
                </section>
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}
