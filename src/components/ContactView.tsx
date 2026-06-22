import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_CARDS, PROJECT_IMAGES, SITE_COPY } from '../data';
import ContactForm from './ContactForm';
import PageHero from './PageHero';
import Reveal from './Reveal';

const icons = [Phone, Mail, MapPin, Clock3];

export default function ContactView() {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.contactHero}
        eyebrow={SITE_COPY.contact.eyebrow}
        title={SITE_COPY.contact.title}
        subtitle={SITE_COPY.contact.subtitle}
        titleClassName="max-w-[760px] text-5xl leading-[0.95] sm:text-6xl lg:text-[4.4rem]"
      />

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="editorial-kicker text-[var(--color-copy)]/70">INFORMACIÓN DE CONTACTO</p>
            <h2 className="mt-4 font-heading text-[2.9rem] font-extrabold tracking-[-0.05em] text-[var(--color-heading)] sm:text-[4.2rem]">
              ESTAMOS AQUÍ PARA TI
            </h2>
            <p className="mt-6 max-w-[590px] text-base leading-8 text-[var(--color-copy)]">{SITE_COPY.contact.intro}</p>

            <div className="mt-10 space-y-7">
              {CONTACT_CARDS.map((card, index) => {
                const Icon = icons[index];
                const content = (
                  <>
                    <div className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-accent-strong)]">
                      <Icon className="h-[1.15rem] w-[1.15rem]" />
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[var(--color-copy)]/82">
                        {card.title}
                      </p>
                      <p className="mt-2 text-[1.2rem] font-bold leading-[1.2] tracking-[-0.025em] text-[var(--color-heading)] sm:text-[1.45rem] lg:text-[1.62rem]">
                        {card.value}
                      </p>
                      <p className="mt-1 text-[0.94rem] leading-6 text-[var(--color-copy)]/82">{card.caption}</p>
                    </div>
                  </>
                );

                if (card.href) {
                  return (
                    <a key={card.title} href={card.href} className="flex items-start gap-5">
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={card.title} className="flex items-start gap-5">
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-24">
        <img
          src={PROJECT_IMAGES.officeBanner}
          alt="Oficinas Luxent"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/28" />
        <Reveal className="relative z-10 mx-auto flex max-w-[1240px] justify-center">
          <div className="bg-white px-10 py-8 text-center shadow-[0_24px_70px_rgba(24,38,60,0.16)]">
            <p className="editorial-kicker text-[var(--color-copy)]/72">NUESTRAS OFICINAS</p>
            <h2 className="mt-4 font-heading text-[2rem] font-extrabold tracking-[-0.03em] text-[var(--color-heading)] sm:text-[2.5rem]">
              COUNTRY CLUB, GUADALAJARA, JALISCO
            </h2>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
