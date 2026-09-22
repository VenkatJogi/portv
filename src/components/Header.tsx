import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Awards', href: '#achievements' },
  { name: 'Community', href: '#community' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 md:px-6 pt-3">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto max-w-[1320px] rounded-2xl border px-4 md:px-5 transition-all duration-300 ${
          isScrolled
            ? 'border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0b0f19]/90 shadow-[0_12px_45px_rgba(15,23,42,0.14)] backdrop-blur-2xl'
            : 'border-white/50 dark:border-white/10 bg-white/55 dark:bg-[#0b0f19]/55 backdrop-blur-xl'
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToSection('#hero')} className="flex items-center gap-3 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 dark:bg-white text-sm font-black text-white dark:text-slate-950 transition-transform group-hover:rotate-[-6deg]">
              RVJ
            </span>
            <span className="hidden sm:block text-left">
              <span className="block text-sm font-black leading-none text-slate-950 dark:text-white">Venkat Jogi</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-slate-500">Technical Lead</span>
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-orange-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden grid h-10 w-10 place-items-center rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-200 dark:border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-2 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-orange-50 dark:hover:bg-orange-500/10"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
