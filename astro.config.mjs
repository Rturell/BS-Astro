import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import clerk from '@clerk/astro'
import node from '@astrojs/node'
import {
  esUY
} from '@clerk/localizations'

export default defineConfig({
  integrations: [tailwind(), svelte(), clerk({
    localization: esUY,
  })],
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
});