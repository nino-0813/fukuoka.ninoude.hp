import Image from 'next/image';
import { CASE_STUDIES } from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';

export function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-white/50" aria-labelledby="results-heading">
      <div className="container mx-auto px-4">
        <SectionHeader en="Gallery" jp="施術事例" />

        <div className="grid md:grid-cols-3 gap-10">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#a67c52]/5"
            >
              <div className="relative overflow-hidden flex">
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
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-serif-jp font-bold text-[#1a1a1a]">{study.title}</h4>
                  <span className="text-[10px] bg-[#a67c52]/10 text-[#a67c52] px-3 py-1 rounded-full font-bold tracking-widest">
                    {study.period}
                  </span>
                </div>
                <p className="text-sm text-[#5a5a5a] leading-relaxed italic">&quot;{study.description}&quot;</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
