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
const heroTitleLines = ['PROPIEDADES', 'EXCLUSIVAS PARA', 'UN NUEVO', 'ESTÁNDAR DE VIDA'];

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
        <div className="absolute inset-0 bg-[rgba(15,25,40,0.38)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,22,36,0.65)] via-[rgba(12,22,36,0.36)] to-[rgba(12,22,36,0.08)]" />
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[rgba(6,14,26,0.24)] to-transparent" />

        <div className="home-hero-shell relative z-10 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[720px] pb-8 pt-[calc(78px+3.25rem)] sm:pt-[calc(78px+4.25rem)] lg:pb-10 lg:pt-[calc(78px+6rem)]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="home-hero-title font-heading font-extrabold tracking-[-0.045em] text-white"
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
              className="hero-copy mt-6 max-w-[650px] text-white/90"
            >
              {SITE_COPY.home.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="responsive-actions mt-8"
            >
              <button
                type="button"
                onClick={() => onNavigate('/desarrollos')}
                className="rounded-[8px] bg-[#5f7a8c] px-5 py-3 text-center text-sm font-extrabold text-white shadow-[0_12px_32px_rgba(20,31,49,0.2)] transition-colors hover:bg-[#6f8a9c]"
              >
                Ver desarrollos
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contacto')}
                className="rounded-[8px] border border-white/30 bg-[rgba(255,255,255,0.1)] px-5 py-3 text-center text-sm font-extrabold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-[rgba(255,255,255,0.15)]"
              >
                Solicitar asesoría
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

      <section className="page-section bg-white">
        <div className="page-container">
          <Reveal className="text-center">
            <p className="editorial-kicker text-[var(--color-copy)]/60">POR QUÉ ELEGIRNOS</p>
            <h2 className="section-display-title mt-4 font-heading font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
              LA DIFERENCIA LUXENT
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {HOME_FEATURE_CARDS.map((card, index) => {
              const Icon = topIcons[index];

              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="feature-card-hover h-full rounded-[8px] border border-[var(--color-line)] bg-white px-5 py-6 text-[var(--color-heading)] shadow-[0_24px_60px_rgba(26,40,61,0.06)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(26,40,61,0.12)] sm:px-6 sm:py-8">
                    {card.badge && (
                      <span className="inline-flex rounded-[4px] border border-[var(--color-line)] px-3 py-1.5 text-[10px] font-extrabold tracking-[0.14em] uppercase text-[var(--color-copy)]">
                        {card.badge}
                      </span>
                    )}
                    <div className="mt-7 inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[var(--color-line)] text-[var(--color-accent-strong)] feature-card-icon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="card-display-title mt-6 max-w-[13ch] font-heading font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
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

      <section className="page-section bg-[var(--color-navy)] text-white">
        <Reveal className="mx-auto max-w-[800px] text-center">
          <SectionDivider inverse />
          <h2 className="section-display-title mt-10 font-heading font-medium tracking-[-0.03em] text-white/85">
            Más que una inmobiliaria, <span className="font-extrabold text-white">somos tu aliado estratégico</span> en el mercado de bienes raíces de lujo.
          </h2>
          <SectionDivider inverse className="mt-10" />
          <div className="responsive-actions mt-10 justify-center">
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

      <section className="page-section-lg relative isolate overflow-hidden text-white">
        <img
          src={PROJECT_IMAGES.homeCta}
          alt="Comercialización inmobiliaria Luxent"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgba(82,105,130,0.80)]" />
        <Reveal className="relative z-10 mx-auto max-w-[900px] text-center">
          <h2 className="section-display-title font-heading font-extrabold tracking-[-0.05em] text-white">
            {SITE_COPY.home.ctaTitle}
          </h2>
          <p className="hero-copy mx-auto mt-6 max-w-[700px] text-white/85">{SITE_COPY.home.ctaSubtitle}</p>
          <div className="responsive-actions mt-10 justify-center">
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
