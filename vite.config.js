import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  name: 'typescript',
      // enable type checking for .jsx files
      // you can also add other file extensions here
      // such as .tsx, .ts, etc.
  enableJsx: true,
  plugins: [react()],
})
