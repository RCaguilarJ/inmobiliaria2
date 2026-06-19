import { BarChart3, Cpu, Megaphone, ShieldCheck } from 'lucide-react';
import {
  ABOUT_DIFFERENTIATORS,
  ABOUT_PILLARS,
  PROJECT_GALLERY,
  PROJECT_IMAGES,
  SITE_COPY,
} from '../data';
import type { PagePath } from '../types';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';

interface NosotrosViewProps {
  onNavigate: (path: PagePath) => void;
}

const pillarIcons = [BarChart3, Cpu, Megaphone];

export default function NosotrosView({ onNavigate }: NosotrosViewProps) {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.aboutHero}
        eyebrow={SITE_COPY.about.eyebrow}
        title={SITE_COPY.about.title}
        subtitle={SITE_COPY.about.subtitle}
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src={PROJECT_IMAGES.living}
              alt="Interior de Condominios Country Club"
              className="aspect-[4/3] h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Luxent + Country Club</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Comercialización enfocada en experiencia, claridad y seguimiento
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-copy)]">
              <p>
                El perfil empresarial de Luxent define un enfoque centrado en propiedades exclusivas, atención personalizada, marketing especializado y herramientas digitales para facilitar la compra, venta o comercialización de desarrollos premium.
              </p>
              <p>
                En esta versión, ese mismo marco se aplica a Condominios Country Club: un desarrollo con frente al corredor Country, amenidades integradas y una narrativa comercial respaldada por brochure, galería y material audiovisual real.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Enfoque innovador', 'Atención personalizada', 'Experiencias únicas', 'Alta gama'].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-[var(--color-surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-navy)]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Nuestro objetivo</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Mercado, tecnología y comunicación en una misma conversación comercial
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-copy)]">
              La metodología integra lectura del mercado inmobiliario, automatización comercial y diseño de comunicación para sostener un proceso de venta más claro y mejor documentado.
            </p>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ABOUT_PILLARS.map((pillar, index) => {
              const Icon = pillarIcons[index];

              return (
                <article key={pillar.title} className="card-shell rounded-[28px] p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--color-accent)] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--color-navy)]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Qué nos diferencia</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Criterio comercial y experiencia visual
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ABOUT_DIFFERENTIATORS.map((item) => (
              <article key={item.title} className="card-shell rounded-[28px] p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--color-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Infraestructura</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Infraestructura que genera confianza desde la primera visita
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-copy)]">
              El lobby, los espacios interiores, la terraza con alberca y las vistas abiertas ayudan a sostener una presentación comercial coherente. El objetivo no es solo mostrar un activo, sino construir una percepción de valor clara y consistente.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/contacto')}
              className="mt-8 rounded-full bg-[var(--color-navy)] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white"
            >
              Solicitar recorrido
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECT_GALLERY.slice(0, 3).map((image, index) => (
              <figure
                key={image.caption}
                className={`overflow-hidden rounded-[28px] ${index === 0 ? 'sm:col-span-2' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full w-full object-cover ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}
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
