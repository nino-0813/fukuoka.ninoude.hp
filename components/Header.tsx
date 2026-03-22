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
  { href: '/monitor-recruitment', label: 'お問い合わせ・ご予約', id: 'contact' },
  { href: '/access', label: 'アクセス', id: 'clinic' },
  { href: '/blog', label: 'ブログ', id: 'blog' },
  { href: '/about', label: '当サロンについて', id: 'about' },
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

  const isContactPage = pathname === '/monitor-recruitment';
  const isBlogPage = pathname === '/blog';
  const isResultsPage = pathname === '/results';
  const isMenuPage = pathname === '/menu';
  const isAboutPage = pathname === '/about';

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 ${
        isMenuOpen ? 'z-[200]' : 'z-50'
      } ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center gap-3">
        <Link href="/" className="flex flex-col group min-w-0 flex-1 lg:flex-initial">
          <h1
            className={`font-serif-jp font-bold transition-colors truncate lg:whitespace-normal ${
              isScrolled ? 'text-[#a67c52] text-base lg:text-lg' : 'text-[#8c6239] text-lg lg:text-xl'
            }`}
          >
            {SALON_NAME}
          </h1>
          <span className="text-[10px] text-[#a67c52] hidden md:block">
            二の腕痩せ・肩甲骨出し・ブライダル専門
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8 shrink-0" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] ${
                (isContactPage && item.id === 'contact') ||
                (isBlogPage && item.id === 'blog') ||
                (isResultsPage && item.id === 'results') ||
                (isMenuPage && item.id === 'menu') ||
                (isAboutPage && item.id === 'about')
                  ? 'text-[#a67c52]'
                  : 'text-[#1a1a1a] hover:text-[#a67c52]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://lin.ee/DS9UvmW"
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
          className="lg:hidden shrink-0 text-[#1a1a1a] p-2 -m-2 hover:text-[#a67c52] transition-colors"
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
        className={`lg:hidden fixed inset-0 z-[150] h-dvh min-h-dvh transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute inset-0 bg-[#f5f2ed]" aria-hidden />
        <div className="relative flex flex-col h-dvh min-h-0 w-[88vw] max-w-md ml-auto bg-white/95 backdrop-blur-sm shadow-xl">
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#a67c52]/10 shrink-0">
            <span className="text-sm font-bold text-[#a67c52] tracking-widest">MENU</span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 -m-2 text-[#1a1a1a] hover:text-[#a67c52] transition-colors rounded-lg"
              aria-label="メニューを閉じる"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 min-h-0 overflow-y-auto py-8 px-6" aria-label="モバイルメニュー">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 px-5 rounded-xl text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-[#a67c52]/10 text-[#a67c52]'
                        : 'text-[#1a1a1a] hover:bg-[#a67c52]/5 active:bg-[#a67c52]/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-[#a67c52]/10 space-y-4">
              <a
                href="https://lin.ee/DS9UvmW"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#06C755] text-white py-4 rounded-xl text-sm font-bold shadow-sm active:opacity-90"
              >
                <MessageCircle size={20} aria-hidden />
                LINEで予約・相談
              </a>
              <Link
                href="/monitor-recruitment"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#a67c52] text-white py-4 rounded-xl text-sm font-bold shadow-sm hover:bg-[#8c6239] active:opacity-90 transition-colors"
              >
                お問い合わせ・ご予約
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
