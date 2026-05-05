import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function FeatureCard({ feature }) {
  const { accent, description, icon: Icon, title } = feature;

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group glass-panel relative overflow-hidden rounded-[30px] p-6"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition duration-500 group-hover:opacity-100`}
      />
      <div className="relative">
        <span className="theme-border theme-surface inline-flex rounded-2xl border p-3 theme-accent">
          <Icon size={24} />
        </span>
        <h3 className="theme-text mt-6 font-display text-2xl font-bold">
          {title}
        </h3>
        <p className="theme-muted mt-4 text-base leading-7">{description}</p>
      </div>
    </motion.article>
  );
}

export default FeatureCard;
