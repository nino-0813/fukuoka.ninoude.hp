'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { SALON_NAME } from '@/lib/constants';

const NAV_ITEMS = [
  { href: '/', label: 'TOP', id: 'top' },
  { href: '/results', label: '症例写真', id: 'results' },
  { href: '/menu', label: 'メニュー', id: 'menu' },
  { href: '/monitor-recruitment', label: 'モニター募集', id: 'monitor' },
  { href: '/access', label: 'アクセス', id: 'clinic' },
  { href: '/blog', label: 'ブログ', id: 'blog' },
  { href: '/faq', label: 'よくある質問', id: 'faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMonitorPage = pathname === '/monitor-recruitment';
  const isBlogPage = pathname === '/blog';
  const isResultsPage = pathname === '/results';
  const isMenuPage = pathname === '/menu';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col group">
          <h1
            className={`font-serif-jp font-bold transition-colors ${
              isScrolled ? 'text-[#a67c52] text-lg' : 'text-[#8c6239] text-xl'
            }`}
          >
            {SALON_NAME}
          </h1>
          <span className="text-[10px] text-[#a67c52] hidden md:block">
            二の腕痩せ・肩甲骨出し・ブライダル専門
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] ${
                (isMonitorPage && item.id === 'monitor') ||
                (isBlogPage && item.id === 'blog') ||
                (isResultsPage && item.id === 'results') ||
                (isMenuPage && item.id === 'menu')
                  ? 'text-[#a67c52]'
                  : 'text-[#1a1a1a] hover:text-[#a67c52]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a67c52] text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#8c6239] transition-all transform hover:scale-105 shadow-sm"
          >
            <MessageCircle size={16} aria-hidden />
            <span className="text-xs font-bold tracking-widest">LINE予約</span>
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden text-rose-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4" aria-label="モバイルメニュー">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif-jp text-[#1a1a1a]"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col w-full space-y-4 pt-8">
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-4 rounded-xl flex justify-center items-center space-x-3 text-lg"
            >
              <MessageCircle aria-hidden />
              <span>LINEで予約・相談</span>
            </a>
            <a href="tel:000-0000-0000" className="w-full bg-rose-800 text-white py-4 rounded-xl flex justify-center items-center space-x-3 text-lg">
              <span>電話でお問い合わせ</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
