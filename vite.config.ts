import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteRsw } from 'vite-plugin-rsw'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  base: './',
  plugins: [
    ViteRsw(),
    eslintPlugin({
      include: [
        'src/**/*.js',
        'src/*.js',
        'src/**/*.jsx',
        'src/*.jsx',
        'src/**/*.ts',
        'src/*.ts',
        'src/**/*.tsx',
        'src/*.tsx',
        'vite.config.ts',
        '.eslintrc.cjs'
      ]
    }),
    react()
  ]
})
