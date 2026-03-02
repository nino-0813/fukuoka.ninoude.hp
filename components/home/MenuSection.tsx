import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Activity, Clock } from 'lucide-react';
import { MENU_ITEMS } from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';

const FIRST_MENU_IMAGE = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_135.webp';
const CUSTOM_MENU_IMAGE = '/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_135.webp';

const iconMap = {
  Sparkles,
  Activity,
  Clock,
} as const;

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white" aria-labelledby="menu-heading">
      <div className="container mx-auto px-4">
        <SectionHeader en="Menu" jp="メニュー・料金" />

        <div className="grid lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <article
                key={item.id}
                className="group p-10 rounded-[40px] bg-[#f5f2ed]/50 hover:bg-white border border-transparent hover:border-[#a67c52]/10 transition-all duration-500 flex flex-col text-center hover:shadow-2xl"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-8 shrink-0 relative bg-white shadow-sm group-hover:scale-110 transition-transform">
                  {item.id === 1 ? (
                    <Image
                      src={FIRST_MENU_IMAGE}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : item.id === 2 || item.id === 3 ? (
                    <Image
                      src={CUSTOM_MENU_IMAGE}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-[#a67c52]">
                      <Icon size={32} aria-hidden />
                    </span>
                  )}
                </div>
                <h3 className="font-serif-jp text-xl text-[#1a1a1a] mb-4 font-bold tracking-widest">
                  {item.title}
                </h3>
                {item.price ? (
                  <>
                    <p className="text-[#a67c52] font-en-serif italic text-3xl mb-2">{item.price}</p>
                    <p className="text-[10px] text-[#a67c52]/60 mb-8 uppercase tracking-[0.3em]">{item.duration}</p>
                  </>
                ) : (
                  <p className="text-[#a67c52]/80 text-sm mb-8">初回体験後にご案内</p>
                )}
                <p className="text-[#5a5a5a] text-sm leading-loose flex-1 mb-10 font-serif-jp">{item.description}</p>
                <Link
                  href="https://line.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#a67c52] text-white py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all tracking-widest text-xs uppercase block text-center"
                >
                  Reserve Now
                </Link>
              </article>
            );
          })}
        </div>
        <p className="text-center mt-12">
          <Link href="/menu" className="text-[#a67c52] font-bold hover:underline">
            メニュー・料金の詳細はこちら
          </Link>
        </p>
      </div>
    </section>
  );
}
