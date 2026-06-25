import { BarChart3, Cpu, Megaphone, MonitorSmartphone, ShieldCheck, Users } from 'lucide-react';
import { DIFFERENTIATORS, OBJECTIVE_CARDS, PROJECT_IMAGES, SITE_COPY } from '../data';
import PageHero from './PageHero';
import Reveal from './Reveal';

const objectiveIcons = [BarChart3, Cpu, Megaphone];
const differentiatorIcons = [ShieldCheck, MonitorSmartphone, Megaphone, Cpu, Users, BarChart3];

export default function NosotrosView() {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.aboutHero}
        eyebrow={SITE_COPY.about.eyebrow}
        title={SITE_COPY.about.title}
        subtitle={SITE_COPY.about.subtitle}
      />

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal className="overflow-hidden rounded-[10px] shadow-[0_28px_64px_rgba(26,40,61,0.12)]">
            <img
              src={PROJECT_IMAGES.aboutFeature}
              alt="Interior comercializado por Luxent"
              className="aspect-[1.25] h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-heading text-[2.8rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
              QUIÉNES SOMOS
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-copy)]">
              {SITE_COPY.about.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <h2 className="font-heading text-[2.7rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)] sm:text-[3.9rem]">
              NUESTRO OBJETIVO
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-copy)]">
              {SITE_COPY.about.objective}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {OBJECTIVE_CARDS.map((card, index) => {
              const Icon = objectiveIcons[index];

              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="card-shell h-full px-5 py-6 sm:px-7 sm:py-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-[var(--color-accent-strong)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-[1.45rem] font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
                      {card.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="text-center">
            <h2 className="font-heading text-[2.7rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)] sm:text-[3.9rem]">
              QUÉ NOS DIFERENCIA
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {DIFFERENTIATORS.map((card, index) => {
              const Icon = differentiatorIcons[index];

              return (
                <Reveal key={card.title} delay={index * 0.06}>
                  <article className="card-shell h-full px-5 py-6 sm:px-7 sm:py-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-[var(--color-accent-strong)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-[1.5rem] font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
                      {card.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <Reveal>
            <h2 className="font-heading text-[2.7rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-[var(--color-heading)] sm:text-[4rem]">
              INFRAESTRUCTURA
              <br />
              QUE GENERA
              <br />
              CONFIANZA
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[8px] sm:col-span-2">
              <img
                src={PROJECT_IMAGES.galleryWide}
                alt="Terraza con vista al Country Club"
                className="aspect-[1.66] h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img
                src={PROJECT_IMAGES.gallerySmallA}
                alt="Interior residencial de lujo"
                className="aspect-[1.05] h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="overflow-hidden rounded-[8px]">
              <img
                src={PROJECT_IMAGES.gallerySmallB}
                alt="Lobby Luxent"
                className="aspect-[1.05] h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
