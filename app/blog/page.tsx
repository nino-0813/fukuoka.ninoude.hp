import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'ブログ | ジプソフィル 福岡 二の腕痩せ専門サロン',
  description:
    '二の腕痩せ・肩甲骨出し・ブライダルケアのヒントやサロンのお知らせ。ジプソフィル福岡店のブログです。',
  openGraph: {
    title: 'ブログ | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    url: '/blog',
  },
  alternates: { canonical: `${BASE_URL}/blog` },
};

export default function BlogPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'ブログ', url: `${BASE_URL}/blog` },
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
            <span className="text-[#a67c52]">ブログ</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-16">
          <h1 className="font-serif-jp text-3xl md:text-4xl text-[#1a1a1a] tracking-widest">
            ブログ
          </h1>
          <p className="mt-4 text-[#5a5a5a]">
            二の腕痩せ・肩甲骨出し・ブライダルケアのヒントや、サロンからのお知らせをお届けします。
          </p>
        </header>

        <section className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[#5a5a5a] font-serif-jp">
            記事の準備ができ次第、順次公開してまいります。
          </p>
        </section>
      </article>
    </>
  );
}
