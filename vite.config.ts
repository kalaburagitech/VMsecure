import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'bg.jpg', 'gate.jpg', 'compound.jpg', 'patrol.jpg', 'command.jpg'],
      manifest: {
        name: 'VM Square Security',
        short_name: 'VM Square',
        description: 'Elite Security Management & Operations',
        theme_color: '#0A0F1C',
        background_color: '#0A0F1C',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
})
