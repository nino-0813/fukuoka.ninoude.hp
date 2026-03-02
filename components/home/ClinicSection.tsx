import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { LOCATION, HOURS, LINE_URL } from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';

export function ClinicSection() {
  return (
    <section id="clinic" className="py-24 bg-[#f5f2ed]" aria-labelledby="access-heading">
      <div className="container mx-auto px-4">
        <SectionHeader en="Access" jp="店舗案内" />

        <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-[#a67c52]/5">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h3 id="access-heading" className="font-serif-jp text-3xl text-[#1a1a1a] mb-10 font-bold tracking-widest">
              福岡店
            </h3>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <span className="w-10 h-10 rounded-full bg-[#f5f2ed] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#a67c52]" size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Location</p>
                  <p className="text-[#5a5a5a] text-base leading-relaxed font-serif-jp">
                    {LOCATION}
                    <br />
                    <span className="text-[10px] text-[#a67c52]/60 mt-2 block">
                      ※詳細はご予約確定時にお伝えいたします。
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <span className="w-10 h-10 rounded-full bg-[#f5f2ed] flex items-center justify-center shrink-0">
                  <Clock className="text-[#a67c52]" size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Hours</p>
                  <p className="text-[#5a5a5a] text-base font-serif-jp">{HOURS}</p>
                </div>
              </div>

              <div className="pt-10 flex space-x-6">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#a67c52] text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-[#8c6239] transition-all shadow-lg text-xs font-bold uppercase tracking-widest"
                >
                  <MessageCircle size={18} aria-hidden />
                  <span>Line Booking</span>
                </a>
                <a
                  href="https://www.instagram.com/ninoude.fukuoka.emi/?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-[#a67c52]/20 rounded-full flex items-center justify-center text-[#a67c52] hover:bg-[#f5f2ed] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] md:h-auto md:min-h-[400px] relative curved-mask min-h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=福岡県福岡市東区&output=embed"
              title="福岡県福岡市東区の地図"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
