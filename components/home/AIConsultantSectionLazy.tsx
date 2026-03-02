'use client';

import dynamic from 'next/dynamic';

const AIConsultantSection = dynamic(
  () => import('@/components/home/AIConsultantSection').then((m) => m.AIConsultantSection),
  {
    ssr: false,
    loading: () => (
      <section
        className="py-24 bg-[#1a1a1a] text-white min-h-[400px] flex items-center justify-center"
        aria-busy="true"
      >
        <div className="animate-pulse text-white/60">読み込み中...</div>
      </section>
    ),
  }
);

export function AIConsultantSectionLazy() {
  return <AIConsultantSection />;
}
