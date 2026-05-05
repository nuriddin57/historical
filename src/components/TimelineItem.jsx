import { motion } from 'framer-motion';

function TimelineItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass-panel relative rounded-[30px] p-6 lg:p-7"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="theme-border theme-surface theme-text flex h-12 w-12 items-center justify-center rounded-full border font-display text-lg font-bold">
          {item.step}
        </span>
        <div>
          <p className="theme-muted text-xs uppercase tracking-[0.28em]">
            {item.eyebrow}
          </p>
          <h3 className="theme-text mt-1 font-display text-2xl font-bold">
            {item.title}
          </h3>
        </div>
      </div>
      <p className="theme-muted text-base leading-7">{item.description}</p>
    </motion.article>
  );
}

export default TimelineItem;
