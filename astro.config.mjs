import {
  defineConfig
} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import clerk from '@clerk/astro'

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    svelte(),
    clerk({
      localization: 'es-ES',
    }),
  ],
})
