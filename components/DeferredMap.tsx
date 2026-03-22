'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const MAP_EMBED_URL = 'https://www.google.com/maps?q=福岡県福岡市東区&output=embed';

type DeferredMapProps = {
  title?: string;
  className?: string;
};

export function DeferredMap({ title = '福岡県福岡市東区の地図', className = '' }: DeferredMapProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full min-h-[300px] ${className}`}>
      {shouldLoad ? (
        <iframe
          src={MAP_EMBED_URL}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-[#e8e6e3] text-[#5a5a5a]"
          aria-hidden
        >
          <MapPin size={32} className="text-[#a67c52]/50 mb-2" />
          <span className="text-sm">地図を読み込みます</span>
        </div>
      )}
    </div>
  );
}
