import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL, SALON_NAME, LINE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '当サロンについて | 二の腕痩せ 福岡 ジプソフィル',
  description:
    '二の腕特化・オールハンドのジプソフィル福岡店。専門分野、お客様の悩み、サロンの想いとよくある質問をご紹介します。',
  openGraph: {
    title: '当サロンについて | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    url: '/about',
  },
  alternates: { canonical: `${BASE_URL}/about` },
};

const STRENGTHS = [
  '二の腕特化技術',
  '全てオールハンド',
  '筋膜リリース',
  'リンパドレナージュ',
  '全身痩せ',
  'バストアップ',
  '足痩せ',
  'お腹痩せ',
  'ドレス映え',
  '産後痩せ',
  '背中痩せ',
];

const CONCERNS = [
  'ダイエットしても二の腕だけ痩せない',
  '写真で見ると更に太い',
  '運動しても痩せない',
  'ジムに通っても変わらない',
  '年々太くなってる気がする',
  '腕が隠れる服を着ている',
  'エステに行っても二の腕だけは変わらなかった',
  'ノースリーブが着たいのに出せない',
  'もっとシルエットが出る服が着たい',
  'ドレスが似合うラインにしたい',
  '細い真っ直ぐな二の腕になりたい',
  '腕が凄く筋肉質',
];

const PHILOSOPHY = [
  '今からでも理想の自分になれます',
  '着たかった腕が出る服を思いっきり楽しめます',
  '望む細い真っ直ぐな二の腕になれます',
  '二の腕は筋トレしては細くなりません。むしろ逆効果になります',
  '二の腕はしっかり流す事で細くなります',
  'やるなら１日でも早い方がいいです。時間が経てば経つほど老廃物と脂肪が蓄積していき更に時間が掛かっていきます',
  'お客様一人一人に合ったご提案を致します',
];

const FAQ_ITEMS = [
  { q: '何回くらいで細くなりますか？', a: '個人差がありますが、1回でも変化を実感される方が多いです。根本的な改善には継続をご案内しています。' },
  { q: '痛みはありますか？', a: '老廃物が溜まっている箇所は多少の痛みを感じる場合がありますが、強さは調整いたします。' },
  { q: 'かなりボリュームがありますが変わりますか？', a: 'はい。ボリュームがある方も時間をかけて変化していきます。個人差はあります。' },
  { q: '今までジムに通っても変わらなかったが変わりますか？', a: '二の腕は「流す」アプローチで変化しやすくなります。ジムでは難しい部分に特化した施術です。' },
  { q: '年齢で変わりますか？', a: '年齢より蓄積年数や生活習慣の影響が大きいです。若い方の方が変化が早い傾向はありますが、どの年代でも変化は可能です。' },
  { q: '忙しいですが続けれますか？', a: 'はい。通いやすい頻度とプランをご提案します。お気軽にご相談ください。' },
];

const CHANGES_FAST = [
  '二人三脚で一緒に頑張れる素直な人は変化が早い',
  '言われた事をしっかり継続出来る方',
  '目標がある方',
  'むくみが多い方は変化が早い',
  '年齢は若い方の方が蓄積年数が少ないので変化は早い',
];

const CHANGES_SLOW = [
  '外食が多い、お酒をよく飲まれる方',
  '睡眠が少ない方',
  '朝ごはんを食べないで夕飯を食べる方',
  'ボリュームがある方は時間は掛かりますがそれも個人差がある',
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: '当サロンについて', url: `${BASE_URL}/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <article className="pt-24 pb-20 bg-[#fafaf9]">
        <div className="container mx-auto px-4 py-8">
          <nav aria-label="パンくずリスト" className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
            <Link href="/" className="hover:text-[#a67c52]">TOP</Link>
            <span aria-hidden>&gt;</span>
            <span className="text-[#a67c52]">当サロンについて</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-20">
          <h1 className="font-serif-jp text-3xl md:text-4xl text-[#1a1a1a] tracking-widest">
            当サロンについて
          </h1>
          <p className="mt-4 text-[#5a5a5a] max-w-2xl mx-auto">
            {SALON_NAME}の専門分野・想い・よくある質問をご紹介します。
          </p>
        </header>

        <div className="container mx-auto px-4 max-w-3xl space-y-20">
          {/* ① サロンの専門分野・強み */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              サロンの専門分野・強み
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STRENGTHS.map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <CheckCircle2 className="text-[#a67c52] shrink-0" size={18} />
                  <span className="text-[#1a1a1a]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ② 来店されるお客様の悩み */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              来店されるお客様の悩み
            </h2>
            <p className="text-sm text-[#5a5a5a] mb-6">お客様からよくいただくお声です。</p>
            <ul className="space-y-2">
              {CONCERNS.map((item) => (
                <li key={item} className="text-[#1a1a1a] pl-4 border-l-2 border-[#a67c52]/30">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* ③ 普段お客様に伝えている考え方 */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              サロンの想い・スタンス
            </h2>
            <ul className="space-y-4">
              {PHILOSOPHY.map((item) => (
                <li key={item} className="flex items-start space-x-2">
                  <CheckCircle2 className="text-[#a67c52] shrink-0 mt-0.5" size={18} />
                  <span className="text-[#1a1a1a] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ④ カウンセリングでお伺いしていること */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              カウンセリングでお伺いしていること
            </h2>
            <p className="text-[#5a5a5a] mb-6">
              ご来店前・カウンセリング時に、お名前・ご希望・お悩みの期間・目標などをお伺いし、一人ひとりに合ったご提案をさせていただきます。体型のお悩み、ダイエット経験、着たい服やイベントのご予定など、お気軽にお話しください。
            </p>
          </section>

          {/* ⑤ よくある質問と回答 */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              よくある質問と回答
            </h2>
            <ul className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <li key={item.q} className="bg-white rounded-2xl p-6 border border-[#a67c52]/10">
                  <p className="font-bold text-[#1a1a1a] mb-2">Q. {item.q}</p>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">A. {item.a}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[#5a5a5a]">
              <Link href="/faq" className="text-[#a67c52] font-bold hover:underline">
                よくある質問一覧はこちら
              </Link>
            </p>
          </section>

          {/* ⑥ 変化が出やすい人・出にくい人 */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              変化が出やすい方・時間がかかる方
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-[#a67c52] uppercase tracking-wider mb-4">変化が早い方の特徴</h3>
                <ul className="space-y-2">
                  {CHANGES_FAST.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-[#1a1a1a]">
                      <CheckCircle2 className="text-[#a67c52] shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#a67c52] uppercase tracking-wider mb-4">時間がかかる場合</h3>
                <ul className="space-y-2 text-[#5a5a5a] text-sm">
                  {CHANGES_SLOW.map((item) => (
                    <li key={item} className="pl-4 border-l border-[#a67c52]/20">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ⑦ サロンを始めた理由 */}
          <section>
            <h2 className="text-xl font-bold text-[#1a1a1a] pb-3 border-b-2 border-[#a67c52] mb-8">
              サロンを始めた理由
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              私自身も二の腕だけが太く、ずっとコンプレックスで悩んでいました。筋トレしても変わらず、ノースリーブが似合わず、着たい服が着れませんでした。その中でこの施術に出会い、自身も変わり、1人でも多くの同じ悩みの方に寄り添い、お手伝いをして喜んでいただきたいと思ったからです。
            </p>
          </section>

          {/* ⑧ ご注意（言ってはいけないこと） */}
          <section className="bg-white/60 rounded-2xl p-6 border border-[#a67c52]/10">
            <h2 className="text-lg font-bold text-[#1a1a1a] mb-4">ご案内について</h2>
            <p className="text-sm text-[#5a5a5a] leading-relaxed">
              施術の効果・回数には個人差があるため、「何回で必ずここまで変化します」といったお約束はしておりません。また、施術により内出血やアザが生じる場合があります。ご了承ください。
            </p>
          </section>

          <div className="pt-12 text-center">
            <Link
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#a67c52] text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-[#8c6239] transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              LINEで予約・相談
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
