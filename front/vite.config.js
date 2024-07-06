import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath,URL} from 'node:url' 
import { config } from 'node:process'
import { resolve } from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":fileURLToPath(new URL('./src',import.meta.url)),
    },
  },
  plugins: [vue()],
})
