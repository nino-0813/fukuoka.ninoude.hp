'use client';

import { useState } from 'react';
import { BrainCircuit, Sparkles } from 'lucide-react';

export function AIConsultantSection() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [concern, setConcern] = useState('');

  const handleDiagnose = async () => {
    if (!concern.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ai-diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concern: concern.trim() }),
      });
      const data = await res.json();
      setResponse(
        data.text ||
          '申し訳ございません。一時的に診断が利用できません。直接LINEでお問い合わせください。'
      );
    } catch {
      setResponse(
        'AI診断中にエラーが発生しました。直接LINEでお問い合わせいただくのが確実です。'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative"
      aria-labelledby="ai-heading"
    >
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none" aria-hidden>
        <BrainCircuit size={400} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-en-serif text-[#a67c52] text-xl italic mb-4 block">
              AI Concierge
            </span>
            <h2 id="ai-heading" className="font-serif-jp text-3xl md:text-5xl mb-6 tracking-widest">
              無料オンライン診断
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              あなたの理想の姿を教えてください。AIが最適なケアプランをご提案いたします。
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
            <label htmlFor="concern-input" className="sr-only">
              お悩みやご希望
            </label>
            <textarea
              id="concern-input"
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#a67c52] h-40 resize-none mb-6 transition-all"
              placeholder="例：結婚式までに二の腕をスッキリさせたい。ノースリーブを自信を持って着たい..."
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
            />
            <button
              type="button"
              onClick={handleDiagnose}
              disabled={loading}
              className="w-full bg-[#a67c52] text-white py-5 rounded-full font-bold hover:bg-[#8c6239] transition-all flex justify-center items-center space-x-3 shadow-lg tracking-[0.2em] uppercase text-sm disabled:opacity-70"
            >
              {loading ? (
                <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : (
                <Sparkles size={18} aria-hidden />
              )}
              <span>Start Diagnosis</span>
            </button>

            {response && (
              <div
                className="mt-12 p-8 bg-white/5 rounded-3xl text-left border-l border-[#a67c52] section-fade-in"
                role="status"
              >
                <p className="text-base md:text-lg leading-loose font-serif-jp text-white/90">
                  {response}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
