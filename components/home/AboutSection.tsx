export function AboutSection() {
  return (
    <section id="concept" className="bg-white/30 backdrop-blur-sm pt-0 pb-10 lg:pb-16" aria-label="concept">
      {/* Mobile: keep the original image as-is */}
      <img src="/images/about/2.svg" alt="" className="w-full h-auto block lg:hidden" />

      {/* Desktop: one image + text + staff intro */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto py-16">
            <div className="rounded-[28px] overflow-hidden bg-white shadow-sm border border-black/5">
              <img src="/images/about/2.png" alt="" className="w-full h-auto block" />
            </div>
            <div className="mt-10 text-center">
              <a
                href="/monitor-recruitment#%E5%88%9D%E5%9B%9E%E4%BD%93%E9%A8%93%E3%81%AE%E3%81%94%E4%BA%88%E7%B4%84"
                className="inline-block bg-[#a67c52] text-white px-12 py-4 rounded-full font-bold hover:bg-[#8c6239] transition-all text-xs tracking-widest"
              >
                今すぐ予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
