import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // __dirname ini adalah directory project kita atau enigma-shop-react-prep
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src')
    }
  }
})
