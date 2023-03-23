import react from '@vitejs/plugin-react'
import { AliasOptions, defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { tscPlugin } from 'vite-plugin-tsc-watch'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tscPlugin(),
    svgr({
      exportAsDefault: false
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
    }
  },
  appType: 'spa'
})
