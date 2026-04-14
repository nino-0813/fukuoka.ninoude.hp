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
          </div>
        </div>
      </div>
    </section>
  );
}
