import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { BASE_URL, LINE_URL } from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbJsonLd } from '@/lib/schema';
import { BookingForm } from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'お問い合わせ・ご予約 | 二の腕痩せ 福岡 ジプソフィル',
  description:
    'お問い合わせ・初回体験のご予約はLINEで承っております。二の腕痩せ専門サロン ジプソフィル®︎ 福岡。',
  openGraph: {
    title: 'お問い合わせ・ご予約 | 二の腕痩せ専門ジプソフィル®︎ 福岡',
    url: '/monitor-recruitment',
  },
  alternates: { canonical: `${BASE_URL}/monitor-recruitment` },
};

export default function ContactPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'ホーム', url: BASE_URL },
    { name: 'お問い合わせ・ご予約', url: `${BASE_URL}/monitor-recruitment` },
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
              Contact
            </h1>
            <p className="font-serif-jp text-xl text-[#1a1a1a] tracking-[0.3em]">お問い合わせ・ご予約</p>

            <nav className="mt-16 flex flex-wrap justify-center gap-4" aria-label="ページ内リンク">
              {['初回体験のご予約', 'お問い合わせ'].map((label) => (
                <a
                  key={label}
                  href={`#${encodeURIComponent(label)}`}
                  className="bg-white/60 backdrop-blur-md border border-[#a67c52]/20 px-8 py-4 rounded-full text-sm font-bold text-[#1a1a1a] hover:bg-[#a67c52] hover:text-white transition-all flex items-center space-x-2"
                >
                  <span>{label}</span>
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
            <span className="text-[#a67c52]">お問い合わせ・ご予約</span>
          </nav>
        </div>

        <section id="初回体験のご予約" className="py-24 bg-white/50">
          <div className="container mx-auto px-4">
            <SectionHeader en="First Visit" jp="初回体験のご予約" />
            <div className="max-w-2xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </section>

        <section id="お問い合わせ" className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader en="Inquiry" jp="お問い合わせ" />
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-[#5a5a5a] leading-loose font-serif-jp mb-16">
                ご質問・ご要望はお気軽にLINEでお問い合わせください。
              </p>
              <div className="max-w-md mx-auto">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[32px] border border-[#a67c52]/10 shadow-sm p-10 flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-[#a67c52]/30 transition-all group"
                >
                  <span className="w-16 h-16 rounded-full bg-[#06C755]/10 flex items-center justify-center mb-6 group-hover:bg-[#06C755]/20 transition-colors">
                    <MessageCircle className="text-[#06C755]" size={32} aria-hidden />
                  </span>
                  <h3 className="font-serif-jp text-xl text-[#1a1a1a] font-bold mb-3">LINEでお問い合わせ</h3>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed font-serif-jp">
                    24時間受付。返信は営業時間内に順次お返しします。
                  </p>
                  <span className="mt-6 inline-block bg-[#a67c52] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest">
                    LINEを開く
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
