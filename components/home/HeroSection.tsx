export function HeroSection() {
  return (
    <section
      className="heroSection relative lg:min-h-screen overflow-hidden bg-[#f5f2ed] pt-0 pb-0 lg:pt-20 lg:pb-0"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-x-0 bottom-0 top-0 lg:top-24 z-0" aria-hidden>
        <div className="heroBg heroBg1" />
      </div>
      <h2 id="hero-heading" className="sr-only">
        福岡で二の腕を細くするなら、ジプソフィル
      </h2>
      <style>{`
        .heroBg {
          position: absolute;
          inset: 0;
          background-size: clamp(420px, 92vw, 1280px) auto;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform;
          transform: scale(1);
        }
        .heroBg1 {
          background-image: url('/images/about/1.png');
        }
        @media (max-width: 1023px) {
          .heroSection {
            aspect-ratio: 1080 / 1920;
          }
          .heroBg {
            background-size: 100% 100%;
          }
          .heroBg1 {
            background-image: url('/images/about/1.svg');
          }
        }
      `}</style>
    </section>
  );
}
