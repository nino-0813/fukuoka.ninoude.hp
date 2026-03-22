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
          <div className="relative flex justify-center lg:block">
            {/* スマホ: ヒーロー同様の円形フレーム / PC: 従来の角丸矩形 */}
            <div className="relative w-[38vw] max-w-[160px] min-w-[100px] aspect-square lg:w-full lg:max-w-none lg:min-w-0 lg:aspect-[4/5] rounded-full lg:rounded-[40px] overflow-hidden shadow-xl lg:shadow-2xl z-10 ring-2 ring-[#a67c52]/15 lg:ring-0 p-0 lg:p-10 bg-[#f5f2ed] mx-auto lg:mx-0 hero-image-frame lg:[border-radius:40px] lg:[clip-path:none]">
              <Image
                src="/images/hero/hero.webp"
                alt="二の腕の悩みを解決する福岡のジプソフィルサロン｜もう隠さない、二の腕から始まる私改革"
                className="object-cover lg:object-contain"
                fill
                sizes="(max-width: 1024px) 160px, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#a67c52]/5 rounded-full -z-10 hidden lg:block" aria-hidden />
            <div className="absolute -top-8 -left-8 w-40 h-40 border border-[#a67c52]/10 rounded-[40px] -z-10 hidden lg:block" aria-hidden />
          </div>

          <div className="space-y-10 text-center lg:text-left">
            <h3 id="about-heading" className="font-serif-jp text-2xl sm:text-3xl lg:text-4xl text-[#1a1a1a] leading-relaxed">
              「美しさ」の先にある、
              <br />
              心豊かな毎日を。
            </h3>
            <div className="space-y-6 text-[#5a5a5a] text-sm sm:text-base lg:text-lg font-serif-jp leading-relaxed">
              <p>
                私たちは、単に外見を整えるだけでなく、お客様が自分自身を愛し、自信を持って毎日を過ごせるようサポートすることをミッションとしています。
              </p>
              <p>
                最新の技術と、一人ひとりに寄り添うホスピタリティ。その両立こそが、ジプソフィル®︎が大切にしている価値です。
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 list-none justify-items-center sm:justify-items-start">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center space-x-3 group">
                  <span className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#a67c52]/10 flex items-center justify-center group-hover:bg-[#a67c52]/20 transition-colors shrink-0">
                    <CheckCircle2 className="text-[#a67c52] w-3 h-3 lg:w-3.5 lg:h-3.5" aria-hidden />
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
