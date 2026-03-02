import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CASE_STUDIES, BASE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: '症例写真・施術事例 | 二の腕痩せ 福岡 ジプソフィル',
  description:
    '福岡の二の腕痩せ専門サロン ジプソフィル®︎の施術事例。振袖・肩周り・ブライダルなどビフォーアフター写真で効果をご確認ください。',
  openGraph: {
    title: '症例写真・施術事例 | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    description: '二の腕痩せ・肩甲骨出しの施術事例。福岡市東区完全予約制サロン。',
    url: '/results',
  },
  alternates: { canonical: `${BASE_URL}/results` },
};

export default function ResultsPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: '症例写真', url: `${BASE_URL}/results` },
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
            <span className="text-[#a67c52]">症例写真</span>
          </nav>
        </div>

        <header className="container mx-auto px-4 text-center mb-16">
          <h1 className="font-serif-jp text-3xl md:text-4xl text-[#1a1a1a] tracking-widest">
            症例写真・施術事例
          </h1>
          <p className="mt-4 text-[#5a5a5a] max-w-2xl mx-auto">
            二の腕痩せ・肩甲骨出し・ブライダルケアの施術事例です。個人差はありますが、ご参考までにご覧ください。
          </p>
        </header>

        <section className="container mx-auto px-4" aria-labelledby="results-heading">
          <h2 id="results-heading" className="sr-only">
            施術事例一覧
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#a67c52]/5"
              >
                <div className="relative overflow-hidden flex">
                  {study.beforeImg === study.afterImg ? (
                    <div className="w-full relative aspect-[8/5]">
                      <Image
                        src={study.beforeImg}
                        alt={`${study.title} 施術事例`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded uppercase tracking-widest">
                        Before
                      </span>
                      <span className="absolute top-4 right-4 bg-[#a67c52]/80 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded uppercase tracking-widest font-bold">
                        After
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="w-1/2 relative aspect-[4/5]">
                        <Image
                          src={study.beforeImg}
                          alt={`${study.title} 施術前`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded uppercase tracking-widest">
                          Before
                        </span>
                      </div>
                      <div className="w-1/2 relative aspect-[4/5]">
                        <Image
                          src={study.afterImg}
                          alt={`${study.title} 施術後`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <span className="absolute top-4 left-4 bg-[#a67c52]/80 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded uppercase tracking-widest font-bold">
                          After
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif-jp font-bold text-[#1a1a1a] text-lg">{study.title}</h3>
                    <span className="text-[10px] bg-[#a67c52]/10 text-[#a67c52] px-3 py-1 rounded-full font-bold tracking-widest">
                      {study.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed italic">&quot;{study.description}&quot;</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
