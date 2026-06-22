import {
  BarChart3,
  BriefcaseBusiness,
  Camera,
  FileBadge2,
  Gavel,
  Megaphone,
  Network,
  ScrollText,
  Users,
} from 'lucide-react';
import {
  LEGAL_SUPPORT,
  MARKET_STUDIES,
  PROJECT_IMAGES,
  SERVICES_GRID,
  SITE_COPY,
  TOOL_GROUPS,
} from '../data';
import PageHero from './PageHero';
import Reveal from './Reveal';

const serviceIcons = [
  BriefcaseBusiness,
  Users,
  Megaphone,
  Camera,
  BarChart3,
  Network,
  ScrollText,
  Gavel,
];
const toolIcons = [FileBadge2, BarChart3, Users];

export default function AlianzasView() {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.servicesHero}
        eyebrow={SITE_COPY.services.eyebrow}
        title={SITE_COPY.services.title}
        subtitle={SITE_COPY.services.subtitle}
        titleClassName="max-w-[760px] text-5xl leading-[0.95] sm:text-6xl lg:text-[4.25rem]"
      />

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="editorial-kicker text-[var(--color-copy)]/70">LO QUE HACEMOS</p>
              <h2 className="mt-4 font-heading text-[2.8rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
                NUESTROS SERVICIOS
              </h2>
            </div>
            <p className="max-w-[360px] text-sm leading-7 text-[var(--color-copy)]">
              Cobertura integral del ciclo inmobiliario: desde la estrategia inicial hasta el cierre y la postventa.
            </p>
          </Reveal>

          <div className="mt-8 h-px bg-[var(--color-line)]" />

          <div className="mt-10 grid overflow-hidden border border-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {SERVICES_GRID.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Reveal key={service.number} delay={index * 0.04} y={18}>
                  <article className="feature-card-hover group h-full min-h-[320px] border-b border-r border-[var(--color-line)] bg-white px-7 py-8 cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(26,40,61,0.12)]">
                    <p className="text-[11px] font-extrabold tracking-[0.18em] text-[var(--color-copy)]/50 transition-colors group-hover:text-white/80">
                      {service.number}
                    </p>
                    <div className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[var(--color-line)] text-[var(--color-accent-strong)] transition-colors group-hover:border-white/25 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 max-w-[210px] font-heading text-[1.4rem] font-extrabold leading-[1.18] tracking-[-0.03em] text-[var(--color-heading)] transition-colors group-hover:text-white">
                      {service.title}
                    </h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <h2 className="font-heading text-[2.7rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
              METODOLOGÍA Y
              <br />
              HERRAMIENTAS DIGITALES
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-copy)]">
              Automatizamos procesos clave para mejorar la experiencia comercial y operativa de cada desarrollo.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TOOL_GROUPS.map((group, index) => {
              const Icon = toolIcons[index];

              return (
                <Reveal key={group.title} delay={index * 0.08}>
                  <article className="card-shell h-full px-5 py-6 sm:px-7 sm:py-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-[var(--color-accent-strong)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-[1.55rem] font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
                      {group.title}
                    </h3>
                    <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--color-copy)]">
                      {group.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="editorial-kicker text-[var(--color-copy)]/70">INTELIGENCIA DE MERCADO</p>
              <h2 className="mt-4 font-heading text-[2.8rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
                ESTUDIOS Y ANÁLISIS
                <br />
                DE MERCADO
              </h2>
            </div>
            <p className="max-w-[330px] text-sm leading-7 text-[var(--color-copy)]">
              Decisiones respaldadas por datos reales del mercado inmobiliario de la Zona Metropolitana de Guadalajara.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {MARKET_STUDIES.map((study, index) => (
              <Reveal key={study.index} delay={index * 0.05}>
                <article className="border border-[var(--color-line)] bg-white px-4 py-5 shadow-[0_18px_42px_rgba(27,42,62,0.05)]">
                  <div className="flex items-start justify-between gap-3">
                    <BarChart3 className="mt-1 h-5 w-5 text-[var(--color-accent-strong)]" />
                    <span className="font-heading text-[2rem] font-extrabold leading-none text-[var(--color-line)]">{study.index}</span>
                  </div>
                  <h3 className="mt-6 font-heading text-[1.08rem] font-extrabold tracking-[-0.02em] text-[var(--color-heading)]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[var(--color-copy)]">{study.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <h2 className="font-heading text-[2.8rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
              ACOMPAÑAMIENTO
              <br />
              JURÍDICO
            </h2>
            <p className="mt-6 max-w-[470px] text-base leading-8 text-[var(--color-copy)]">
              Brindamos asesoramiento y acompañamiento al desarrollador y al cliente desde la etapa de gestación del proyecto inmobiliario hasta la escrituración y postventa.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {LEGAL_SUPPORT.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-3 rounded-[10px] bg-[var(--color-surface-soft)] px-4 py-3 text-sm font-semibold text-[var(--color-heading)]"
                >
                  <ScrollText className="h-4 w-4 text-[var(--color-accent-strong)]" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-[1fr_0.62fr]">
            <div className="order-2 h-[180px] rounded-[8px] bg-[var(--color-surface-soft)] sm:order-1 sm:h-[220px]" />
            <div className="order-1 flex h-[320px] items-center justify-center rounded-[8px] bg-[var(--color-surface-soft)] sm:order-2 sm:h-[420px]">
              <Gavel className="h-20 w-20 text-[var(--color-line)]" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
