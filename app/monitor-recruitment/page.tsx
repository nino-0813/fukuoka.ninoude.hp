import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, MessageCircle } from 'lucide-react';
import {
  MONITOR_TYPES,
  MONITOR_REQUIREMENTS,
  BASE_URL,
  LINE_URL,
} from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'モニター募集 | 二の腕痩せ 福岡 ジプソフィル',
  description:
    'モニター価格は初回体験済み・カスタムコースご利用の方限定。5組まで募集。二の腕痩せ専門サロン ジプソフィル福岡店。',
  openGraph: {
    title: 'モニター募集 | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    url: '/monitor-recruitment',
  },
  alternates: { canonical: `${BASE_URL}/monitor-recruitment` },
};

export default function MonitorRecruitmentPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'モニター募集', url: `${BASE_URL}/monitor-recruitment` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <article className="pt-20 pb-16 bg-[#f5f2ed] min-h-screen">
        <header className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30" aria-hidden>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a67c52]/10 to-transparent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-en-serif text-[#a67c52] text-6xl md:text-8xl font-light italic tracking-widest mb-4">
              Monitor
            </h1>
            <p className="font-serif-jp text-xl text-[#1a1a1a] tracking-[0.3em]">モニター募集</p>

            <nav className="mt-16 flex flex-wrap justify-center gap-4" aria-label="ページ内リンク">
              {['モニターの種類', '募集要項', 'モニターに応募'].map((label) => (
                <a
                  key={label}
                  href={`#${encodeURIComponent(label)}`}
                  className="bg-white/60 backdrop-blur-md border border-[#a67c52]/20 px-8 py-4 rounded-full text-sm font-bold text-[#1a1a1a] hover:bg-[#a67c52] hover:text-white transition-all flex items-center space-x-2"
                >
                  <span>{label}</span>
                  <ChevronRight size={14} className="rotate-90" aria-hidden />
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <nav aria-label="パンくずリスト" className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
            <Link href="/" className="hover:text-[#a67c52]">
              TOP
            </Link>
            <span aria-hidden>&gt;</span>
            <span className="text-[#a67c52]">モニター募集</span>
          </nav>
        </div>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <h2 className="font-en-serif text-[#a67c52] text-5xl md:text-7xl opacity-20 block -mb-10 font-light italic tracking-widest">
                  Monitors
                </h2>
                <h3 className="font-serif-jp text-3xl md:text-5xl text-[#1a1a1a] leading-tight font-bold">
                  モニター価格は
                  <br />
                  初回体験済み・カスタムコース
                  <br />
                  ご利用の方限定で5組まで募集。
                </h3>
                <div className="w-16 h-[1px] bg-[#f27d26] mb-10" aria-hidden />
                <p className="text-lg text-[#5a5a5a] leading-loose font-serif-jp">
                  初回体験をされた方のうち、その後のカスタムメニュー（短期集中コース・ブライダルケアなど）をご利用される方限定で、モニター価格をご案内しています。募集は5組まで。施術前後の写真撮影やWEB・SNS等への掲載にご協力いただける方を募集しております。
                </p>
                <div className="bg-white/40 p-8 rounded-3xl border border-[#a67c52]/10 space-y-4">
                  <p className="text-xs text-[#a67c52] leading-relaxed">
                    ※一度インターネット上に掲載された情報はSNSなどで拡散される可能性があり、当サロン側で全てを削除することはできません。ご理解の上、ご検討ください。
                  </p>
                  <p className="text-xs text-[#a67c52] leading-relaxed">
                    ※ご状態によっては、モニターの対象外となる場合もございます。
                  </p>
                </div>
              </div>
              <div className="relative max-w-sm lg:max-w-md mx-auto w-full min-h-[320px]">
                <div className="curved-mask overflow-hidden shadow-2xl aspect-[5/6] relative w-full p-14">
                  <Image
                    src="/images/monitor-hero.webp"
                    alt="モニター撮影のイメージ"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 24rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="モニターの種類" className="py-24 bg-white/50">
          <div className="container mx-auto px-4">
            <SectionHeader en="Types" jp="モニターの種類" />
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {MONITOR_TYPES.map((type, idx) => (
                <article key={type.id} className="group">
                  <div className="relative mb-8">
                    <div className="aspect-[16/10] overflow-hidden rounded-[40px] shadow-lg relative">
                      <Image
                        src={type.image}
                        alt={type.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span
                      className="absolute -top-6 -left-6 w-20 h-20 rounded-full border border-[#a67c52]/20 flex items-center justify-center bg-white/40 backdrop-blur-sm font-en-serif text-[#a67c52] text-2xl italic"
                      aria-hidden
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="bg-white p-10 rounded-[40px] shadow-sm border border-[#a67c52]/5 -mt-20 relative z-10 mx-6">
                    <h3 className="font-serif-jp text-2xl text-[#a67c52] mb-6 font-bold text-center tracking-widest">
                      {type.title}
                    </h3>
                    <div className="w-full h-[1px] bg-[#a67c52]/10 mb-8" aria-hidden />
                    <p className="text-[#5a5a5a] text-sm leading-loose mb-8 font-serif-jp">
                      {type.description}
                    </p>
                    {type.note && (
                      <p className="text-xs text-[#1a1a1a] font-bold">{type.note}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-24 max-w-4xl mx-auto bg-[#8c6239] p-12 rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                aria-hidden
              />
              <h4 className="font-serif-jp text-2xl mb-8 font-bold tracking-widest relative z-10">
                モニター募集の対象について
              </h4>
              <div className="space-y-4 text-white/80 leading-loose font-serif-jp relative z-10">
                <p>モニター価格は<strong className="text-white">初回体験をされた方</strong>かつ、<strong className="text-white">その後のカスタムコース（短期集中・ブライダルケア等）をご利用される方</strong>限定です。</p>
                <p className="text-xl text-white font-bold">
                  募集人数は5組までとなります。
                </p>
                <p>料金の詳細は初回体験時またはカスタムメニューご契約時にご案内いたします。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="募集要項" className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader en="Requirements" jp="募集要項" />
            <div className="max-w-4xl mx-auto space-y-12">
              {MONITOR_REQUIREMENTS.map((req, idx) => (
                <article
                  key={req.id}
                  className="bg-white/60 backdrop-blur-sm rounded-[40px] overflow-hidden shadow-sm border border-[#a67c52]/10"
                >
                  <div className="bg-[#f5f2ed] p-6 text-center border-b border-[#a67c52]/10">
                    <h4 className="font-serif-jp text-lg text-[#1a1a1a] font-medium">
                      <span className="font-en-serif text-[#a67c52] mr-2 italic">0{idx + 1}.</span>
                      {req.title}
                    </h4>
                  </div>
                  <ul className="p-10 space-y-6 list-none">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <span className="w-6 h-6 rounded-full bg-[#a67c52]/10 flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="text-[#a67c52]" size={14} aria-hidden />
                        </span>
                        <p className="text-[#5a5a5a] text-base leading-relaxed font-serif-jp">{item}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <p className="text-center text-sm text-[#5a5a5a] pt-8">
                その他ご不明な点がございましたら、お気軽にお問い合わせくださいませ。
              </p>
            </div>
          </div>
        </section>

        <section id="モニターに応募" className="py-24 bg-[#fafaf9]">
          <div className="container mx-auto px-4">
            <SectionHeader en="Apply" jp="モニターに応募する" />

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-[32px] border border-[#a67c52]/10 shadow-sm p-10 md:p-14 text-center">
                <p className="text-[#5a5a5a] leading-relaxed font-serif-jp mb-10">
                  モニターご希望の方は、予約時に「モニター希望」とお伝えください。LINEからご予約いただけます。
                </p>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#a67c52] hover:bg-[#8c6239] text-white py-4 px-10 rounded-full font-bold text-sm tracking-widest transition-all shadow-md"
                >
                  <MessageCircle size={20} aria-hidden />
                  LINEで予約
                </a>

                <p className="mt-6 text-xs text-[#1a1a1a]/50">
                  受付時間 10:00〜19:00
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
