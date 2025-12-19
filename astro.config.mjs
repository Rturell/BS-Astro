import {
  defineConfig
} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import clerk from '@clerk/astro'
import {
  esUY
} from '@clerk/localizations'
import netlify from '@astrojs/netlify'


export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    tailwind(),
    svelte(),
    clerk({
      localization: esUY,
    }),
  ],
})
