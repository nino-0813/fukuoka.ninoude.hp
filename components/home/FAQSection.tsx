'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FAQS } from '@/lib/constants';
import { SectionHeader } from '@/components/SectionHeader';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader en="Q & A" jp="よくある質問" />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <article
              key={idx}
              className="border-b border-stone-100 last:border-0 overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 id={idx === 0 ? 'faq-heading' : undefined} className="sr-only">
                {faq.question}
              </h3>
              <button
                type="button"
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="text-lg font-bold text-rose-950 pr-8" itemProp="name">
                  {faq.question}
                </span>
                <ChevronRight
                  className={`text-rose-300 transition-transform shrink-0 ${openIndex === idx ? 'rotate-90' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 pb-8' : 'max-h-0'
                }`}
              >
                <p
                  className={`text-stone-600 leading-relaxed bg-rose-50/30 p-6 rounded-2xl ${openIndex === idx ? 'block' : 'hidden'}`}
                  itemProp="text"
                >
                  {faq.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center mt-12">
          <Link href="/faq" className="text-[#a67c52] font-bold hover:underline">
            よくある質問一覧はこちら
          </Link>
        </p>
      </div>
    </section>
  );
}
