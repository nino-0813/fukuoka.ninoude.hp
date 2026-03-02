import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BASE_URL, SALON_NAME } from '@/lib/constants';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd, getArticleJsonLd } from '@/lib/schema';

const IMG_BEFORE_AFTER = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_56.webp';
const IMG_OWNER = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_60.webp';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: '記事が見つかりません' };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${SALON_NAME}`,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'ブログ', url: `${BASE_URL}/blog` },
    { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
  ]);

  const articleLd = getArticleJsonLd({
    title: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    image: IMG_BEFORE_AFTER,
    authorName: 'ジプソフィル 福岡',
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleLd} />
      <article className="pt-24 pb-20 bg-[#fafaf9]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="パンくずリスト"
            className="flex items-center space-x-2 text-sm text-[#1a1a1a]/50 mb-10"
          >
            <Link href="/" className="hover:text-[#a67c52] transition-colors">
              ホーム
            </Link>
            <span aria-hidden className="text-[#1a1a1a]/30">/</span>
            <Link href="/blog" className="hover:text-[#a67c52] transition-colors">
              ブログ
            </Link>
            <span aria-hidden className="text-[#1a1a1a]/30">/</span>
            <span className="text-[#1a1a1a] truncate max-w-[180px] sm:max-w-none">
              {post.title}
            </span>
          </nav>

          <header className="mb-12">
            {post.category && (
              <span className="text-xs text-[#a67c52] font-medium tracking-wide">
                {post.category}
              </span>
            )}
            <h1 className="mt-2 text-2xl md:text-[1.75rem] font-bold text-[#1a1a1a] leading-snug tracking-tight">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="mt-4 block text-sm text-[#1a1a1a]/50"
            >
              {new Date(post.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          <div className="space-y-10 text-[#1a1a1a] leading-[1.9]">
            <p className="text-[15px]">
              「ダイエットや運動をしているのに、二の腕だけ痩せない」「振袖やノースリーブが似合うようになりたい」とお悩みの方は多いのではないでしょうか。二の腕は脂肪が落ちにくく、自己流ではなかなか変化を実感しづらい部位です。この記事では、二の腕が痩せにくい理由と、細くするための解決法を福岡の二の腕専門サロンの視点からお伝えします。
            </p>

            <section>
              <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                二の腕が痩せない主な理由
              </h2>
              <p className="text-[15px] mb-4">
                二の腕（上腕三頭筋まわり）は、日常生活でほとんど使われにくいため、脂肪やむくみがたまりやすい場所です。さらに、以下のような理由で「痩せない」と感じやすくなります。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px]">
                <li>
                  <strong>血行・リンパの流れの悪さ</strong>
                  …肩や腕のこりで流れが滞り、老廃物や水分が残りやすい
                </li>
                <li>
                  <strong>筋肉の衰え</strong>
                  …腕の裏側の筋肉が弱く、たるみや脂肪が目立ちやすい
                </li>
                <li>
                  <strong>姿勢のクセ</strong>
                  …猫背や巻き肩で肩甲骨まわりが固まり、代謝や見た目に影響する
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                二の腕を細くするための解決法
              </h2>
              <p className="text-[15px] mb-4">
                ポイントは、「流れを整えること」と「適切なアプローチで続けること」です。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px]">
                <li>
                  <strong>リンパ・血流ケア</strong>
                  …肩甲骨まわりや腕のリンパを流し、むくみや老廃物を減らす
                </li>
                <li>
                  <strong>二の腕に特化した施術</strong>
                  …脂肪やたるみに効く技術で、部分的な変化を狙う
                </li>
                <li>
                  <strong>姿勢・肩甲骨のケア</strong>
                  …背中まわりをほぐし、代謝と見た目を整える
                </li>
              </ul>
              <p className="text-[15px] mt-4">
                専門サロンでは、上記を組み合わせた施術で、二の腕まわりを集中的にケアできます。運動だけでは難しい「部分痩せ」に近い変化を目指す方に適しています。
              </p>
            </section>

            <figure className="my-12">
              <div className="relative aspect-[8/5] w-full rounded-2xl overflow-hidden bg-[#f5f2ed]">
                <Image
                  src={IMG_BEFORE_AFTER}
                  alt="二の腕施術のビフォーアフター事例"
                  fill
                  className="object-cover"
                  sizes="(max-width: 672px) 100vw, 672px"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-[#5a5a5a]">
                施術事例（個人の結果であり、効果には個人差があります）
              </figcaption>
            </figure>

            <section>
              <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                福岡で二の腕専門ケアなら
              </h2>
              <p className="text-[15px] mb-6">
                ジプソフィル®︎福岡店は、二の腕痩せ・肩甲骨出し・ブライダルケアに特化した完全予約制のプライベートサロンです。一人ひとりのお悩みに合わせた施術で、細くしなやかな二の腕をサポートしています。
              </p>
              <figure className="my-8">
                <div className="relative aspect-[4/5] max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-[#f5f2ed]">
                  <Image
                    src={IMG_OWNER}
                    alt="ジプソフィル福岡 オーナー"
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-[#5a5a5a]">
                  ジプソフィル®︎ 福岡 オーナー
                </figcaption>
              </figure>
              <p className="text-[15px]">
                二の腕が痩せないとお悩みの方は、まずはカウンセリングや初回体験で、ご自身に合ったケア方法を相談してみてください。福岡市東区で、お待ちしています。
              </p>
            </section>

            <div className="pt-8 border-t border-[#e8e6e3]">
              <Link
                href="/#menu"
                className="inline-block bg-[#a67c52] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#8c6239] transition-colors"
              >
                メニュー・料金を見る
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
