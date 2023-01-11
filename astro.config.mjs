import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
    ],
    server: (command) => ({port: command === 'preview' ? 3000 : 4000}),
});
