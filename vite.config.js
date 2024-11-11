import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Установите нужный порт
  },
  resolve: {
    alias: {
      '@': '/src', // Добавьте алиасы, если необходимо
    },
  },
});
