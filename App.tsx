
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Instagram, 
  CheckCircle2,
  BrainCircuit,
  /* Added missing icon imports to fix build errors */
  Sparkles,
  Activity
} from 'lucide-react';
import { SALON_NAME, LOCATION, HOURS, CASE_STUDIES, MENU_ITEMS, FAQS, MONITOR_TYPES, MONITOR_REQUIREMENTS } from './constants';
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const Header: React.FC<{ onPageChange: (page: string) => void, currentPage: string }> = ({ onPageChange, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'concept', label: '当サロンについて', en: 'Concept' },
    { id: 'results', label: '症例写真', en: 'Results' },
    { id: 'menu', label: 'メニュー', en: 'Menu' },
    { id: 'monitor', label: 'モニター募集', en: 'Monitor' },
    { id: 'clinic', label: 'アクセス', en: 'Clinic' },
    { id: 'faq', label: 'よくある質問', en: 'FAQ' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col cursor-pointer" onClick={() => onPageChange('home')}>
          <h1 className={`font-serif-jp font-bold transition-colors ${isScrolled ? 'text-[#a67c52] text-lg' : 'text-[#8c6239] text-xl'}`}>
            {SALON_NAME}
          </h1>
          <span className="text-[10px] text-[#a67c52] hidden md:block">二の腕痩せ・肩甲骨出し・ブライダル専門</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => {
                if (item.id === 'monitor') {
                  onPageChange('monitor');
                } else {
                  onPageChange('home');
                  setTimeout(() => {
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] ${currentPage === item.id ? 'text-[#a67c52]' : 'text-[#1a1a1a] hover:text-[#a67c52]'}`}
            >
              {item.label}
            </button>
          ))}
          <a href="https://lin.ee/DS9UvmW" className="bg-[#a67c52] text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#8c6239] transition-all transform hover:scale-105 shadow-sm">
            <MessageCircle size={16} />
            <span className="text-xs font-bold tracking-widest">LINE予約</span>
          </a>
        </nav>

        <button className="lg:hidden text-rose-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => {
                setIsMenuOpen(false);
                if (item.id === 'monitor') {
                  onPageChange('monitor');
                } else {
                  onPageChange('home');
                  setTimeout(() => {
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="text-2xl font-serif-jp"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col w-full space-y-4 pt-8">
            <a href="https://lin.ee/DS9UvmW" className="w-full bg-green-500 text-white py-4 rounded-xl flex justify-center items-center space-x-3 text-lg">
              <MessageCircle />
              <span>LINEで予約・相談</span>
            </a>
            <a href="tel:000-0000-0000" className="w-full bg-rose-800 text-white py-4 rounded-xl flex justify-center items-center space-x-3 text-lg">
              <Phone />
              <span>電話でお問い合わせ</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f5f2ed]">
      {/* Background soft gradient/glow */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#f27d26]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[#a67c52]/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl order-2 lg:order-1">
          <div className="mb-4">
            <span className="font-en-serif text-[#a67c52] text-xl italic tracking-wide">About</span>
            <div className="text-sm text-[#a67c52]/60 mt-1">当サロンについて</div>
          </div>
          
          <h2 className="font-serif-jp text-4xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.4] mb-8 text-[#1a1a1a]">
            自分らしさを輝かせ、<br />
            <span className="relative inline-block">
              笑顔が溢れる日々を。
              <div className="absolute bottom-2 left-0 w-full h-[1px] bg-[#f27d26]/40"></div>
            </span>
          </h2>
          
          <div className="space-y-6 text-[#1a1a1a] max-w-lg">
            <p className="text-lg font-serif-jp leading-relaxed">
              {SALON_NAME}は、美容を通じて<br />
              お客様の人生をより豊かにすることを目指すサロンです。
            </p>
            <p className="text-base leading-relaxed opacity-80">
              「お客様ファースト」の姿勢を大切にし、<br />
              誠実で丁寧な対応を心掛けております。
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#menu" className="bg-[#a67c52] text-white px-12 py-5 rounded-full text-sm font-bold hover:bg-[#8c6239] transition-all text-center shadow-lg transform hover:-translate-y-1 tracking-[0.2em] uppercase">
              View Menu
            </a>
            <a href="https://lin.ee/DS9UvmW" className="bg-white/50 backdrop-blur-sm text-[#a67c52] border border-[#a67c52]/30 px-12 py-5 rounded-full text-sm font-bold hover:bg-white transition-all text-center tracking-[0.2em] uppercase">
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[400px] md:h-[600px] lg:h-[700px]">
          <div className="absolute inset-0 curved-mask overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/1200/1600?luxury,interior,clinic" 
              alt="Luxury Clinic Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#a67c52]/20 rounded-full"></div>
          <div className="absolute top-1/2 -right-8 w-1 h-32 bg-gradient-to-b from-transparent via-[#a67c52]/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{en: string, jp: string}> = ({en, jp}) => (
  <div className="text-center mb-16">
    <span className="font-en-serif text-[#a67c52] text-5xl md:text-7xl opacity-20 block -mb-6 md:-mb-10 font-light italic tracking-widest">
      {en}
    </span>
    <h2 className="font-serif-jp text-2xl md:text-3xl text-[#1a1a1a] relative z-10 tracking-widest">
      {jp}
    </h2>
    <div className="w-16 h-[1px] bg-[#f27d26]/30 mx-auto mt-6"></div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeader en="Philosophy" jp="私たちの想い" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl z-10 relative aspect-[4/5]">
              <img 
                src="https://picsum.photos/800/1000?therapy,skin,wellness" 
                alt="Massage Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#a67c52]/5 rounded-full -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 border border-[#a67c52]/10 rounded-[40px] -z-10"></div>
          </div>
          
          <div className="space-y-10">
            <h3 className="font-serif-jp text-2xl md:text-4xl text-[#1a1a1a] leading-relaxed">
              「美しさ」の先にある、<br />
              心豊かな毎日を。
            </h3>
            <div className="space-y-6 text-[#5a5a5a] leading-loose text-lg">
              <p>
                私たちは、単に外見を整えるだけでなく、お客様が自分自身を愛し、自信を持って毎日を過ごせるようサポートすることをミッションとしています。
              </p>
              <p>
                最新の技術と、一人ひとりに寄り添うホスピタリティ。その両立こそが、ジプソフィル®︎が大切にしている価値です。
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                "完全個室のプライベート空間",
                "専門知識を持つセラピスト",
                "エビデンスに基づいた施術",
                "アフターケアの徹底"
              ].map((point) => (
                <div key={point} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#a67c52]/10 flex items-center justify-center group-hover:bg-[#a67c52]/20 transition-colors">
                    <CheckCircle2 className="text-[#a67c52]" size={14} />
                  </div>
                  <span className="text-sm font-medium text-[#1a1a1a]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-white/50">
      <div className="container mx-auto px-4">
        <SectionHeader en="Gallery" jp="施術事例" />
        
        <div className="grid md:grid-cols-3 gap-10">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#a67c52]/5">
              <div className="relative overflow-hidden flex">
                <div className="w-1/2 relative">
                  <img src={study.beforeImg} alt="Before" className="w-full aspect-[4/5] object-cover" />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded uppercase tracking-widest">Before</div>
                </div>
                <div className="w-1/2 relative">
                  <img src={study.afterImg} alt="After" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[#a67c52]/80 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded uppercase tracking-widest font-bold">After</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-serif-jp font-bold text-[#1a1a1a]">{study.title}</h4>
                  <span className="text-[10px] bg-[#a67c52]/10 text-[#a67c52] px-3 py-1 rounded-full font-bold tracking-widest">{study.period}</span>
                </div>
                <p className="text-sm text-[#5a5a5a] leading-relaxed italic">
                  "{study.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIConsultant: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [concern, setConcern] = useState("");

  const handleDiagnose = async () => {
    if (!concern.trim()) return;
    setLoading(true);
    setResponse("");
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `あなたは「二の腕痩せ専門サロン ジプソフィル」のAIカウンセラーです。
      お客様の悩み:「${concern}」
      
      以下の制約を守って、専門的かつ優しくアドバイスをしてください：
      1. 150字程度で回答。
      2. 二の腕痩せにはリンパの滞りや肩甲骨周りのケアが重要であることに触れる。
      3. ジプソフィル福岡店への来店を優しく促す。
      4. 返信の最後には「まずは初回体験コースでご相談くださいね。」と入れる。`;

      const result = await ai.models.generateContent({
        model: 'gemini-flash-lite-latest',
        contents: prompt,
      });
      
      setResponse(result.text || "申し訳ございません。一時的に診断が利用できません。");
    } catch (err) {
      setResponse("AI診断中にエラーが発生しました。直接LINEでお問い合わせいただくのが確実です。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <BrainCircuit size={400} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-en-serif text-[#a67c52] text-xl italic mb-4 block">AI Concierge</span>
            <h2 className="font-serif-jp text-3xl md:text-5xl mb-6 tracking-widest">無料オンライン診断</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              あなたの理想の姿を教えてください。AIが最適なケアプランをご提案いたします。
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#a67c52] h-40 resize-none mb-6 transition-all"
              placeholder="例：結婚式までに二の腕をスッキリさせたい。ノースリーブを自信を持って着たい..."
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
            />
            <button 
              onClick={handleDiagnose}
              disabled={loading}
              className="w-full bg-[#a67c52] text-white py-5 rounded-full font-bold hover:bg-[#8c6239] transition-all flex justify-center items-center space-x-3 shadow-lg tracking-[0.2em] uppercase text-sm"
            >
              {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <Sparkles size={18} />}
              <span>Start Diagnosis</span>
            </button>
            
            {response && (
              <div className="mt-12 p-8 bg-white/5 rounded-3xl text-left border-l border-[#a67c52] section-fade-in">
                <p className="text-base md:text-lg leading-loose font-serif-jp text-white/90">{response}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader en="Menu" jp="メニュー・料金" />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group p-10 rounded-[40px] bg-[#f5f2ed]/50 hover:bg-white border border-transparent hover:border-[#a67c52]/10 transition-all duration-500 flex flex-col text-center hover:shadow-2xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-[#a67c52] group-hover:scale-110 transition-transform">
                {item.icon === "Sparkles" && <Sparkles size={32} />}
                {item.icon === "Activity" && <Activity size={32} />}
                {item.icon === "Clock" && <Clock size={32} />}
              </div>
              <h4 className="font-serif-jp text-xl text-[#1a1a1a] mb-4 font-bold tracking-widest">{item.title}</h4>
              <div className="text-[#a67c52] font-en-serif italic text-3xl mb-2">{item.price}</div>
              <div className="text-[10px] text-[#a67c52]/60 mb-8 uppercase tracking-[0.3em]">{item.duration}</div>
              <p className="text-[#5a5a5a] text-sm leading-loose flex-1 mb-10 font-serif-jp">
                {item.description}
              </p>
              <a href="https://lin.ee/DS9UvmW" className="bg-[#a67c52] text-white py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all tracking-widest text-xs uppercase">
                Reserve Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClinicInfo: React.FC = () => {
  return (
    <section id="clinic" className="py-24 bg-[#f5f2ed]">
      <div className="container mx-auto px-4">
        <SectionHeader en="Access" jp="店舗案内" />
        
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-[#a67c52]/5">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h3 className="font-serif-jp text-3xl text-[#1a1a1a] mb-10 font-bold tracking-widest">福岡店</h3>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full bg-[#f5f2ed] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#a67c52]" size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Location</div>
                  <p className="text-[#5a5a5a] text-base leading-relaxed font-serif-jp">
                    {LOCATION}<br />
                    <span className="text-[10px] text-[#a67c52]/60 mt-2 block">※詳細はご予約確定時にお伝えいたします。</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full bg-[#f5f2ed] flex items-center justify-center shrink-0">
                  <Clock className="text-[#a67c52]" size={20} />
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a] text-sm uppercase tracking-widest mb-2">Hours</div>
                  <p className="text-[#5a5a5a] text-base font-serif-jp">{HOURS}</p>
                </div>
              </div>
              
              <div className="pt-10 flex space-x-6">
                <a href="https://lin.ee/DS9UvmW" className="flex-1 bg-[#a67c52] text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-[#8c6239] transition-all shadow-lg text-xs font-bold uppercase tracking-widest">
                  <MessageCircle size={18} />
                  <span>Line Booking</span>
                </a>
                <a href="https://www.instagram.com/ninoude.fukuoka.emi/?hl=ja" className="w-14 h-14 border border-[#a67c52]/20 rounded-full flex items-center justify-center text-[#a67c52] hover:bg-[#f5f2ed] transition-all">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] md:h-auto relative curved-mask">
            <img 
              src="https://picsum.photos/1000/1200?fukuoka,interior,design" 
              alt="Salon Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader en="Q & A" jp="よくある質問" />
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-stone-100 last:border-0 overflow-hidden">
              <button 
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-rose-950 pr-8">{faq.question}</span>
                <ChevronRight className={`text-rose-300 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <p className="text-stone-600 leading-relaxed bg-rose-50/30 p-6 rounded-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MonitorRecruitment: React.FC = () => {
  return (
    <div className="pt-20 bg-[#f5f2ed] min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a67c52]/10 to-transparent blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-en-serif text-[#a67c52] text-6xl md:text-8xl font-light italic tracking-widest mb-4">Monitor</h2>
          <p className="font-serif-jp text-xl text-[#1a1a1a] tracking-[0.3em]">モニター募集</p>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['モニターの種類', '募集要項', '期間限定モニター', 'モニターに応募'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`}
                className="bg-white/60 backdrop-blur-md border border-[#a67c52]/20 px-8 py-4 rounded-full text-sm font-bold text-[#1a1a1a] hover:bg-[#a67c52] hover:text-white transition-all flex items-center space-x-2"
              >
                <span>{item}</span>
                <ChevronRight size={14} className="rotate-90" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-xs text-[#1a1a1a]/60 tracking-widest">
          <a href="/" className="hover:text-[#a67c52]">TOP</a>
          <span>&gt;</span>
          <span className="text-[#a67c52]">モニター募集</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h3 className="font-en-serif text-[#a67c52] text-5xl md:text-7xl opacity-20 block -mb-10 font-light italic tracking-widest">Monitors</h3>
              <h4 className="font-serif-jp text-3xl md:text-5xl text-[#1a1a1a] leading-tight font-bold">
                リーズナブルな価格で<br />
                治療を受けていただける<br />
                モニター様を募集しています。
              </h4>
              <div className="w-16 h-[1px] bg-[#f27d26] mb-10"></div>
              <p className="text-lg text-[#5a5a5a] leading-loose font-serif-jp">
                施術前後の写真撮影や手術中の動画撮影、WEBサイトやインターネット・雑誌広告等への公開にご協力をいただける方には、モニター価格で治療を受けていただけます。
              </p>
              <div className="bg-white/40 p-8 rounded-3xl border border-[#a67c52]/10 space-y-4">
                <p className="text-xs text-[#a67c52] leading-relaxed">
                  ※一度インターネット上に掲載された情報はSNSなどで拡散される可能性があり、当サロン側で全てを削除することはできません。ご理解の上、ご検討くださいませ。
                </p>
                <p className="text-xs text-[#a67c52] leading-relaxed">
                  ※ご状態によっては、モニターの適応外になる場合もございます。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="curved-mask overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/1000/1200?photography,model,beauty" 
                  alt="Monitor Photography" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section id="モニターの種類" className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <SectionHeader en="Types" jp="モニターの種類" />
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {MONITOR_TYPES.map((type, idx) => (
              <div key={type.id} className="group">
                <div className="relative mb-8">
                  <div className="aspect-[16/10] overflow-hidden rounded-[40px] shadow-lg">
                    <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border border-[#a67c52]/20 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                    <span className="font-en-serif text-[#a67c52] text-2xl italic">0{idx + 1}</span>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-[#a67c52]/5 -mt-20 relative z-10 mx-6">
                  <h5 className="font-serif-jp text-2xl text-[#a67c52] mb-6 font-bold text-center tracking-widest">{type.title}</h5>
                  <div className="w-full h-[1px] bg-[#a67c52]/10 mb-8"></div>
                  <p className="text-[#5a5a5a] text-sm leading-loose mb-8 font-serif-jp">
                    {type.description}
                  </p>
                  {type.note && <p className="text-xs text-[#1a1a1a] font-bold">{type.note}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="mt-24 max-w-4xl mx-auto bg-[#8c6239] p-12 rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <h5 className="font-serif-jp text-2xl mb-8 font-bold tracking-widest">各施術のモニター料金について</h5>
            <div className="space-y-4 text-white/80 leading-loose font-serif-jp">
              <p>各施術のモニター料金につきましては、料金表からご確認ください。</p>
              <p>なお、記載の料金は「部分モニター」となります。お間違えのないようご確認ください。</p>
              <p className="text-xl text-white font-bold">Instagramモニターは通常料金から50%OFFいたします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="募集要項" className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader en="Requirements" jp="募集要項" />
          <div className="max-w-4xl mx-auto space-y-12">
            {MONITOR_REQUIREMENTS.map((req, idx) => (
              <div key={req.id} className="bg-white/60 backdrop-blur-sm rounded-[40px] overflow-hidden shadow-sm border border-[#a67c52]/10">
                <div className="bg-[#f5f2ed] p-6 text-center border-b border-[#a67c52]/10">
                  <p className="font-serif-jp text-lg text-[#1a1a1a] font-medium">
                    <span className="font-en-serif text-[#a67c52] mr-2 italic">0{idx + 1}.</span>
                    {req.title}
                  </p>
                </div>
                <div className="p-10 space-y-6">
                  {req.items.map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-[#a67c52]/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-[#a67c52]" size={14} />
                      </div>
                      <p className="text-[#5a5a5a] text-base leading-relaxed font-serif-jp">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-center text-sm text-[#5a5a5a] pt-8">その他ご不明な点がございましたら、お気軽にお問い合わせくださいませ。</p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="モニターに応募" className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <SectionHeader en="Apply" jp="モニターに応募する" />
          
          <div className="max-w-4xl mx-auto bg-[#8c6239] p-1 rounded-[40px] shadow-2xl">
            <div className="bg-white/5 p-12 rounded-[38px] text-center">
              <h5 className="font-serif-jp text-2xl text-white mb-8 font-bold tracking-widest">応募方法について</h5>
              <div className="w-16 h-[1px] bg-[#f27d26] mx-auto mb-10"></div>
              <div className="space-y-4 text-white/80 leading-loose font-serif-jp mb-12">
                <p>モニター応募は、下記フォームのほかに電話予約・LINE予約・Web予約からも可能でございます。</p>
                <p>カウンセリング予約の際には、モニター希望である旨をお知らせくださいますようお願い申し上げます。</p>
              </div>

              <div className="bg-[#f5f2ed] p-12 rounded-[40px] shadow-inner relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <BrainCircuit size={400} className="absolute -top-20 -right-20" />
                  <BrainCircuit size={400} className="absolute -bottom-20 -left-20" />
                </div>
                
                <div className="relative z-10">
                  <h6 className="font-en-serif text-[#a67c52] text-6xl mb-4 italic">Reservation</h6>
                  <p className="font-serif-jp text-xl text-[#8c6239] mb-12 font-bold">無料カウンセリングのご相談はこちら</p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <a href="tel:000-0000-0000" className="bg-white border border-[#8c6239]/30 p-6 rounded-full flex flex-col items-center justify-center hover:bg-white/80 transition-all group">
                      <div className="flex items-center space-x-2 text-[#8c6239] mb-1">
                        <Phone size={20} />
                        <span className="font-bold text-sm">電話予約はこちら</span>
                      </div>
                      <span className="text-[10px] text-[#8c6239]/60">受付時間：10:00 〜 19:00</span>
                    </a>
                    
                    <a href="https://lin.ee/DS9UvmW" className="bg-[#4a3a2a] text-white p-6 rounded-full flex items-center justify-center space-x-3 hover:bg-[#3a2a1a] transition-all shadow-lg">
                      <MessageCircle size={24} />
                      <span className="font-bold text-sm tracking-widest">LINE予約はこちら</span>
                    </a>
                    
                    <a href="#" className="bg-[#f27d26] text-white p-6 rounded-full flex items-center justify-center space-x-3 hover:bg-[#d96a1d] transition-all shadow-lg">
                      <Activity size={24} />
                      <span className="font-bold text-sm tracking-widest">Web予約はこちら</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-20 mb-20">
          <div className="col-span-1">
            <h2 className="font-serif-jp text-2xl mb-8 tracking-widest">{SALON_NAME}</h2>
            <p className="text-white/40 text-sm leading-loose mb-10 font-serif-jp">
              美しさを通じて、心豊かな人生を。<br />
              福岡店は完全プライベート空間で、至福のひとときを提供します。
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-[#a67c52] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-[#a67c52] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-[#a67c52] uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h3>
            <ul className="space-y-5 text-xs tracking-widest uppercase">
              <li><button onClick={() => { onPageChange('home'); setTimeout(() => document.getElementById('concept')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-[#a67c52] transition-colors">Concept</button></li>
              <li><button onClick={() => { onPageChange('home'); setTimeout(() => document.getElementById('results')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-[#a67c52] transition-colors">Gallery</button></li>
              <li><button onClick={() => { onPageChange('home'); setTimeout(() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-[#a67c52] transition-colors">Menu</button></li>
              <li><button onClick={() => onPageChange('monitor')} className="hover:text-[#a67c52] transition-colors">Monitor</button></li>
              <li><button onClick={() => { onPageChange('home'); setTimeout(() => document.getElementById('clinic')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="hover:text-[#a67c52] transition-colors">Access</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-[#a67c52] uppercase tracking-[0.3em] text-[10px] mb-10">Contact</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone size={16} className="text-[#a67c52]" />
                <span className="text-xl font-en-serif italic">000-0000-0000</span>
              </div>
              <a href="https://lin.ee/DS9UvmW" className="inline-block bg-[#a67c52] text-white px-10 py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all text-xs uppercase tracking-widest">
                Line Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
            &copy; {new Date().getFullYear()} {SALON_NAME} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] lg:hidden bg-white/90 backdrop-blur-md border-t border-[#a67c52]/10 flex p-3 space-x-3">
      <a href="tel:000-0000-0000" className="flex-1 bg-[#1a1a1a] text-white py-4 rounded-full flex items-center justify-center space-x-2 shadow-lg">
        <Phone size={18} />
        <span className="font-bold text-[10px] uppercase tracking-widest">Call</span>
      </a>
      <a href="https://lin.ee/DS9UvmW" className="flex-2 w-2/3 bg-[#a67c52] text-white py-4 rounded-full flex items-center justify-center space-x-2 shadow-lg">
        <MessageCircle size={18} />
        <span className="font-bold text-[10px] uppercase tracking-widest">Line Booking</span>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="antialiased">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Results />
            <AIConsultant />
            <MenuSection />
            <ClinicInfo />
            <FAQ />
          </>
        ) : (
          <MonitorRecruitment />
        )}
      </main>
      <Footer onPageChange={setCurrentPage} />
      <StickyCTA />
    </div>
  );
};

export default App;
