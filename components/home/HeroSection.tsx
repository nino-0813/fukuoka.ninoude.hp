export function HeroSection() {
  return (
    <section
      className="heroSection relative lg:min-h-screen overflow-hidden bg-[#f5f2ed] pt-0 pb-0 lg:pt-20 lg:pb-0"
      aria-labelledby="hero-heading"
    >
      <h2 id="hero-heading" className="sr-only">
        福岡で二の腕を細くするなら、ジプソフィル
      </h2>

      {/* Mobile: revert to the previous hero image behavior */}
      <div className="lg:hidden">
        <div className="heroBg heroBg1" aria-hidden />
      </div>

      {/* Desktop: place 1.png at the top */}
      <img src="/images/about/1.png" alt="" className="hidden lg:block w-full h-auto" />

      <style>{`
        .heroBg {
          width: 100%;
          aspect-ratio: 1080 / 1920;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
        .heroBg1 {
          background-image: url('/images/about/1.svg');
        }
      `}</style>
    </section>
  );
}
