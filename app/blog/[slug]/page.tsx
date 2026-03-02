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
const IMG_BOOK_COVER = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_112.webp';
const IMG_STAGE_113 = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_113.webp';
const IMG_STAGE_8 = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_8.webp';
const IMG_TRAINING = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_125.webp';
const IMG_SAEKO_SUPPLEMENT = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_121.webp';

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
    image: post.thumbnail || IMG_BEFORE_AFTER,
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
            {post.slug === 'stage-change-saeko' ? (
              <>
                <p className="text-[15px]">
                  こんにちは！当サロンは、二の腕痩せに特化したエステサロンとして、日々多くのお客様の「理想の自分」への変化をお手伝いしています。今回は、多くのお客様から「SNSで見ました！」「この本、気になっていました」とお声をいただく、当サロンのオーナー・Yukiiko（ユキイコ）さんの著書『STAGE CHANGE! リズムワークで叶える、この先ずっとお金に困らない稼ぎ方』についてご紹介します。実はこの本、あの紗栄子さんが推薦文を寄せていることでも大きな話題となっているんです。
                </p>

                <figure className="my-10">
                  <div className="relative aspect-[3/4] max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-[#f5f2ed]">
                    <Image
                      src={IMG_BOOK_COVER}
                      alt="書籍 STAGE CHANGE! 表紙"
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-sm text-[#5a5a5a]">
                    『STAGE CHANGE!』表紙
                  </figcaption>
                </figure>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                    1. 紗栄子さんが惚れ込んだ「技術」と「在り方」
                  </h2>
                  <p className="text-[15px] mb-4">
                    モデルや実業家として、常に第一線で「本物」に触れてきた紗栄子さん。そんな彼女が、本書の帯でこのような言葉を寄せています。「私が惚れ込んだYukiikoさんのその技術と在り方に、あなたもきっと勇気をもらえる。」美容に対して誰よりもストイックで、審美眼を持つ紗栄子さんに「惚れ込んだ」と言わしめるのは、単なるマッサージの技術だけではありません。「二の腕を細くする」という結果はもちろん、それを通じて女性が自信を持ち、自立し、自分の人生を自分らしく生きていくというYukiikoさんの理念（在り方）に深く共感されているからです。
                  </p>
                  <figure className="my-8">
                    <div className="relative aspect-[4/5] max-w-[320px] mx-auto rounded-2xl overflow-hidden bg-[#f5f2ed]">
                      <Image
                        src={IMG_SAEKO_SUPPLEMENT}
                        alt="紗栄子さんが当サロンのサプリを紹介している様子"
                        fill
                        className="object-contain"
                        sizes="320px"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-[#5a5a5a]">
                      紗栄子さんが当サロンのサプリを紹介
                    </figcaption>
                  </figure>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                    2. なぜ「二の腕」なのか？
                  </h2>
                  <p className="text-[15px] mb-4">
                    本書の中でも触れられていますが、二の腕は「自分ではケアが難しく、年齢や体型が特に出やすい場所」です。ここが変わることで、今まで着られなかった服が着られるようになり、鏡を見るのが楽しくなる。その小さな成功体験が、人生を「ステージチェンジ」させる第一歩になります。当サロンが提供しているのは、まさにこの紗栄子さんが認めた独自のメソッド。ただ細くするだけでなく、体全体の循環を整え、内側から輝くためのアプローチを大切にしています。
                  </p>
                  <figure className="my-8">
                    <div className="relative aspect-[8/5] w-full rounded-2xl overflow-hidden bg-[#f5f2ed]">
                      <Image
                        src={IMG_STAGE_113}
                        alt="二の腕施術のイメージ"
                        fill
                        className="object-cover"
                        sizes="(max-width: 672px) 100vw, 672px"
                      />
                    </div>
                  </figure>
                  <figure className="my-8">
                    <div className="relative aspect-[8/5] w-full rounded-2xl overflow-hidden bg-[#f5f2ed]">
                      <Image
                        src={IMG_STAGE_8}
                        alt="肩甲骨・二の腕まわりのケア"
                        fill
                        className="object-cover"
                        sizes="(max-width: 672px) 100vw, 672px"
                      />
                    </div>
                  </figure>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                    3. 「自立したい」と願うすべての女性へ
                  </h2>
                  <p className="text-[15px] mb-4">
                    書籍のサブタイトルには「お金に困らない稼ぎ方」とありますが、これは単なるノウハウ本ではありません。子育てをしながら、地方暮らしのパート主婦からスタートし、美容の技術を武器に自らの手で人生を切り拓いてきたYukiikoさんの実体験が詰まっています。当サロンも、その志を同じくする一員として、「今の自分を変えたい」「経済的にも精神的にも自立して、輝きたい」と願う女性たちを、技術と心を込めたカウンセリングでサポートしています。
                  </p>
                  <figure className="my-8">
                    <div className="relative aspect-[8/5] w-full rounded-2xl overflow-hidden bg-[#f5f2ed]">
                      <Image
                        src={IMG_TRAINING}
                        alt="アップデート研修の様子"
                        fill
                        className="object-cover"
                        sizes="(max-width: 672px) 100vw, 672px"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-sm text-[#5a5a5a]">
                      アップデート研修の様子
                    </figcaption>
                  </figure>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                    最後に：あなたも新しいステージへ
                  </h2>
                  <p className="text-[15px] mb-4">
                    紗栄子さんが推薦する「本物の技術」を、ぜひ一度当サロンで体感してみませんか？「二の腕が変われば、人生が変わる」—大げさかもしれませんが、私たちは本気でそう信じています。自分自身の人生を、もっと自由に、もっと欲張りに楽しむために。私たちがあなたのステージチェンジを全力で応援します。福岡市東区の完全予約制プライベートサロンで、お会いできることを心よりお待ちしています。
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
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
