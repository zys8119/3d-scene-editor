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
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import validatePreset from 'wp-validate/dist/preset'
import preprocessorPreset from 'wp-preprocessor/dist/preset'
import requestPreset from 'wp-request/dist/preset'

// https://vitejs.dev/config/
export default defineConfig({
    base: baseConfig.base,
    plugins: [
        vue(),
        vueJsx(),
        viteCommonjs(),
        vueSetupExtend(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                validatePreset,
                preprocessorPreset,
                requestPreset,
                // presets
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia'
            ],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass'
                }),
                WisdomPlusResolver()
            ]
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass'
                }),
                WisdomPlusResolver()
            ]
        }),
        htmlTransform(),
        legacy({
            targets: ['defaults', 'not IE 11'],
            /**
             * For chrome >= 61
             * global-this is vaild from chrome 70
             */
            modernPolyfills: ['es.global-this', 'es.array.flat']
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "./src/assets/scss/overrides.scss" as *;',
            },
        },
        postcss: {
            plugins: [
                {
                postcssPlugin: 'internal:charset-removal',
                AtRule: {
                    charset: (atRule) => {
                    if (atRule.name === 'charset') {
                        atRule.remove()
                    }
                    }
                }
                }
            ],
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
