import { ArrowRight, Building2, MapPinned, ShieldCheck, Sparkles } from 'lucide-react';
import {
  HOME_DIFFERENTIATORS,
  HOME_METRICS,
  PROJECT_GALLERY,
  PROJECT_IMAGES,
  SITE_COPY,
} from '../data';
import type { PagePath } from '../types';
import SectionDivider from './SectionDivider';

interface HomeViewProps {
  onNavigate: (path: PagePath) => void;
}

const icons = [Building2, MapPinned, Sparkles, ShieldCheck];

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden px-6 pb-20 pt-24">
        <img
          src={PROJECT_IMAGES.hero}
          alt="Condominios Country Club"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(15,22,31,0.45)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,29,39,0.92)] via-[rgba(18,29,39,0.55)] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <span className="editorial-kicker inline-flex rounded-full border border-white/18 bg-white/8 px-4 py-1 text-white/72 backdrop-blur-sm">
              {SITE_COPY.home.eyebrow}
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
              {SITE_COPY.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
              {SITE_COPY.home.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('/desarrollos')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy)]"
              >
                Ver tipologías
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contacto')}
                className="ghost-outline inline-flex items-center justify-center rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white"
              >
                Solicitar asesoría
              </button>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {HOME_METRICS.map((metric) => (
              <article key={metric.label} className="rounded-[24px] border border-white/14 bg-white/10 p-5 backdrop-blur-md">
                <p className="font-heading text-3xl font-extrabold text-white">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-white">{metric.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/72">{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Por qué elegirnos</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              La diferencia Country Club
            </h2>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {HOME_DIFFERENTIATORS.map((item, index) => {
              const Icon = icons[index];

              return (
                <article key={item.title} className="card-shell rounded-[28px] p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-deep)]/75">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--color-navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dark-panel px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="editorial-kicker text-white/55">Manifiesto</p>
          <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
            {SITE_COPY.home.quote}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('/quienes-somos')}
              className="rounded-full bg-white/12 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white"
            >
              Conocer contexto
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/servicios')}
              className="rounded-full border border-white/18 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white"
            >
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Proyecto</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Comercializamos una experiencia residencial con ubicación, amenidades y soporte real
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-copy)]">
              El brochure comercial confirma cuatro tipologías publicadas, amenidades integradas y un punto de contacto listo para seguimiento. La implementación digital conserva esa claridad y la adapta a una navegación preparada para despliegue en Vercel.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('/desarrollos')}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white"
              >
                Ver desarrollo
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contacto')}
                className="rounded-full border border-[var(--color-line)] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy)]"
              >
                Contactar ahora
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECT_GALLERY.slice(0, 4).map((image, index) => (
              <figure
                key={image.caption}
                className={`overflow-hidden rounded-[28px] ${index === 0 ? 'sm:col-span-2' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full w-full object-cover ${index === 0 ? 'aspect-[16/9]' : 'aspect-[1/1]'}`}
                  referrerPolicy="no-referrer"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
