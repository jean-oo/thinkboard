import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Avoid "Invalid hook call" caused by multiple React copies
    dedupe: ['react', 'react-dom'],
  },
})
