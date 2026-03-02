import Link from 'next/link';
import { MessageCircle, Instagram } from 'lucide-react';
import { SALON_NAME, LINE_URL } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-20 mb-20">
          <div className="col-span-1">
            <h2 className="font-serif-jp text-2xl mb-8 tracking-widest">{SALON_NAME}</h2>
            <p className="text-white/40 text-sm leading-loose mb-10 font-serif-jp">
              美しさを通じて、心豊かな人生を。
              <br />
              福岡店は完全プライベート空間で、至福のひとときを提供します。
            </p>
            <div className="flex space-x-6">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#a67c52] transition-colors"
                aria-label="LINE"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/ninoude.fukuoka.emi/?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#a67c52] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#a67c52] uppercase tracking-[0.3em] text-[10px] mb-10">
              Navigation
            </h3>
            <ul className="space-y-5 text-xs tracking-widest uppercase">
              <li>
                <Link href="/" className="hover:text-[#a67c52] transition-colors">
                  Top
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#a67c52] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#a67c52] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/monitor-recruitment" className="hover:text-[#a67c52] transition-colors">
                  Monitor
                </Link>
              </li>
              <li>
                <Link href="/access" className="hover:text-[#a67c52] transition-colors">
                  Access
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#a67c52] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#a67c52] transition-colors">
                  当サロンについて
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#a67c52] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#a67c52] uppercase tracking-[0.3em] text-[10px] mb-10">
              Contact
            </h3>
            <div className="space-y-8">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#a67c52] text-white px-10 py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all text-xs uppercase tracking-widest"
              >
                Line Contact
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
            &copy; {currentYear} {SALON_NAME} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
