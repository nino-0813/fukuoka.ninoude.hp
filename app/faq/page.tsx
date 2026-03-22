import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQS } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { getFAQPageJsonLd, getBreadcrumbJsonLd } from '@/lib/schema';
import { BASE_URL } from '@/lib/constants';
import { FAQAccordion } from '@/components/faq/FAQAccordion';

export const metadata: Metadata = {
  title: 'よくある質問 | 二の腕痩せ 福岡 ジプソフィル',
  description:
    '二の腕痩せ専門サロン ジプソフィル福岡店のよくある質問。効果・回数・痛み・運動や食事制限について。',
  openGraph: {
    title: 'よくある質問 | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    url: '/faq',
  },
  alternates: { canonical: `${BASE_URL}/faq` },
};

export default function FAQPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'よくある質問', url: `${BASE_URL}/faq` },
  ]);

  return (
    <>
      <JsonLd data={getFAQPageJsonLd()} />
      <JsonLd data={breadcrumb} />
      <article className="pt-20 pb-16 bg-white">
        <header className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30" aria-hidden>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a67c52]/10 to-transparent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-en-serif text-[#a67c52] text-6xl md:text-8xl font-light italic tracking-widest mb-4">
              FAQ
            </h1>
            <p className="font-serif-jp text-xl text-[#1a1a1a] tracking-[0.3em]">よくある質問</p>
            <p className="mt-6 text-[#5a5a5a] max-w-2xl mx-auto text-sm md:text-base">
              二の腕痩せ施術やご予約について、よくいただくご質問をまとめました。
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <nav aria-label="パンくずリスト" className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
            <Link href="/" className="hover:text-[#a67c52]">TOP</Link>
            <span aria-hidden>&gt;</span>
            <span className="text-[#a67c52]">よくある質問</span>
          </nav>
        </div>

        <section className="container mx-auto px-4 max-w-3xl" aria-label="よくある質問一覧">
          <FAQAccordion items={FAQS} />
        </section>

        <div className="container mx-auto px-4 text-center mt-16">
          <Link href="/#menu" className="text-[#a67c52] font-bold hover:underline">
            メニュー・料金を見る
          </Link>
        </div>
      </article>
    </>
  );
}
