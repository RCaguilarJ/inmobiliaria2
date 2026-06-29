import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Building2,
  CalendarRange,
  CheckCircle2,
  LayoutGrid,
  MapPin,
  Sparkles,
  X,
} from 'lucide-react';
import {
  DEVELOPMENT_FILTERS,
  DEVELOPMENT_PROJECTS,
  PROJECT_IMAGES,
  SITE_COPY,
} from '../data';
import type { DevelopmentProject } from '../types';
import PageHero from './PageHero';
import Reveal from './Reveal';

function ProjectDetailSheet({
  project,
  onClose,
}: {
  project: DevelopmentProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] bg-[rgba(12,20,32,0.56)] backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.aside
        initial={{ x: 96, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 96, opacity: 0 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 right-0 z-[71] w-full max-w-[920px] overflow-y-auto bg-[#f3f6fa] shadow-[-32px_0_80px_rgba(16,24,39,0.24)]"
      >
        <div className="relative">
          <div className="relative h-[320px] overflow-hidden sm:h-[380px]">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,27,40,0.08)] via-[rgba(17,27,40,0.16)] to-[rgba(17,27,40,0.74)]" />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/18 text-white backdrop-blur-md transition hover:bg-black/28"
              aria-label="Cerrar detalle"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-white/14 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                  {project.category}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/14 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                  {project.status}
                </span>
              </div>

              <h3 className="detail-sheet-title font-heading font-extrabold tracking-[-0.05em] text-white">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="space-y-6 px-5 py-6 sm:px-7 sm:py-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_44px_rgba(18,31,53,0.08)]">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                  Ubicación
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--color-surface-soft)] text-[var(--color-accent-strong)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-[var(--color-heading)]">
                    {project.location}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_44px_rgba(18,31,53,0.08)]">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                  Estatus
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--color-surface-soft)] text-[var(--color-accent-strong)]">
                    <CalendarRange className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-[var(--color-heading)]">
                    {project.status}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_44px_rgba(18,31,53,0.08)]">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                  Tipología
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--color-surface-soft)] text-[var(--color-accent-strong)]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-[var(--color-heading)]">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>

            {project.overview?.length ? (
              <section className="rounded-[28px] bg-white p-6 shadow-[0_20px_48px_rgba(18,31,53,0.08)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--color-surface-soft)] text-[var(--color-accent-strong)]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                      Visión general
                    </p>
                    <h4 className="mt-1 font-heading text-[1.7rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)]">
                      Una lectura rápida del proyecto
                    </h4>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {project.overview.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-8 text-[var(--color-copy)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              {project.idealFor?.length ? (
                <section className="rounded-[28px] bg-white p-6 shadow-[0_20px_48px_rgba(18,31,53,0.08)] sm:p-7">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                    Ideal para
                  </p>
                  <h4 className="mt-2 font-heading text-[1.7rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)]">
                    Perfil de cliente
                  </h4>

                  <div className="mt-6 grid gap-3">
                    {project.idealFor.map((item) => (
                      <div
                        key={item}
                        className="rounded-[20px] border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-4"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent-strong)]" />
                          <p className="text-sm leading-7 text-[var(--color-copy)]">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="space-y-6">
                {project.composition?.length ? (
                  <section className="rounded-[28px] bg-white p-6 shadow-[0_20px_48px_rgba(18,31,53,0.08)] sm:p-7">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-[var(--color-surface-soft)] text-[var(--color-accent-strong)]">
                        <LayoutGrid className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                          Composición del desarrollo
                        </p>
                        <h4 className="mt-1 font-heading text-[1.4rem] font-extrabold tracking-[-0.04em] text-[var(--color-heading)]">
                          Estructura del proyecto
                        </h4>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {project.composition.map((item) => (
                        <li
                          key={item}
                          className="rounded-[18px] bg-[var(--color-surface)] px-4 py-4 text-sm leading-7 text-[var(--color-copy)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {project.deliveries?.length ? (
                  <section className="rounded-[28px] bg-[var(--color-navy)] p-6 text-white shadow-[0_24px_54px_rgba(18,31,53,0.24)] sm:p-7">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                      Entregas
                    </p>
                    <h4 className="mt-2 font-heading text-[1.4rem] font-extrabold tracking-[-0.04em] text-white">
                      Fechas y disponibilidad
                    </h4>
                    <div className="mt-5 space-y-3">
                      {project.deliveries.map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-7 text-white/84"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            </div>

            {project.closing ? (
              <section className="rounded-[28px] border border-[var(--color-line)] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(18,31,53,0.06)] sm:px-7">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-copy)]/72">
                  Cierre comercial
                </p>
                <p className="mt-3 text-[15px] leading-8 text-[var(--color-copy)]">
                  {project.closing}
                </p>
              </section>
            ) : null}
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}

export default function DevelopmentsView() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<DevelopmentProject | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = selectedProject ? 'hidden' : '';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const projects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return DEVELOPMENT_PROJECTS;
    }

    return DEVELOPMENT_PROJECTS.filter((project) => project.filters?.includes(activeFilter));
  }, [activeFilter]);

  const openProject = (project: DevelopmentProject) => {
    if (project.detailReady) {
      setSelectedProject(project);
    }
  };

  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.developmentsHero}
        eyebrow={SITE_COPY.developments.eyebrow}
        title={SITE_COPY.developments.title}
        subtitle={SITE_COPY.developments.subtitle}
        titleClassName="max-w-[740px]"
      />

      <section className="page-section bg-white">
        <div className="page-container">
          <Reveal className="text-center">
            <h2 className="section-display-title font-heading font-extrabold tracking-[-0.05em] text-[var(--color-heading)]">
              PORTAFOLIO DE DESARROLLOS
            </h2>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap justify-center gap-3" delay={0.08} y={18}>
            {DEVELOPMENT_FILTERS.map((filter) => {
              const active = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? 'border-[var(--color-accent-strong)] bg-[var(--color-accent-strong)] text-white'
                      : 'border-[var(--color-line)] bg-white text-[var(--color-copy)] hover:border-[var(--color-accent)]/30'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.05}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-white shadow-[0_20px_50px_rgba(29,45,67,0.08)] transition-transform duration-300 ${
                    project.detailReady ? 'cursor-pointer hover:-translate-y-1' : ''
                  }`}
                  onClick={() => openProject(project)}
                  onKeyDown={(event) => {
                    if ((event.key === 'Enter' || event.key === ' ') && project.detailReady) {
                      event.preventDefault();
                      openProject(project);
                    }
                  }}
                  role={project.detailReady ? 'button' : undefined}
                  tabIndex={project.detailReady ? 0 : undefined}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="aspect-[1.32] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,24,39,0.52)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute right-4 top-4 rounded-full bg-[rgba(111,131,154,0.92)] px-3 py-1 text-[11px] font-extrabold text-white">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                    <div>
                      <h3 className="card-display-title font-heading font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
                        {project.name}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-copy)]">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--color-surface-soft)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[var(--color-accent-strong)]">
                        {project.category}
                      </span>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--color-navy)]">
                      Ver proyecto
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectDetailSheet
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
