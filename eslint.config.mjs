import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  vue: true,
  pnpm: true,
  typescript: true,
  ignores: ['**/dist/**', '**/node_modules/**'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
  },
})
