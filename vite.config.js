import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@emotion/styled': '@emotion/styled',
      '@emotion/react': '@emotion/react',
    }
  },
  base: "portfolio-auf-santosh/",
  optimizeDeps: {
    include: ['@material-tailwind/react'],
  },
})
