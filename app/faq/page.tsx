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
      <article className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 py-8">
          <nav aria-label="パンくずリスト" className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
            <Link href="/" className="hover:text-[#a67c52]">
              TOP
            </Link>
            <span aria-hidden>&gt;</span>
            <span className="text-[#a67c52]">よくある質問</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-16">
          <h1 className="font-serif-jp text-3xl md:text-4xl text-[#1a1a1a] tracking-widest">
            よくある質問
          </h1>
          <p className="mt-4 text-[#5a5a5a] max-w-2xl mx-auto">
            二の腕痩せ施術やご予約について、よくいただくご質問をまとめました。
          </p>
        </header>

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
