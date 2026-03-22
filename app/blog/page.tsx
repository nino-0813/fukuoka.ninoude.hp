import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog';
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
      <article className="pt-20 pb-20 bg-[#fafaf9]">
        <header className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30" aria-hidden>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a67c52]/10 to-transparent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-en-serif text-[#a67c52] text-6xl md:text-8xl font-light italic tracking-widest mb-4">
              Blog
            </h1>
            <p className="font-serif-jp text-xl text-[#1a1a1a] tracking-[0.3em]">ブログ</p>
            <p className="mt-6 text-[#5a5a5a] max-w-2xl mx-auto text-sm md:text-base">
              二の腕痩せ・肩甲骨まわり・ブライダルケアのヒントと、サロンからのお知らせをお届けします。
            </p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="パンくずリスト"
            className="flex items-center space-x-2 text-sm text-[#1a1a1a]/50 mb-10"
          >
            <Link href="/" className="hover:text-[#a67c52] transition-colors">ホーム</Link>
            <span aria-hidden className="text-[#1a1a1a]/30">/</span>
            <span className="text-[#1a1a1a]">ブログ</span>
          </nav>

          <section className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-white rounded-2xl border border-[#e8e6e3] overflow-hidden hover:border-[#a67c52]/20 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-44 shrink-0 relative aspect-[16/10] sm:aspect-square bg-[#f5f2ed]">
                      <Image
                        src={post.thumbnail}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 176px"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center min-w-0">
                      {post.category && (
                        <span className="text-xs text-[#a67c52] font-medium tracking-wide mb-1">
                          {post.category}
                        </span>
                      )}
                      <h2 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#a67c52] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-[#5a5a5a] line-clamp-2 leading-relaxed">
                        {post.description}
                      </p>
                      <time
                        dateTime={post.date}
                        className="mt-3 text-xs text-[#1a1a1a]/50"
                      >
                        {new Date(post.date).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </div>
      </article>
    </>
  );
}
