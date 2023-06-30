// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/FPSThreeJS/',
  assetsInclude: ['**/*.gltf','**/*.fbx','**/*.jpg'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'src/index.html'),
        contact: resolve(__dirname, 'src/Pages/contact.html'),
        donation: resolve(__dirname, 'src/Pages/donationinfo.html'),
        serverselection: resolve(__dirname, 'src/Pages/serverselection.html'),
      },
    },
  },
})
