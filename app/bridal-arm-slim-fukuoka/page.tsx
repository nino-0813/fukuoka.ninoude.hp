import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, CheckCircle2 } from 'lucide-react';
import { BASE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'ブライダル二の腕痩せ 福岡 | 挙式前ケア ジプソフィル',
  description:
    '福岡のブライダル二の腕痩せならジプソフィル。挙式直前の短期集中コースでドレス・振袖を美しく。完全個室・完全予約制。',
  openGraph: {
    title: 'ブライダル二の腕痩せ 福岡 | 二の腕痩せ専門ジプソフィル®︎',
    description: '挙式・披露宴までに二の腕をスッキリ。福岡市東区のブライダル専門ケア。',
    url: '/bridal-arm-slim-fukuoka',
  },
  alternates: { canonical: `${BASE_URL}/bridal-arm-slim-fukuoka` },
};

const POINTS = [
  '挙式までに最短で仕上げる全3回コース',
  '背中・デコルテも同時ケア',
  '完全個室のプライベート空間',
  'ドレス・振袖の試着が楽しみに',
];

export default function BridalArmSlimPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'ブライダル二の腕痩せ', url: `${BASE_URL}/bridal-arm-slim-fukuoka` },
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
            <span className="text-[#a67c52]">ブライダル二の腕痩せ</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-16">
          <span className="font-en-serif text-[#a67c52] text-xl italic tracking-wide block mb-2">
            Bridal Arm Slim
          </span>
          <h1 className="font-serif-jp text-3xl md:text-5xl text-[#1a1a1a] tracking-widest leading-tight">
            ブライダル二の腕痩せ
            <br />
            <span className="text-2xl md:text-3xl mt-2 block">福岡で挙式前ケア</span>
          </h1>
          <p className="mt-6 text-[#5a5a5a] max-w-2xl mx-auto">
            結婚式・披露宴までに二の腕をスッキリさせたい方へ。福岡市東区の二の腕痩せ専門サロンが、短期集中でサポートします。
          </p>
        </header>

        <section className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
            <Image
              src="https://picsum.photos/800/1000?bridal,dress,arm"
              alt="ブライダル二の腕ケアのイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="font-serif-jp text-2xl md:text-3xl text-[#1a1a1a] mb-8">
              挙式直前ブライダルケアコース
            </h2>
            <p className="text-[#5a5a5a] leading-loose mb-8">
              ドレスや振袖は二の腕が目立ちやすいデザインが多く、「挙式までに何とかしたい」とお悩みの方がたくさんいらっしゃいます。
              当サロンでは、挙式までに最短で仕上げる全3回のブライダル専用コースをご用意。背中とデコルテも同時にケアし、
              写真映りも実感しやすい仕上がりを目指します。
            </p>
            <ul className="space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-[#a67c52]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#a67c52]" size={14} aria-hidden />
                  </span>
                  <span className="text-[#1a1a1a] font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="bg-[#a67c52] text-white px-10 py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all text-sm"
              >
                料金・メニューを見る
              </Link>
              <a
                href="https://lin.ee/DS9UvmW"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#a67c52] text-[#a67c52] px-10 py-4 rounded-full font-bold hover:bg-[#f5f2ed] transition-all text-sm"
              >
                LINEで相談
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 bg-white/60 rounded-[40px] p-12 md:p-16 max-w-4xl mx-auto border border-[#a67c52]/10">
          <h2 className="font-serif-jp text-xl text-[#1a1a1a] mb-6 font-bold">
            挙式直前ブライダルケア コース概要
          </h2>
          <dl className="grid sm:grid-cols-2 gap-6 text-[#5a5a5a]">
            <div className="flex items-center space-x-3">
              <Clock className="text-[#a67c52] shrink-0" size={20} aria-hidden />
              <div>
                <dt className="text-xs text-[#a67c52]/80 uppercase tracking-widest">回数</dt>
                <dd className="font-serif-jp">全3回</dd>
              </div>
            </div>
            <div>
              <dt className="text-xs text-[#a67c52]/80 uppercase tracking-widest">料金</dt>
              <dd className="font-serif-jp font-bold text-[#1a1a1a]">¥45,000（税込）</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-[#5a5a5a]">
            まずは初回体験コースで施術の流れと効果を実感してから、ブライダルコースへのご案内も可能です。
          </p>
        </section>
      </article>
    </>
  );
}
