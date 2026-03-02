import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { getFAQPageJsonLd } from '@/lib/schema';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ResultsSection } from '@/components/home/ResultsSection';
import { MenuSection } from '@/components/home/MenuSection';
import { ClinicSection } from '@/components/home/ClinicSection';
import { FAQSection } from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: '二の腕痩せ 福岡 | ジプソフィル®︎ 福岡の二の腕ダイエット専門サロン',
  description:
    '福岡市東区の二の腕痩せ専門サロン ジプソフィル®︎。肩甲骨出し・ブライダルケアも。完全個室・完全予約制。初回体験¥9,900。',
  openGraph: {
    title: '二の腕痩せ専門ジプソフィル®︎ | 福岡の二の腕ダイエット専門サロン',
    description:
      '福岡県福岡市東区にある二の腕痩せに特化した専門サロン。完全予約制のプライベートサロンです。',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFAQPageJsonLd()} />
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <MenuSection />
      <ClinicSection />
      <FAQSection />
    </>
  );
}
