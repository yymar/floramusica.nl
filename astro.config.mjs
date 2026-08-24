// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://floramusica.nl',
  output: 'static',
  integrations: [sitemap()],

  // Vastgezet omdat er meer projecten naast elkaar draaien op deze machine en
  // een dev-server die stilletjes doorschuift naar de volgende vrije poort een
  // vervelend soort verwarring oplevert: de app komt gewoon op, alleen op een
  // adres dat je niet verwacht. Liever weigeren te starten. Zie de poorttabel
  // in HANDOVER.md van `yoim`.
  server: { port: 4321 },

  vite: {
    plugins: [tailwindcss()],
    server: { strictPort: true },
  },
});
