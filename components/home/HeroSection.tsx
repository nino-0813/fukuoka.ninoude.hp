import Image from 'next/image';
import Link from 'next/link';
import { SALON_NAME } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f5f2ed]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 opacity-40" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#f27d26]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#a67c52]/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl order-2 lg:order-1">
          <p className="mb-4">
            <span className="font-en-serif text-[#a67c52] text-xl italic tracking-wide">About</span>
            <span className="text-sm text-[#a67c52]/60 mt-1 block">当院について</span>
          </p>

          <h2 id="hero-heading" className="font-serif-jp text-4xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.4] mb-8 text-[#1a1a1a]">
            自分らしさを輝かせ、
            <br />
            <span className="relative inline-block">
              笑顔が溢れる日々を。
              <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#f27d26]/40" aria-hidden />
            </span>
          </h2>

          <div className="space-y-6 text-[#1a1a1a] max-w-lg">
            <p className="text-lg font-serif-jp leading-relaxed">
              {SALON_NAME}は、美容医療を通じて
              <br />
              お客様の人生をより豊かにすることを目指すクリニックです。
            </p>
            <p className="text-base leading-relaxed opacity-80">
              「お客様ファースト」の姿勢を大切にし、
              <br />
              誠実で丁寧な対応を心掛けております。
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/#menu"
              className="bg-[#a67c52] text-white px-12 py-5 rounded-full text-sm font-bold hover:bg-[#8c6239] transition-all text-center shadow-lg transform hover:-translate-y-1 tracking-[0.2em] uppercase"
            >
              View Menu
            </Link>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/50 backdrop-blur-sm text-[#a67c52] border border-[#a67c52]/30 px-12 py-5 rounded-full text-sm font-bold hover:bg-white transition-all text-center tracking-[0.2em] uppercase"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[400px] md:h-[600px] lg:h-[700px]">
          <div className="absolute inset-0 curved-mask overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/hero.webp"
              alt="二の腕の悩みを解決する福岡のジプソフィルサロン｜もう隠さない、二の腕から始まる私改革"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#a67c52]/20 rounded-full" aria-hidden />
          <div className="absolute top-1/2 -right-8 w-1 h-32 bg-gradient-to-b from-transparent via-[#a67c52]/30 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
