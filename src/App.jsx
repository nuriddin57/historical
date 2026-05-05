import { startTransition, useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, BookOpen, Compass, MapPinned, ScrollText } from 'lucide-react';
import FeatureCard from './components/FeatureCard';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import TimelineItem from './components/TimelineItem';
import { contentByLanguage, languages } from './data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

function App() {
  const [theme, setTheme] = useState('theme-dark');
  const [language, setLanguage] = useState('uz');
  const [activeGallery, setActiveGallery] = useState('samarkand');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const isDark = theme === 'theme-dark';
  const content = contentByLanguage[language] ?? contentByLanguage.uz;
  const {
    aboutPoints,
    aboutSection,
    aboutStats,
    archiveNotes,
    archiveSection,
    features,
    featuresSection,
    finalSection,
    hero,
    heroHighlights,
    heroStats,
    landmarkItems,
    landmarksPanel,
    navLinks,
    placesSection,
    routeStops,
    showcaseItems,
    siteMeta,
    symbolItems,
    symbolsSection,
    timeline,
    journeySection,
  } = content;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = siteMeta.documentTitle;
  }, [language, siteMeta.documentTitle]);

  const activeShowcase =
    showcaseItems.find((item) => item.id === activeGallery) ?? showcaseItems[0];

  return (
    <div className={`app-shell ${theme}`}>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-[#4f7a72] via-[#c79a55] to-[#efe0bb]"
        style={{ scaleX }}
      />

      <div aria-hidden="true" className="noise-layer" />

      <Navbar
        brand={siteMeta.brand}
        isDark={isDark}
        language={language}
        languageLabel={siteMeta.languageLabel}
        languages={languages}
        links={navLinks}
        menuToggleLabel={siteMeta.menuToggleLabel}
        onLanguageChange={(nextLanguage) =>
          startTransition(() => setLanguage(nextLanguage))
        }
        onToggleTheme={() => setTheme(isDark ? 'theme-light' : 'theme-dark')}
        themeToggleLabel={siteMeta.themeToggleLabel}
      />

      <main className="overflow-hidden">
        <section
          id="home"
          className="relative flex min-h-screen items-center scroll-mt-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'var(--hero-overlay)' }}
          />

          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="orb orb-sky left-[8%] top-28" />
            <div className="orb orb-violet right-[4%] top-[24%]" />
            <div className="orb orb-gold bottom-[18%] right-[24%]" />
          </div>

          <div className="section-shell relative grid gap-14 px-6 py-24 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.span
                custom={0.05}
                variants={fadeUp}
                className="theme-border theme-surface theme-muted inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-xl"
              >
                <ScrollText size={14} className="theme-accent" />
                {hero.eyebrow}
              </motion.span>

              <motion.h1
                custom={0.12}
                variants={fadeUp}
                className="theme-text mt-8 font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl"
              >
                {hero.titleLead}{' '}
                <span className="text-gradient">{hero.titleAccent}</span>{' '}
                {hero.titleTail}
              </motion.h1>

              <motion.p
                custom={0.2}
                variants={fadeUp}
                className="theme-muted mt-6 max-w-2xl text-lg leading-8 sm:text-xl"
              >
                {hero.description}
              </motion.p>

              <motion.div
                custom={0.28}
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a
                  href="#journey"
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-soft transition-transform ${
                    isDark
                      ? 'bg-amber-100 text-stone-950 hover:bg-amber-50'
                      : 'bg-stone-950 text-stone-50 hover:bg-stone-800'
                  }`}
                >
                  {hero.primaryCta}
                  <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  href="#showcase"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="theme-border theme-surface theme-text inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 font-semibold backdrop-blur-xl"
                >
                  <Compass size={16} className="theme-accent" />
                  {hero.secondaryCta}
                </motion.a>
              </motion.div>

              <motion.div
                custom={0.36}
                variants={fadeUp}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {heroStats.map((stat) => (
                  <div key={stat.label} className="glass-panel rounded-3xl p-5">
                    <p className="theme-text font-display text-3xl font-bold">
                      {stat.value}
                    </p>
                    <p className="theme-muted mt-2 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[620px]"
            >
              <div className="glass-panel theme-border relative overflow-hidden rounded-[34px] border p-5 shadow-glow">
                <div className="map-panel">
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="compass-ring"
                  />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="theme-muted text-xs uppercase tracking-[0.28em]">
                        {hero.panelEyebrow}
                      </p>
                      <h3 className="theme-text mt-4 max-w-xl font-display text-3xl font-bold leading-tight">
                        {hero.panelTitle}
                      </h3>
                    </div>
                    <span className="theme-border theme-surface theme-text inline-flex self-start rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                      {hero.periodChip}
                    </span>
                  </div>

                  <p className="theme-muted mt-4 max-w-2xl text-sm leading-7">
                    {hero.panelDescription}
                  </p>

                  <div className="route-track mt-8">
                    {routeStops.map((stop, index) => (
                      <motion.div
                        key={stop.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.25 + index * 0.08 }}
                        whileHover={{ y: -6 }}
                        className="route-node"
                      >
                        <span className="route-index">{index + 1}</span>
                        <p className="route-label">{stop.label}</p>
                        <p className="theme-text mt-3 font-display text-2xl font-bold">
                          {stop.name}
                        </p>
                        <p className="route-note">{stop.note}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {heroHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -6 }}
                        className="heritage-note"
                      >
                        <span className="theme-border theme-surface inline-flex rounded-2xl border p-3 theme-accent">
                          <Icon size={20} />
                        </span>
                        <p className="theme-text mt-4 font-display text-xl font-bold">
                          {item.title}
                        </p>
                        <p className="theme-muted mt-3 text-sm leading-6">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel absolute -left-6 top-12 hidden max-w-[220px] rounded-[26px] p-5 lg:block"
              >
                <p className="theme-muted text-xs uppercase tracking-[0.28em]">
                  {hero.floatingPeriod.eyebrow}
                </p>
                <p className="theme-text mt-3 font-display text-4xl font-bold">
                  {hero.floatingPeriod.value}
                </p>
                <p className="theme-muted mt-2 text-sm leading-6">
                  {hero.floatingPeriod.description}
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel absolute -bottom-8 right-0 hidden max-w-[260px] rounded-[26px] p-5 md:block"
              >
                <p className="theme-muted text-xs uppercase tracking-[0.28em]">
                  {hero.floatingAnchors.eyebrow}
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="h-2 flex-1 rounded-full bg-[#4f7a72]" />
                  <span className="h-2 flex-1 rounded-full bg-[#c79a55]" />
                  <span className="h-2 flex-1 rounded-full bg-[#efe0bb]" />
                </div>
                <p className="theme-muted mt-4 text-sm leading-6">
                  {hero.floatingAnchors.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section
          id="features"
          className="relative scroll-mt-24 px-6 py-24 sm:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow={featuresSection.eyebrow}
              title={featuresSection.title}
              description={featuresSection.description}
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="relative scroll-mt-24 px-6 py-24 sm:py-28"
        >
          <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-panel overflow-hidden rounded-[34px] p-5">
                <div className="archive-frame p-6 sm:p-8">
                  <div className="archive-strip">
                    <span>{archiveSection.ribbonLeft}</span>
                    <span>{archiveSection.archiveLabel}</span>
                  </div>

                  <p className="theme-muted mt-10 text-sm uppercase tracking-[0.3em]">
                    {archiveSection.archiveEyebrow}
                  </p>
                  <blockquote className="theme-text mt-4 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
                    {archiveSection.archiveQuote}
                  </blockquote>

                  <div className="mt-10 grid gap-4">
                    {archiveNotes.map((note) => (
                      <div key={note.title} className="paper-line">
                        <p className="theme-accent text-xs uppercase tracking-[0.28em]">
                          {note.title}
                        </p>
                        <p className="theme-muted mt-3 text-sm leading-7">
                          {note.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-panel absolute bottom-8 left-6 max-w-[260px] rounded-[24px] p-5 shadow-glow">
                <p className="theme-muted text-xs uppercase tracking-[0.28em]">
                  {archiveSection.focusEyebrow}
                </p>
                <p className="theme-text mt-2 font-display text-3xl font-bold">
                  {archiveSection.focusTitle}
                </p>
                <p className="theme-muted mt-2 text-sm leading-6">
                  {archiveSection.focusDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeading
                align="left"
                eyebrow={aboutSection.eyebrow}
                title={aboutSection.title}
                description={aboutSection.description}
              />

              <div className="mt-10 grid gap-4">
                {aboutPoints.map((point) => (
                  <motion.div
                    key={point}
                    whileHover={{ x: 6 }}
                    className="glass-panel flex items-start gap-4 rounded-[26px] p-5"
                  >
                    <span className="mt-1 rounded-full bg-[#4f7a72]/15 p-2 text-[#d8c18f]">
                      <BookOpen size={18} />
                    </span>
                    <p className="theme-muted text-base leading-7">{point}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {aboutStats.map((item) => (
                  <div key={item.label} className="glass-panel rounded-[26px] p-5">
                    <p className="theme-muted text-xs uppercase tracking-[0.26em]">
                      {item.label}
                    </p>
                    <p className="theme-text mt-2 font-display text-3xl font-bold">
                      {item.value}
                    </p>
                    <p className="theme-muted mt-2 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="symbols"
          className="relative scroll-mt-24 px-6 py-24 sm:py-28"
        >
          <div className="section-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow={symbolsSection.eyebrow}
                title={symbolsSection.title}
                description={symbolsSection.description}
              />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-10 grid gap-4 sm:grid-cols-2"
              >
                {symbolItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.id}
                      variants={fadeUp}
                      whileHover={{ y: -8, rotate: -0.4 }}
                      className="symbol-card"
                    >
                      <div className="symbol-card-glow" />
                      <div className="relative">
                        <span className="theme-border theme-surface inline-flex rounded-2xl border p-3 theme-accent">
                          <Icon size={22} />
                        </span>
                        <p className="theme-accent mt-5 text-xs uppercase tracking-[0.28em]">
                          {item.subtitle}
                        </p>
                        <h3 className="theme-text mt-3 font-display text-2xl font-bold">
                          {item.title}
                        </h3>
                        <p className="theme-muted mt-3 text-sm leading-7">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel overflow-hidden rounded-[32px] p-6 sm:p-7"
            >
              <div className="landmark-shell">
                <p className="theme-accent text-xs uppercase tracking-[0.28em]">
                  {landmarksPanel.eyebrow}
                </p>
                <h3 className="theme-text mt-4 font-display text-3xl font-bold">
                  {landmarksPanel.title}
                </h3>
                <p className="theme-muted mt-4 text-sm leading-7">
                  {landmarksPanel.description}
                </p>

                <div className="landmark-stack mt-8">
                  {landmarkItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.55,
                          delay: index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ x: 6 }}
                        className="landmark-card"
                      >
                        <span className="landmark-icon">
                          <Icon size={18} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <p className="theme-text font-display text-xl font-bold">
                              {item.name}
                            </p>
                            <span className="landmark-city">{item.city}</span>
                          </div>
                          <p className="theme-muted mt-3 text-sm leading-6">
                            {item.note}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="showcase"
          className="relative scroll-mt-24 px-6 py-24 sm:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow={placesSection.eyebrow}
              title={placesSection.title}
              description={placesSection.description}
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {showcaseItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveGallery(item.id)}
                  onMouseEnter={() => setActiveGallery(item.id)}
                  onFocus={() => setActiveGallery(item.id)}
                  className={`theme-border rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
                    activeGallery === item.id
                      ? 'theme-surface theme-text'
                      : 'theme-muted bg-transparent'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="glass-panel mt-8 overflow-hidden rounded-[30px] p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcase.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className="theme-accent text-xs uppercase tracking-[0.28em]">
                    {activeShowcase.period}
                  </p>
                  <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                      <h3 className="theme-text font-display text-3xl font-bold">
                        {activeShowcase.title}
                      </h3>
                      <p className="theme-muted mt-3 text-base leading-7">
                        {activeShowcase.detail}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeShowcase.facts.map((fact) => (
                        <span
                          key={fact}
                          className="theme-border theme-surface theme-text rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em]"
                        >
                          {fact}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-4"
            >
              {showcaseItems.map((item) => (
                <motion.article
                  key={item.id}
                  variants={fadeUp}
                  onMouseEnter={() => setActiveGallery(item.id)}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`city-card group relative overflow-hidden rounded-[30px] ${item.layout}`}
                  style={{ background: item.palette }}
                >
                  <div className="city-card-pattern absolute inset-0" />

                  <div className="theme-border absolute inset-0 border" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                      <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.26em] text-white/80 backdrop-blur-md">
                        {item.category}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/75">{item.period}</p>
                      <p className="mt-2 max-w-md text-sm leading-6 text-white/72 opacity-0 transition duration-500 group-hover:opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="journey"
          className="relative scroll-mt-24 px-6 py-24 sm:py-28"
        >
          <div className="section-shell">
            <SectionHeading
              eyebrow={journeySection.eyebrow}
              title={journeySection.title}
              description={journeySection.description}
            />

            <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#4f7a72]/0 via-white/20 to-[#c79a55]/0 lg:left-1/2 lg:block lg:-translate-x-1/2" />
              {timeline.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel overflow-hidden rounded-[36px] px-7 py-10 sm:px-10 sm:py-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f7a72]/12 via-[#c79a55]/8 to-[#efe0bb]/12" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="theme-muted text-xs uppercase tracking-[0.28em]">
                    {finalSection.eyebrow}
                  </p>
                  <h2 className="theme-text mt-4 font-display text-3xl font-bold sm:text-4xl">
                    {finalSection.title}
                  </h2>
                  <p className="theme-muted mt-4 text-base leading-7">
                    {finalSection.description}
                  </p>
                </div>

                <motion.a
                  href="#home"
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-soft ${
                    isDark
                      ? 'bg-amber-100 text-stone-950 hover:bg-amber-50'
                      : 'bg-stone-950 text-stone-50 hover:bg-stone-800'
                  }`}
                >
                  {finalSection.button}
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="theme-border theme-muted border-t px-6 py-10"
      >
        <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="theme-text font-display text-xl font-bold">
              {siteMeta.brand}
            </p>
            <p className="mt-2 text-sm">{siteMeta.footerText}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
