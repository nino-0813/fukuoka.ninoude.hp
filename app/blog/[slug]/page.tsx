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
      images: [
        {
          url: post.thumbnail || '/opengraph-image.png',
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${SALON_NAME}`,
      description: post.description,
      images: [post.thumbnail || '/opengraph-image.png'],
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
      <article className="pt-20 pb-20 bg-[#fafaf9]">
        <header className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30" aria-hidden>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a67c52]/10 to-transparent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="font-en-serif text-[#a67c52] text-2xl md:text-3xl font-light italic tracking-widest mb-4">
              Blog
            </p>
            {post.category && (
              <span className="text-xs text-[#a67c52] font-medium tracking-wide">{post.category}</span>
            )}
            <h1 className="font-serif-jp text-2xl md:text-4xl text-[#1a1a1a] tracking-wide mt-4 leading-tight">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="mt-6 block text-sm text-[#5a5a5a]"
            >
              {new Date(post.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.slug === 'ninoude-yase-fukuoka-esthe-homecare' && (
              <figure className="mt-10 max-w-3xl mx-auto">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#f5f2ed]">
                  <Image
                    src={post.thumbnail}
                    alt="福岡で二の腕痩せを目指す方へ"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 768px"
                    priority
                  />
                </div>
              </figure>
            )}
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <nav
            aria-label="パンくずリスト"
            className="flex items-center space-x-2 text-sm text-[#1a1a1a]/50 mb-10"
          >
            <Link href="/" className="hover:text-[#a67c52] transition-colors">ホーム</Link>
            <span aria-hidden className="text-[#1a1a1a]/30">/</span>
            <Link href="/blog" className="hover:text-[#a67c52] transition-colors">ブログ</Link>
            <span aria-hidden className="text-[#1a1a1a]/30">/</span>
            <span className="text-[#1a1a1a] truncate max-w-[180px] sm:max-w-none">{post.title}</span>
          </nav>

          <div className="space-y-10 text-[#1a1a1a] leading-[1.9]">
            {post.slug === 'ninoude-yase-fukuoka-esthe-homecare' ? (
              <>
                <p className="text-[15px]">
                  「ダイエットしても二の腕だけ細くならない」「ノースリーブを着たいのに、腕が気になって自信が持てない」——
                  そんなお悩みを抱えている方は多くいます
                </p>
                <p className="text-[15px]">
                  二の腕は、顔や脚に比べて後回しにされがちな部位ですが、写真や後ろ姿、ドレス・半袖・ノースリーブを着たときに印象が出やすいパーツです。
                  だからこそ「本気で二の腕痩せしたい」と思ったときには、自己流だけで続けるのか、プロに任せるのかを早めに見極めることが大切です。
                </p>
                <p className="text-[15px]">
                  この記事では、二の腕が太く見えやすい原因、自宅ケアでできること、エステでケアするメリット、そして福岡で二の腕エステを選ぶポイントまでわかりやすく解説します。
                </p>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-8 mb-4 pb-2 border-b border-[#e8e6e3]">
                    二の腕が太くなる3つの原因
                  </h2>

                  <h3 className="font-bold mt-6 mb-2">1. 脂肪がつきやすく、落ちにくい</h3>
                  <p className="text-[15px]">
                    二の腕は日常生活の中で意識的に使う機会が少なく、見た目の変化を感じにくい部位です。体重が大きく変わっていなくても、腕まわりだけ「もたつく」「振袖肉が気になる」と感じる方もいます。
                  </p>

                  <h3 className="font-bold mt-6 mb-2">2. 姿勢の乱れで、腕まわりが大きく見える</h3>
                  <p className="text-[15px]">
                    巻き肩や猫背になると、肩から腕にかけてのラインが崩れやすくなります。実際には脂肪だけが原因ではなく、背中や肩甲骨まわりの硬さによって、二の腕がより太く見えてしまうケースもあります。
                  </p>

                  <h3 className="font-bold mt-6 mb-2">3. むくみや滞りでスッキリ見えない</h3>
                  <p className="text-[15px]">
                    デスクワーク、スマホ時間の長さ、運動不足などが重なると、肩まわりや腕まわりが重だるく感じやすくなります。こうした状態が続くと、見た目にもスッキリ感が出にくくなります。
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b border-[#e8e6e3]">
                    自宅ケアの限界とは
                  </h2>
                  <p className="text-[15px] mb-4">
                    自宅でできる二の腕ケアには、筋トレ、ストレッチ、マッサージ、食事の見直しなどがあります。どれもムダではありませんし、習慣化できれば体づくりの土台になります。
                  </p>
                  <p className="text-[15px] mb-4">
                    ただし「二の腕だけをどうにかしたい」という悩みに対しては、自宅ケアだけでは限界を感じる方も多いです。たとえば次のような壁が起きやすくなります。
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[15px]">
                    <li>正しい方法がわからない</li>
                    <li>続けても変化が見えにくい</li>
                    <li>肩や背中など関連部位まで自分ではケアしにくい</li>
                    <li>イベントまでに間に合わせたいのにペースが読めない</li>
                  </ul>
                  <p className="text-[15px] mt-4">
                    ブライダルや旅行、撮影など「この日までに整えたい」という目標がある場合は、自己流だけで進めるより、最初から専門家に相談した方が遠回りになりにくいこともあります。
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b border-[#e8e6e3]">
                    エステで二の腕痩せができる理由
                  </h2>
                  <p className="text-[15px]">
                    エステの強みは、単に腕だけを見るのではなく、肩・背中・姿勢・めぐり・見た目のラインまで含めて全体で考えられることです。
                  </p>
                  <p className="text-[15px] mt-4">
                    自己流のケアは「腕だけ」「筋トレだけ」になりがちですが、プロの施術では、二の腕が太く見える原因を整理しながら必要な部位へアプローチしやすくなります。
                    特に「写真で見ると太い」「肩まわりから厚い」「背中も気になる」という方は、腕単体ではなく上半身全体の見え方を整える視点が大切です。
                  </p>
                  <p className="text-[15px] mt-4">
                    また、サロンではカウンセリングを通じて、悩みの期間や目標時期に合わせた提案が受けられるため、「何をどれくらい続ければいいか」が見えやすいのもメリットです。
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b border-[#e8e6e3]">
                    ジプソフィルの施術について
                  </h2>
                  <p className="text-[15px]">
                    福岡の二の腕痩せ専門ジプソフィルは、二の腕特化技術を掲げるサロンで、オールハンド・筋膜リリース・リンパドレナージュを強みとしています。
                    来店されるお客様の悩みとしては「ダイエットしても二の腕だけ痩せない」「ジムに通っても変わらない」「ドレスが似合うラインにしたい」といった声が多いです。
                  </p>
                  <p className="text-[15px] mt-4">
                    初回体験コースは60分・9,900円で、カウンセリング＋全身デトックス＋二の腕集中アプローチ。体験後はお悩みに合わせたカスタムメニューをご案内します。
                  </p>
                  <p className="text-[15px] mt-4">
                    福岡店は福岡市東区の完全予約制プライベートサロン。詳細住所はご予約確定後にご案内します。
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b border-[#e8e6e3]">
                    福岡で二の腕エステを選ぶポイント
                  </h2>
                  <ol className="list-decimal pl-6 space-y-3 text-[15px]">
                    <li>
                      <strong>二の腕に特化しているか</strong>
                      <br />
                      全身痩身がメインのサロンより、二の腕悩みに強いサロンの方が相談しやすく、比較もしやすくなります。
                    </li>
                    <li>
                      <strong>症例やビフォーアフターがあるか</strong>
                      <br />
                      「どんな悩みの人が、どれくらいの期間で、どう変わったか」が見えるとイメージに近い結果を想像しやすくなります。
                    </li>
                    <li>
                      <strong>カウンセリングが丁寧か</strong>
                      <br />
                      二の腕は人によって原因が違います。目標時期を聞いたうえで提案してくれるかが重要です。
                    </li>
                    <li>
                      <strong>通いやすさ・相談しやすさがあるか</strong>
                      <br />
                      完全予約制、プライベート空間、LINE相談のしやすさなどは継続のしやすさにもつながります。
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-[#1a1a1a] mt-10 mb-4 pb-2 border-b border-[#e8e6e3]">
                    よくある質問
                  </h2>
                  <div className="space-y-6 text-[15px]">
                    <div>
                      <p className="font-bold">Q. 何回くらいで変化を実感できますか？</p>
                      <p className="mt-2">
                        個人差はありますが、まずは「1回での変化」を体感し、目標に合わせて継続回数やペースを一緒に決めていくのがおすすめです。
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">Q. 痛みはありますか？</p>
                      <p className="mt-2">
                        滞りがある箇所は痛みを感じる場合がありますが、強さは体調やお好みに合わせて調整します。
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">Q. 運動や食事制限は必要ですか？</p>
                      <p className="mt-2">
                        過度な制限は不要です。施術効果を高めるための簡単なホームケアや食事のコツをお伝えします。
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mt-10 rounded-2xl border border-[#e8e6e3] bg-white p-6">
                  <h2 className="text-lg font-bold text-[#1a1a1a] mb-3">
                    初回体験のご予約はこちら
                  </h2>
                  <p className="text-[15px] text-[#5a5a5a] leading-relaxed">
                    「自己流では限界を感じている」「夏までに二の腕をすっきり見せたい」「ブライダルに向けて、後ろ姿まで整えたい」
                    ——そんな方は、まずは一度プロに相談してみませんか？
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/monitor-recruitment#%E5%88%9D%E5%9B%9E%E4%BD%93%E9%A8%93%E3%81%AE%E3%81%94%E4%BA%88%E7%B4%84"
                      className="inline-flex items-center justify-center bg-[#a67c52] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#8c6239] transition-colors"
                    >
                      予約フォームへ
                    </Link>
                    <a
                      href="https://lin.ee/DS9UvmW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white text-[#a67c52] border border-[#a67c52]/30 px-6 py-3 rounded-full font-bold text-sm hover:bg-[#f5f2ed] transition-colors"
                    >
                      LINEで相談する
                    </a>
                  </div>
                </section>
              </>
            ) : post.slug === 'stage-change-saeko' ? (
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
