import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/collapsible-text.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
