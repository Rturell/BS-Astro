import {
  defineConfig
} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import clerk from '@clerk/astro'
import {
  esUY
} from '@clerk/localizations'
import node from '@astrojs/node'

export default defineConfig({
  output: 'server',
  adapter: node({
     mode: 'standalone'
  }),
  integrations: [
    tailwind(),
    svelte(),
    clerk({
      localization: esUY,
    }),
  ],
})
