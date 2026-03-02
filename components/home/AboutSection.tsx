import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const POINTS = [
  '完全個室のプライベート空間',
  '専門知識を持つセラピスト',
  'エビデンスに基づいた施術',
  'アフターケアの徹底',
];

export function AboutSection() {
  return (
    <section id="concept" className="py-24 bg-white/30 backdrop-blur-sm" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <SectionHeader en="Philosophy" jp="私たちの想い" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl z-10 relative aspect-[4/5] p-10 bg-[#f5f2ed]">
              <Image
                src="/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_135.webp"
                alt="二の腕施術・リンパケアのイメージ"
                className="object-contain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#a67c52]/5 rounded-full -z-10" aria-hidden />
            <div className="absolute -top-8 -left-8 w-40 h-40 border border-[#a67c52]/10 rounded-[40px] -z-10" aria-hidden />
          </div>

          <div className="space-y-10">
            <h3 id="about-heading" className="font-serif-jp text-2xl md:text-4xl text-[#1a1a1a] leading-relaxed">
              「美しさ」の先にある、
              <br />
              心豊かな毎日を。
            </h3>
            <div className="space-y-6 text-[#5a5a5a] leading-loose text-lg">
              <p>
                私たちは、単に外見を整えるだけでなく、お客様が自分自身を愛し、自信を持って毎日を過ごせるようサポートすることをミッションとしています。
              </p>
              <p>
                最新の技術と、一人ひとりに寄り添うホスピタリティ。その両立こそが、ジプソフィル®︎が大切にしている価値です。
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 list-none">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center space-x-3 group">
                  <span className="w-6 h-6 rounded-full bg-[#a67c52]/10 flex items-center justify-center group-hover:bg-[#a67c52]/20 transition-colors shrink-0">
                    <CheckCircle2 className="text-[#a67c52]" size={14} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-[#1a1a1a]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
