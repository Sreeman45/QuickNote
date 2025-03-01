import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
     '/users':'http://localhost:3000',
     '/data':'http://localhost:3000'
    },
   
  },
  plugins: [react()], resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
