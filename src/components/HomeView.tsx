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
      <section data-home-hero className="relative isolate overflow-hidden border-b border-white/10 pb-0 pt-0">
        <img
          src={PROJECT_IMAGES.homeHero}
          alt="Luxent Properties"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(17,27,40,0.44)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,24,38,0.72)] via-[rgba(14,24,38,0.42)] to-[rgba(14,24,38,0.12)]" />
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[rgba(8,16,28,0.28)] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1240px] flex-col justify-between px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[720px] pb-8 pt-36 sm:pt-40 lg:pb-10 lg:pt-44"
          >
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.4rem] xl:text-[3.8rem]"
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
              className="mt-6 max-w-[600px] text-base leading-[1.8] text-white/90 sm:text-lg lg:max-w-[650px]"
            >
              {SITE_COPY.home.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => onNavigate('/desarrollos')}
                className="rounded-[8px] bg-[#5f7a8c] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_32px_rgba(20,31,49,0.2)] transition-colors hover:bg-[#6f8a9c]"
              >
                Ver desarrollos
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contacto')}
                className="rounded-[8px] border border-white/30 bg-[rgba(255,255,255,0.1)] px-5 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-[rgba(255,255,255,0.15)]"
              >
                Solicitar asesoria
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 border-t border-white/10 bg-[rgba(13,23,38,0.35)] px-4 py-6 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:px-6 lg:py-8"
          >
            {HERO_FEATURES.map((item, index) => {
              const Icon = heroIcons[index];

              return (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/20 bg-[rgba(255,255,255,0.08)] text-white shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-semibold leading-[1.3] text-white/95">{item.title}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="text-center">
            <p className="editorial-kicker text-[var(--color-copy)]/60">POR QUE ELEGIRNOS</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.03em] text-[var(--color-heading)] sm:text-5xl lg:text-6xl">
              LA DIFERENCIA LUXENT
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {HOME_FEATURE_CARDS.map((card, index) => {
              const Icon = topIcons[index];

              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="feature-card-hover h-full min-h-[320px] rounded-[8px] border border-[var(--color-line)] bg-white px-6 py-8 text-[var(--color-heading)] shadow-[0_24px_60px_rgba(26,40,61,0.06)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(26,40,61,0.12)]">
                    {card.badge && (
                      <span className="inline-flex rounded-[4px] border border-[var(--color-line)] px-3 py-1.5 text-[10px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-copy)]">
                        {card.badge}
                      </span>
                    )}
                    <div className="mt-7 inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[var(--color-line)] text-[var(--color-accent-strong)] feature-card-icon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 max-w-[180px] font-heading text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--color-heading)]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
                      {card.description}
                    </p>
                    <button type="button" className="mt-6 inline-flex items-center gap-2 text-[12px] font-extrabold tracking-[0.05em] text-[var(--color-navy)] transition-colors hover:text-[var(--color-accent-strong)]">
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

      <section className="bg-[var(--color-navy)] px-6 py-20 text-white sm:py-24">
        <Reveal className="mx-auto max-w-[800px] text-center">
          <SectionDivider inverse />
          <h2 className="mt-10 font-heading text-2xl font-medium leading-[1.3] tracking-[-0.03em] text-white/85 sm:text-4xl">
            Mas que una inmobiliaria, <span className="font-extrabold text-white">somos tu aliado estrategico</span> en el mercado de bienes raices de lujo.
          </h2>
          <SectionDivider inverse className="mt-10" />
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('/quienes-somos')}
              className="rounded-[6px] bg-[var(--color-accent)] px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-accent-strong)]"
            >
              Conoce nuestra historia
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/desarrollos')}
              className="rounded-[6px] border border-white/30 px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              Ver desarrollos
            </button>
          </div>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-20 text-white sm:py-24">
        <img
          src={PROJECT_IMAGES.homeCta}
          alt="Comercializacion inmobiliaria Luxent"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(82,105,130,0.80)]" />
        <Reveal className="relative z-10 mx-auto max-w-[900px] text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {SITE_COPY.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-sm leading-7 text-white/85 sm:text-base">{SITE_COPY.home.ctaSubtitle}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('/contacto')}
              className="rounded-[8px] bg-white px-6 py-3 text-sm font-extrabold text-[var(--color-navy)] transition-all hover:bg-white/95 shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
            >
              Contactar ahora
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/desarrollos')}
              className="rounded-[8px] bg-white/15 px-6 py-3 text-sm font-extrabold text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20"
            >
              Ver desarrollos
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
