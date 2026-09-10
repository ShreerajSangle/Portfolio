import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Base path: GitHub Pages project sites serve from /<repo-name>/, Vercel serves from /.
// Set VITE_BASE_PATH=/<repo-name>/ in the GH Pages workflow; defaults to / for Vercel/local.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
