import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        properties: 'properties.html',
        contact: 'contact.html',
        notFound: '404.html',
      },
    },
  },
});
