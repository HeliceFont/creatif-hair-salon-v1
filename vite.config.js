import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Cambia 'dist' a 'build'
  },
  base: '/creatif-hair-salon-v1/',
  plugins: [react()],
   
})
