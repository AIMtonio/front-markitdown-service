import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En desarrollo (npm run dev) /api se redirige al back local en el puerto 8000.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://backmd.antonioalonso.com.mx',
    },
  },
})
