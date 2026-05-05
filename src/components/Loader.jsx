import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#050816]"
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5.5, ease: 'linear', repeat: Infinity }}
          className="relative h-24 w-24 rounded-full border border-white/10"
        >
          <div className="absolute inset-2 rounded-full border border-dashed border-sky-300/35" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,212,250,0.25),_transparent_55%)]" />
        </motion.div>

        <div className="text-center">
          <p className="font-display text-3xl font-bold tracking-[0.16em] text-white">
            AURALUX
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.34em] text-white/50">
            Loading sensory interface
          </p>
        </div>

        <div className="flex w-40 gap-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1.1, 0.8] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.15,
                ease: 'easeInOut',
              }}
              className="h-2 flex-1 rounded-full bg-gradient-to-r from-sky-300 via-violet-300 to-amber-300"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
