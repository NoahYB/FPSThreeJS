// vite.config.js
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  let base ='/FPSThreeJS/'
  if (mode === 'development') {
    base = undefined;
  }
  return defineConfig({
      base: base,
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
      }
    }
  )
}
