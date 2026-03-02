'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { TELEPHONE } from '@/lib/constants';

export function StickyCta() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-[100] lg:hidden bg-white/90 backdrop-blur-md border-t border-[#a67c52]/10 flex p-3 space-x-3"
      role="complementary"
      aria-label="お問い合わせ"
    >
      <a
        href={`tel:${TELEPHONE}`}
        className="flex-1 bg-[#1a1a1a] text-white py-4 rounded-full flex items-center justify-center space-x-2 shadow-lg"
      >
        <Phone size={18} aria-hidden />
        <span className="font-bold text-[10px] uppercase tracking-widest">Call</span>
      </a>
      <a
        href="https://lin.ee/DS9UvmW"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-2 w-2/3 bg-[#a67c52] text-white py-4 rounded-full flex items-center justify-center space-x-2 shadow-lg"
      >
        <MessageCircle size={18} aria-hidden />
        <span className="font-bold text-[10px] uppercase tracking-widest">Line Booking</span>
      </a>
    </div>
  );
}
