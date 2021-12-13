import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        vue(),
        vueJsx()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    build: {
        target: 'es2015'
    },
    server: {
        port: 8888,
        hmr: {
            overlay: false
        }
    }
})
