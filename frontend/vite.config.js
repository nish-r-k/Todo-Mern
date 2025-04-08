import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:5000,
    allowedHosts:["todo-mern-6ogu.onrender.com"]
  },
})
