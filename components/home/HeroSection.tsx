import Image from 'next/image';
import Link from 'next/link';
import { SALON_NAME } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      className="relative min-h-0 lg:min-h-[100dvh] lg:min-h-screen flex items-start lg:items-center overflow-hidden bg-[#f5f2ed] pt-20 pb-8 lg:pt-20 lg:pb-0"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 opacity-40" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#f27d26]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#a67c52]/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-0 lg:min-h-0 py-0 lg:py-0">
        <div className="min-w-0 max-w-2xl order-2 lg:order-1 flex flex-col justify-center">
          <p className="mb-2 lg:mb-4">
            <span className="font-en-serif text-[#a67c52] text-base lg:text-xl italic tracking-wide">About</span>
            <span className="text-xs lg:text-sm text-[#a67c52]/60 mt-0.5 lg:mt-1 block">当サロンについて</span>
          </p>

          <h2 id="hero-heading" className="font-serif-jp text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.35] md:leading-[1.4] mb-4 lg:mb-8 text-[#1a1a1a]">
            自分らしさを輝かせ、
            <br />
            <span className="relative inline-block">
              笑顔が溢れる日々を。
              <span className="absolute bottom-1 lg:bottom-2 left-0 w-full h-[1px] bg-[#f27d26]/40" aria-hidden />
            </span>
          </h2>

          <div className="space-y-3 lg:space-y-6 text-[#1a1a1a] max-w-lg">
            <p className="text-sm sm:text-base lg:text-lg font-serif-jp leading-relaxed">
              {SALON_NAME}は、美容を通じて
              <br />
              お客様の人生をより豊かにすることを目指すサロンです。
            </p>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-80">
              「お客様ファースト」の姿勢を大切にし、
              <br />
              誠実で丁寧な対応を心掛けております。
            </p>
          </div>

          <div className="mt-6 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
            <Link
              href="/#menu"
              className="bg-[#a67c52] text-white px-8 py-3.5 lg:px-12 lg:py-5 rounded-full text-xs lg:text-sm font-bold hover:bg-[#8c6239] transition-all text-center shadow-lg transform hover:-translate-y-1 tracking-[0.2em] uppercase"
            >
              View Menu
            </Link>
            <a
              href="https://lin.ee/DS9UvmW"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 backdrop-blur-sm text-[#a67c52] border border-[#a67c52]/30 px-8 py-3.5 lg:px-12 lg:py-5 rounded-full text-xs lg:text-sm font-bold hover:bg-white transition-all text-center tracking-[0.2em] uppercase"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 w-[38vw] max-w-[160px] min-w-[100px] aspect-square lg:aspect-auto lg:w-auto lg:min-w-0 lg:max-w-none lg:h-[700px] shrink-0 mx-auto lg:mx-0">
          <div className="absolute inset-0 shadow-xl ring-2 ring-[#a67c52]/15 hero-image-frame lg:ring-0">
            <Image
              src="/images/cases/LINE_ALBUM_Before%20%E3%83%BBafter_260302_135.webp"
              alt="二の腕施術・リンパケアのイメージ"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 160px, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -left-2 w-12 h-12 lg:w-24 lg:h-24 border border-[#a67c52]/20 rounded-full hidden lg:block" aria-hidden />
          <div className="absolute top-1/2 -right-1 lg:-right-8 w-0.5 h-16 lg:h-32 bg-gradient-to-b from-transparent via-[#a67c52]/30 to-transparent hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
