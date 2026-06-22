interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  heightClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  title,
  subtitle,
  eyebrow,
  heightClassName = 'min-h-[360px] sm:min-h-[420px]',
  titleClassName = 'max-w-[720px] text-5xl leading-[0.95] sm:text-6xl lg:text-[4.35rem]',
  subtitleClassName = 'max-w-[580px] text-base leading-8 text-white/78',
  children,
}: PageHeroProps) {
  return (
    <section className={`relative isolate overflow-hidden px-6 pt-[112px] ${heightClassName}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[rgba(18,30,49,0.34)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,31,49,0.90)] via-[rgba(20,31,49,0.62)] to-[rgba(20,31,49,0.20)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1240px] items-center pb-16">
        <div className="space-y-5">
          {eyebrow && <p className="editorial-kicker text-white/36">{eyebrow}</p>}
          <h1 className={`font-heading font-extrabold tracking-[-0.03em] text-white ${titleClassName}`}>{title}</h1>
          <p className={subtitleClassName}>{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
