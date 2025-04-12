import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(), // ✅ Chỉ cần thế này là đủ cho "use client"
  ],
})
