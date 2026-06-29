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
  heightClassName = '',
  titleClassName = 'max-w-[720px]',
  subtitleClassName = 'max-w-[580px] text-white/78',
  children,
}: PageHeroProps) {
  return (
    <section className={`page-hero-shell relative isolate overflow-hidden ${heightClassName}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[rgba(18,30,49,0.34)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,31,49,0.90)] via-[rgba(20,31,49,0.62)] to-[rgba(20,31,49,0.20)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1240px] items-center pb-12 sm:pb-16">
        <div className="page-hero-copy-shell space-y-5">
          {eyebrow && <p className="editorial-kicker text-white/36">{eyebrow}</p>}
          <h1 className={`page-hero-title font-heading font-extrabold tracking-[-0.03em] text-white ${titleClassName}`}>
            {title}
          </h1>
          <p className={`page-hero-copy ${subtitleClassName}`}>{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
