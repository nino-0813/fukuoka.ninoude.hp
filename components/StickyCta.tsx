'use client';

import Link from 'next/link';
import { CalendarCheck, MessageCircle } from 'lucide-react';

export function StickyCta() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-[100] lg:hidden bg-white/90 backdrop-blur-md border-t border-[#a67c52]/10 flex p-3 space-x-3"
      role="complementary"
      aria-label="ご予約・お問い合わせ"
    >
      <Link
        href="/monitor-recruitment#%E5%88%9D%E5%9B%9E%E4%BD%93%E9%A8%93%E3%81%AE%E3%81%94%E4%BA%88%E7%B4%84"
        className="flex-1 bg-[#1a1a1a] text-white py-4 rounded-full flex items-center justify-center space-x-2 shadow-lg"
      >
        <CalendarCheck size={18} aria-hidden />
        <span className="font-bold text-[10px] uppercase tracking-widest">予約</span>
      </Link>
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
