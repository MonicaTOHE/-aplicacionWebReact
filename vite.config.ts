import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/-aplicacionWebReact/', // Asegúrate de que este nombre coincide con el repositorio de GitHub
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
});
