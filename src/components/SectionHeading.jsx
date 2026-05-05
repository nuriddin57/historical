function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center';
  const copyWidth = align === 'left' ? 'mr-auto' : 'mx-auto';

  return (
    <div className={alignment}>
      <p className="theme-accent text-xs font-semibold uppercase tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="theme-text mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h2>
      <p className={`theme-muted mt-5 max-w-2xl text-base leading-7 ${copyWidth}`}>
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
