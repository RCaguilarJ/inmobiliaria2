import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import type { PagePath } from '../types';
import CountryClubLogo from './CountryClubLogo';

interface HeaderProps {
  activePath: PagePath;
  onNavigate: (path: PagePath) => void;
}

export default function Header({ activePath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path: PagePath) => {
    setIsOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)]/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="flex items-center"
          aria-label="Ir al inicio"
        >
          <CountryClubLogo className="w-[170px] sm:w-[200px]" />
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activePath === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNav(item.path)}
                className={`relative text-sm font-semibold tracking-wide ${
                  isActive ? 'text-[var(--color-navy)]' : 'text-[var(--color-copy)] hover:text-[var(--color-navy)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-route"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[var(--color-accent)]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => handleNav('/contacto')}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-[var(--color-accent-deep)]"
          >
            Solicitar asesoría
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full border border-[var(--color-line)] p-2 text-[var(--color-navy)] lg:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--color-line)] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNav(item.path)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                    activePath === item.path
                      ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]'
                      : 'text-[var(--color-copy)] hover:bg-[var(--color-surface-soft)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-navy)] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                Solicitar asesoría
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
