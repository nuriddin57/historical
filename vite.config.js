import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // The published ESM entry is missing in the current framer-motion package,
    // so Vite resolves against the working CommonJS bundle instead.
    alias: {
      'framer-motion': fileURLToPath(
        new URL('./node_modules/framer-motion/dist/cjs/index.js', import.meta.url),
      ),
    },
  },
});
