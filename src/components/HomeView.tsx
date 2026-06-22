import {
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  MonitorSmartphone,
  TrendingUp,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  HERO_FEATURES,
  HOME_FEATURE_CARDS,
  PROJECT_IMAGES,
  SITE_COPY,
} from '../data';
import type { PagePath } from '../types';
import Reveal from './Reveal';
import SectionDivider from './SectionDivider';

interface HomeViewProps {
  onNavigate: (path: PagePath) => void;
}

const topIcons = [Building2, TrendingUp, Users, BriefcaseBusiness];
const heroIcons = [Building2, Users, TrendingUp, MonitorSmartphone];
const heroTitleLines = ['PROPIEDADES', 'EXCLUSIVAS PARA', 'UN NUEVO', 'ESTANDAR DE VIDA'];

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div>
      <section data-home-hero className="relative isolate overflow-hidden pb-0 pt-0">
        <img
          src={PROJECT_IMAGES.homeHero}
          alt="Luxent Properties"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(17,27,40,0.44)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,24,38,0.72)] via-[rgba(14,24,38,0.42)] to-[rgba(14,24,38,0.12)]" />
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[rgba(8,16,28,0.28)] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[860px] max-w-[1920px] flex-col justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[980px] pb-8 pt-[150px] sm:pt-[172px] lg:pb-10 lg:pt-[188px]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[3.6rem] font-extrabold leading-[0.88] tracking-[-0.065em] text-white sm:text-[4.95rem] lg:text-[6.2rem] xl:text-[6.6rem]"
            >
              {heroTitleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-[920px] text-[1.05rem] leading-[1.82] text-white/92 sm:text-[1.12rem] lg:max-w-[900px]"
            >
              {SITE_COPY.home.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => onNavigate('/desarrollos')}
                className="rounded-[10px] bg-[#6f8197] px-6 py-[0.95rem] text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(20,31,49,0.20)]"
              >
                Ver desarrollos
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contacto')}
                className="rounded-[10px] border border-white/26 bg-[rgba(255,255,255,0.12)] px-6 py-[0.95rem] text-sm font-extrabold text-white backdrop-blur-sm"
              >
                Solicitar asesoria
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 border-t border-white/10 bg-[rgba(13,23,38,0.40)] px-4 py-5 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:px-6"
          >
            {HERO_FEATURES.map((item, index) => {
              const Icon = heroIcons[index];

              return (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/14 bg-white/10 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold leading-5 text-white/86">{item.title}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="text-center">
            <p className="editorial-kicker text-[var(--color-copy)]/70">POR QUE ELEGIRNOS</p>
            <h2 className="mt-4 font-heading text-[2.6rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
              LA DIFERENCIA LUXENT
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {HOME_FEATURE_CARDS.map((card, index) => {
              const Icon = topIcons[index];

              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="card-shell min-h-[248px] px-5 py-7 sm:px-7">
                    {card.badge && (
                      <span className="inline-flex rounded-[4px] border border-[var(--color-line)] px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-[var(--color-copy)]">
                        {card.badge}
                      </span>
                    )}
                    <div className="mt-7 inline-flex h-14 w-14 items-center justify-center rounded-[12px] border border-[var(--color-line)] text-[var(--color-accent-strong)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 max-w-[180px] font-heading text-[1.75rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--color-heading)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{card.description}</p>
                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[0.05em] text-[var(--color-navy)]"
                    >
                      {card.linkLabel}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] px-6 py-24 text-white sm:py-28">
        <Reveal className="mx-auto max-w-[860px] text-center">
          <SectionDivider inverse />
          <h2 className="mt-10 font-heading text-[2.25rem] font-medium leading-[1.22] tracking-[-0.03em] text-white/88 sm:text-[3.4rem]">
            Mas que una inmobiliaria, <span className="font-extrabold text-white">somos tu aliado estrategico</span> en el mercado de bienes raices de lujo.
          </h2>
          <SectionDivider inverse className="mt-10" />
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('/quienes-somos')}
              className="rounded-[2px] bg-[var(--color-accent)] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.06em] text-white"
            >
              Conoce nuestra historia
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/desarrollos')}
              className="rounded-[2px] border border-white/26 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.06em] text-white"
            >
              Ver desarrollos
            </button>
          </div>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-24 text-white sm:py-28">
        <img
          src={PROJECT_IMAGES.homeCta}
          alt="Comercializacion inmobiliaria Luxent"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(82,105,130,0.82)]" />
        <Reveal className="relative z-10 mx-auto max-w-[1040px] text-center">
          <h2 className="font-heading text-[2.5rem] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[4.2rem]">
            {SITE_COPY.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-[720px] text-base leading-8 text-white/84">{SITE_COPY.home.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('/contacto')}
              className="rounded-[10px] bg-white px-7 py-4 text-sm font-extrabold text-[var(--color-navy)]"
            >
              Contactar ahora
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/desarrollos')}
              className="rounded-[10px] bg-white/18 px-7 py-4 text-sm font-extrabold text-white backdrop-blur-sm"
            >
              Ver desarrollos
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
