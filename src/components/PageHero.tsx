interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  heightClassName?: string;
  align?: 'center' | 'left';
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  title,
  subtitle,
  eyebrow,
  heightClassName = 'min-h-[360px] md:min-h-[430px]',
  align = 'left',
  children,
}: PageHeroProps) {
  const isCentered = align === 'center';

  return (
    <section className={`relative isolate overflow-hidden px-6 ${heightClassName}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[rgba(12,20,28,0.42)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,29,39,0.9)] via-[rgba(18,29,39,0.62)] to-[rgba(18,29,39,0.25)]" />

      <div className={`relative z-10 mx-auto flex h-full max-w-7xl items-center ${isCentered ? 'justify-center text-center' : 'justify-start text-left'}`}>
        <div className={`relative space-y-5 ${isCentered ? 'max-w-3xl' : 'max-w-3xl'}`}>
          {eyebrow && (
            <span className="editorial-kicker inline-flex rounded-full border border-white/18 bg-white/8 px-4 py-1 text-white/72 backdrop-blur-sm">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className={`text-sm leading-relaxed text-white/82 sm:text-base ${isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
