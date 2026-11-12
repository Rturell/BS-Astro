


import {
  defineConfig
} from 'astro/config'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import clerk from '@clerk/astro'
import {
  esUY
} from '@clerk/localizations'

export default defineConfig({
  site: 'https://blacksmoke.com.uy',
  output: 'server',
  adapter: vercel(),
  image: {
    domains: ['i.ibb.co'],
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/mapa'),
    }),
    clerk({
      localization: esUY,
    }),
  ],
})

