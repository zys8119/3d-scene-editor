import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { WisdomPlusResolver } from './src/resolver'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { htmlTransform } from './src/utils'
import baseConfig from './src/config/base'

// https://vitejs.dev/config/
export default defineConfig({
    base: baseConfig.base,
    plugins: [
        vue(),
        vueJsx(),
        viteCommonjs(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                // presets
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia'
            ],
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                WisdomPlusResolver()
            ]
        }),
        htmlTransform()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    build: {
        target: 'es2015',
        chunkSizeWarningLimit: 5000
    },
    server: {
        port: 8888,
        hmr: {
            overlay: false
        }
    }
})
