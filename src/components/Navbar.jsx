import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';

function Navbar({
  brand,
  isDark,
  language,
  languageLabel,
  languages,
  links,
  menuToggleLabel,
  onLanguageChange,
  onToggleTheme,
  themeToggleLabel,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
    >
      <div
        className={`section-shell rounded-full border px-4 py-3 transition sm:px-6 ${
          isScrolled ? 'glass-panel theme-border' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="theme-text font-display text-lg font-bold tracking-[0.18em]"
          >
            {brand}
          </a>

          <nav className="theme-muted hidden items-center gap-8 text-sm lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="lang-switcher" aria-label={languageLabel} role="group">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLanguageChange(item.code)}
                  className={`lang-btn ${
                    language === item.code ? 'lang-btn-active' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-border theme-surface theme-text inline-flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105"
              aria-label={themeToggleLabel}
            >
              {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="theme-border theme-surface theme-text inline-flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105 lg:hidden"
              aria-label={menuToggleLabel}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="theme-border section-shell mt-3 rounded-[28px] border p-4 shadow-glow backdrop-blur-xl lg:hidden"
            style={{ background: 'var(--panel-strong)' }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link theme-muted rounded-2xl px-4 py-3"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
