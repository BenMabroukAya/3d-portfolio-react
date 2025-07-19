import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/3d-portfolio-react/',   // <== add this
  plugins: [react()],
})
