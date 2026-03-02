import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Phone, MessageCircle, Activity, BrainCircuit } from 'lucide-react';
import {
  MONITOR_TYPES,
  MONITOR_REQUIREMENTS,
  BASE_URL,
} from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'モニター募集 | 二の腕痩せ 福岡 ジプソフィル',
  description:
    '二の腕痩せ専門サロン ジプソフィル福岡店のモニター募集。部分モニター・YouTubeモニターで施術を特別価格でご体験いただけます。',
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
                  リーズナブルな価格で
                  <br />
                  治療を受けていただける
                  <br />
                  モニター様を募集しています。
                </h3>
                <div className="w-16 h-[1px] bg-[#f27d26] mb-10" aria-hidden />
                <p className="text-lg text-[#5a5a5a] leading-loose font-serif-jp">
                  施術前後の写真撮影や手術中の動画撮影、WEBサイトやインターネット・雑誌広告等への公開にご協力をいただける方には、モニター価格で治療を受けていただけます。
                </p>
                <div className="bg-white/40 p-8 rounded-3xl border border-[#a67c52]/10 space-y-4">
                  <p className="text-xs text-[#a67c52] leading-relaxed">
                    ※一度インターネット上に掲載された情報はSNSなどで拡散される可能性があり、クリニック側で全てを削除することはできません。ご理解の上、ご検討くださいませ。
                  </p>
                  <p className="text-xs text-[#a67c52] leading-relaxed">
                    ※ご状態によっては、モニターの適応外になる場合もございます。
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="curved-mask overflow-hidden shadow-2xl aspect-[5/6] relative">
                  <Image
                    src="https://picsum.photos/1000/1200?photography,model,beauty"
                    alt="モニター撮影のイメージ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
                各施術のモニター料金について
              </h4>
              <div className="space-y-4 text-white/80 leading-loose font-serif-jp relative z-10">
                <p>各施術のモニター料金につきましては、料金表からご確認ください。</p>
                <p>なお、記載の料金は「部分モニター」となります。お間違えのないようご確認ください。</p>
                <p className="text-xl text-white font-bold">
                  YouTubeモニターは通常料金から50%OFFいたします。
                </p>
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

        <section id="モニターに応募" className="py-24 bg-white/50">
          <div className="container mx-auto px-4">
            <SectionHeader en="Apply" jp="モニターに応募する" />

            <div className="max-w-4xl mx-auto bg-[#8c6239] p-1 rounded-[40px] shadow-2xl">
              <div className="bg-white/5 p-12 rounded-[38px] text-center">
                <h4 className="font-serif-jp text-2xl text-white mb-8 font-bold tracking-widest">
                  応募方法について
                </h4>
                <div className="w-16 h-[1px] bg-[#f27d26] mx-auto mb-10" aria-hidden />
                <div className="space-y-4 text-white/80 leading-loose font-serif-jp mb-12">
                  <p>
                    モニター応募は、下記のほかに電話予約・LINE予約・Web予約からも可能でございます。
                  </p>
                  <p>
                    カウンセリング予約の際には、モニター希望である旨をお知らせくださいますようお願い申し上げます。
                  </p>
                </div>

                <div className="bg-[#f5f2ed] p-12 rounded-[40px] shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden>
                    <BrainCircuit size={400} className="absolute -top-20 -right-20" />
                    <BrainCircuit size={400} className="absolute -bottom-20 -left-20" />
                  </div>

                  <div className="relative z-10">
                    <p className="font-en-serif text-[#a67c52] text-6xl mb-4 italic">Reservation</p>
                    <p className="font-serif-jp text-xl text-[#8c6239] mb-12 font-bold">
                      無料カウンセリングのご相談はこちら
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <a
                        href="tel:000-0000-0000"
                        className="bg-white border border-[#8c6239]/30 p-6 rounded-full flex flex-col items-center justify-center hover:bg-white/80 transition-all group"
                      >
                        <span className="flex items-center space-x-2 text-[#8c6239] mb-1">
                          <Phone size={20} aria-hidden />
                          <span className="font-bold text-sm">電話予約はこちら</span>
                        </span>
                        <span className="text-[10px] text-[#8c6239]/60">受付時間：10:00 〜 19:00</span>
                      </a>

                      <a
                        href="https://line.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#4a3a2a] text-white p-6 rounded-full flex items-center justify-center space-x-3 hover:bg-[#3a2a1a] transition-all shadow-lg"
                      >
                        <MessageCircle size={24} aria-hidden />
                        <span className="font-bold text-sm tracking-widest">LINE予約はこちら</span>
                      </a>

                      <a
                        href="#"
                        className="bg-[#f27d26] text-white p-6 rounded-full flex items-center justify-center space-x-3 hover:bg-[#d96a1d] transition-all shadow-lg"
                      >
                        <Activity size={24} aria-hidden />
                        <span className="font-bold text-sm tracking-widest">Web予約はこちら</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
