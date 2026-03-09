import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Importamos el nuevo adaptador

// https://astro.build/config
export default defineConfig({
  output: "server", // Mantenemos el modo servidor para SSR
  adapter: vercel()  // Cambiamos el adaptador a Vercel
});