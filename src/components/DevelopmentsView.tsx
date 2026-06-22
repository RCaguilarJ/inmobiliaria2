import { useMemo, useState } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import {
  DEVELOPMENT_FILTERS,
  DEVELOPMENT_PROJECTS,
  PROJECT_IMAGES,
  SITE_COPY,
} from '../data';
import PageHero from './PageHero';
import Reveal from './Reveal';

export default function DevelopmentsView() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return DEVELOPMENT_PROJECTS;
    }

    return DEVELOPMENT_PROJECTS.filter((project) => {
      const haystack = `${project.category} ${project.status}`.toLowerCase();
      return haystack.includes(activeFilter.toLowerCase());
    });
  }, [activeFilter]);

  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.developmentsHero}
        eyebrow={SITE_COPY.developments.eyebrow}
        title={SITE_COPY.developments.title}
        subtitle={SITE_COPY.developments.subtitle}
        titleClassName="max-w-[740px] text-5xl leading-[0.95] sm:text-6xl lg:text-[4.2rem]"
      />

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="text-center">
            <h2 className="font-heading text-[2.9rem] font-extrabold tracking-[-0.05em] text-[var(--color-heading)] sm:text-[4.2rem]">
              DESARROLLOS DESTACADOS
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
                  className={`rounded-[8px] border px-4 py-2 text-sm font-semibold ${
                    active
                      ? 'border-[var(--color-accent-strong)] bg-[var(--color-accent-strong)] text-white'
                      : 'border-[var(--color-line)] bg-white text-[var(--color-copy)]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.05}>
                <article className="overflow-hidden rounded-[16px] border border-[var(--color-line)] bg-white shadow-[0_20px_50px_rgba(29,45,67,0.08)]">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="aspect-[1.32] h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-[rgba(111,131,154,0.88)] px-3 py-1 text-[11px] font-extrabold text-white">
                      {project.status}
                    </span>
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="font-heading text-[1.95rem] font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-copy)]">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </p>
                    <p className="mt-4 text-sm font-extrabold text-[var(--color-accent-strong)]">{project.category}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{project.description}</p>
                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--color-navy)]"
                    >
                      Ver proyecto
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
