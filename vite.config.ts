import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/aplicacionWebReact/' : '/', // Solo aplicar en producción
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
}));
