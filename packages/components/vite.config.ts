import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: true,
      include: ['index.ts', '**/*.ts', '**/*.vue'],
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'XszsNaiveComponents',
      fileName: format => `xszs-naive-components.${format}.js`,
    },
    rolldownOptions: {
      external: ['vue', 'naive-ui'],
    },
  },
})
