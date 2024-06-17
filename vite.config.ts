import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @use 'sass:color';
          @use 'sass:map';
          @import './src/assets/scss/_variables.scss';
          @import './src/assets/scss/_mixins.scss';
          @import './src/assets/scss/_functions.scss';
        `,
      },
    },
  },
})
