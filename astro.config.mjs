import {
  defineConfig
} from 'astro/config'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import clerk from '@clerk/astro'
import {
  esUY
} from '@clerk/localizations'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    clerk({
      localization: esUY,
    }),
  ],
})

