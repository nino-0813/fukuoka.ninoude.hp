type Props = { en: string; jp: string };

export function SectionHeader({ en, jp }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="font-en-serif text-[#a67c52] text-5xl md:text-7xl opacity-20 block -mb-6 md:-mb-10 font-light italic tracking-widest">
        {en}
      </span>
      <h2 className="font-serif-jp text-2xl md:text-3xl text-[#1a1a1a] relative z-10 tracking-widest">
        {jp}
      </h2>
      <div className="w-16 h-[1px] bg-[#f27d26]/30 mx-auto mt-6" aria-hidden />
    </div>
  );
}
