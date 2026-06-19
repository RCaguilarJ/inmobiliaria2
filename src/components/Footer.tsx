import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../data';
import type { PagePath } from '../types';
import CountryClubLogo from './CountryClubLogo';

interface FooterProps {
  activePath: PagePath;
  onNavigate: (path: PagePath) => void;
}

export default function Footer({ activePath, onNavigate }: FooterProps) {
  return (
    <footer className="dark-panel mt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div className="space-y-5">
          <CountryClubLogo variant="dark" className="w-[220px]" />
          <p className="max-w-sm text-sm leading-relaxed text-white/72">
            Residencias exclusivas frente al Country Club de Guadalajara. Comercialización y atención respaldadas por Luxent Properties.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Enlaces rápidos</h4>
          <div className="flex flex-col gap-2 text-sm text-white/75">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`text-left ${activePath === item.path ? 'text-white' : 'hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Contacto</h4>
          <div className="space-y-3 text-sm leading-relaxed text-white/75">
            <a href={CONTACT_INFO.phoneHref} className="flex items-start gap-3 hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>{CONTACT_INFO.address}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Conecta</h4>
          <div className="space-y-3 text-sm text-white/75">
            <a
              href={CONTACT_INFO.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <Globe className="h-4 w-4 text-[var(--color-accent)]" />
              <span>condominioscountryclub.com</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[var(--color-accent)]" />
              <span>WhatsApp comercial</span>
            </a>
            <p className="text-white/62">{CONTACT_INFO.officeHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-xs text-white/45">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Condominios Country Club. Todos los derechos reservados.</p>
          <p>Material comercial basado en brochure y assets proporcionados por el cliente.</p>
        </div>
      </div>
    </footer>
  );
}
