import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/creatif-hair-salon-v1/',
  plugins: [react()],
   // build: {
   //   outDir: 'build', // Ruta de salida personalizada
   // },
})
