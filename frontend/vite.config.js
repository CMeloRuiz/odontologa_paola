import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // rutas relativas: el build funciona en cualquier subcarpeta de hosting
  build: { outDir: 'dist', assetsInlineLimit: 2048 },
});
