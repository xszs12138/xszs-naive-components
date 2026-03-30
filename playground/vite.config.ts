import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: './auto-imports.d.ts',
    }),
  ],
})
