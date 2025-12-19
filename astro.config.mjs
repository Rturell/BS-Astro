import {
  defineConfig
} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import clerk from '@clerk/astro'
import {
  esUY
} from '@clerk/localizations'

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    svelte(),
    clerk({
      localization: esUY,
    }),
  ],
})
