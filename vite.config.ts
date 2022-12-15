import { defineConfig } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { WisdomPlusResolver } from './src/resolver'
import { ElementPlusResolver, NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { htmlTransform } from './src/utils'
import { rem, remPreset } from 'vite-plugin-fz'
import baseConfig from './src/config/base'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus'
import validatePreset from 'wp-validate/dist/preset'
import preprocessorPreset from 'wp-preprocessor/dist/preset'
import requestPreset from 'wp-request/dist/preset'
import { Resolver } from 'unplugin-auto-import/types'
import { resolver as WpAlertResolver} from 'wp-alert/resolver'
import md5 from 'md5'

// https://vitejs.dev/config/
export default defineConfig({
    base: baseConfig.base,
    plugins: [
        vue(),
        viteSvgIcons({
            iconDirs: [path.resolve(process.cwd(), 'src/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
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
                remPreset,
                {
                    '@/api': [
                        'api'
                    ]
                },
                // presets
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia'
            ],
            resolvers: [
                WpAlertResolver(),
                WisdomPlusResolver() as Resolver[],
                ElementPlusResolver()
            ]
        }),
        Components({
            resolvers: [
                WpAlertResolver(),
                WisdomPlusResolver(),
                ElementPlusResolver(),
                NaiveUiResolver()
            ]
        }),
        htmlTransform(),
        rem(),
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
        chunkSizeWarningLimit: 5000,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: !baseConfig.filenameHash ? {} : {
                chunkFileNames: (chunkInfo) => {
                    const newFileName = md5((chunkInfo.facadeModuleId || chunkInfo.name).replace(__dirname, '').replace(/\/|\\|\./g, '-'))
                    return `assets/chunk-${newFileName.slice(0, 8)}.js`
                },
                assetFileNames(chunkInfo) {
                    const newFileName = md5((chunkInfo.name || '').replace(__dirname, '').replace(/\/|\\|\./g, '-'))
                    return `assets/${newFileName.slice(0, 8)}.[ext]`
                },
                entryFileNames(chunkInfo) {
                    const newFileName = md5((chunkInfo.facadeModuleId || chunkInfo.name).replace(__dirname, '').replace(/\/|\\|\./g, '-'))
                    return `assets/entry-${newFileName.slice(0, 8)}.js`
                }
            }
        }
    },
    server: {
        port: 8888,
        hmr: {
            overlay: false
        }
    }
})
