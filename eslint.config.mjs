import typescript from '@typescript-eslint/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: {
    'simple-import-sort': simpleImportSort,
    '@typescript-eslint': typescript
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'vue/multi-word-component-names': 'off',
    'no-console': 'error',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'no-debugger': 'error'
  }
})
