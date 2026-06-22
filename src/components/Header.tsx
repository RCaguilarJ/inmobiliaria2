import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import type { PagePath } from '../types';
import CountryClubLogo from './CountryClubLogo';

interface HeaderProps {
  activePath: PagePath;
  onNavigate: (path: PagePath) => void;
}

export default function Header({ activePath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeHeroActive, setIsHomeHeroActive] = useState(activePath === '/');

  useEffect(() => {
    if (activePath !== '/') {
      setIsHomeHeroActive(false);
      return;
    }

    const updateHeaderMode = () => {
      const hero = document.querySelector<HTMLElement>('[data-home-hero]');

      if (!hero) {
        setIsHomeHeroActive(window.scrollY < 520);
        return;
      }

      const threshold = Math.max(0, hero.offsetHeight - 96);
      setIsHomeHeroActive(window.scrollY < threshold);
    };

    updateHeaderMode();
    window.addEventListener('scroll', updateHeaderMode, { passive: true });
    window.addEventListener('resize', updateHeaderMode);

    return () => {
      window.removeEventListener('scroll', updateHeaderMode);
      window.removeEventListener('resize', updateHeaderMode);
    };
  }, [activePath]);

  const handleNav = (path: PagePath) => {
    setIsOpen(false);
    onNavigate(path);
  };

  const useTransparentHeader = activePath === '/' && isHomeHeroActive && !isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {useTransparentHeader ? (
        <div className="bg-[rgba(35,55,85,0.8)] backdrop-blur-[12px]">
          <div className="mx-auto flex h-14 max-w-[1920px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => handleNav('/')}
              aria-label="Ir al inicio"
              className="shrink-0"
            >
              <CountryClubLogo variant="dark" className="w-[88px] sm:w-[96px]" />
            </button>

            <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`whitespace-nowrap text-[12px] font-semibold tracking-[0.01em] transition-colors ${
                      active ? 'text-white/60' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="shrink-0 rounded-[8px] bg-[#87a3b8] px-4 py-2 text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(20,31,49,0.25)] transition-colors hover:bg-[#98b3c8]"
              >
                Agendar asesoria
              </button>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-[2px] transition-colors hover:bg-white/15"
                aria-label="Abrir menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-b border-white/65 bg-white/94 backdrop-blur-xl">
          <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
            <button type="button" onClick={() => handleNav('/')} aria-label="Ir al inicio" className="shrink-0">
              <CountryClubLogo variant="light" className="w-[104px] sm:w-[118px]" />
            </button>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`text-[13px] font-semibold tracking-[0.01em] transition-colors ${
                      active
                        ? 'text-[var(--color-navy)]'
                        : 'text-[var(--color-copy)] hover:text-[var(--color-navy)]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="rounded-[10px] bg-[var(--color-accent-strong)] px-5 py-3 text-[13px] font-bold text-white shadow-[0_10px_24px_rgba(33,51,77,0.18)]"
              >
                Agendar asesoria
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line)] text-[var(--color-navy)] lg:hidden"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--color-line)] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-4">
              {NAV_ITEMS.map((item) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                      active ? 'bg-[var(--color-surface-soft)] text-[var(--color-navy)]' : 'text-[var(--color-copy)]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="mt-2 rounded-xl bg-[var(--color-accent-strong)] px-4 py-3 text-sm font-bold text-white"
              >
                Agendar asesoria
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
