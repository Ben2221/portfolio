import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-brevo': {
        target: 'https://api.brevo.com/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-brevo/, '')
      }
    }
  }
})
