import { defineConfig } from 'vite'
import inertia from '@adonisjs/inertia/client'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [inertia({ ssr: { enabled: false } }), react(), adonisjs({ entrypoints: ['resources/app.tsx'], reload: ['resources/views/**/*.edge'] })],
})
