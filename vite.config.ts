import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
    NaiveUiResolver,
    VantResolver,
} from 'unplugin-vue-components/resolvers';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { htmlTransform } from './src/utils/vite/html-transform';
import { rem, remPreset } from 'vite-plugin-fz';
import baseConfig from './src/config/base';
import legacy from '@vitejs/plugin-legacy';
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
import preprocessorPreset from 'wp-preprocessor/dist/preset';
import requestPreset from 'wp-request/dist/preset';
import AutoApi from 'vitejs-plugin-api-auto-import';
import UnoCSS from 'unocss/vite';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const md5 = require('md5');

// https://vitejs.dev/config/
export default defineConfig({
    base: baseConfig.base,
    plugins: [
        UnoCSS(),
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/icons')],
            symbolId: 'icon-[dir]-[name]',
            svgoOptions: {
                full: true,
            },
        }),
        vueJsx(),
        viteCommonjs(),
        vueSetupExtend(),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                preprocessorPreset,
                requestPreset,
                remPreset,
                {
                    '@/api': ['api'],
                },
                // presets
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia',
            ],
            dirs: ['./src/views/scene/lib/**'],
            eslintrc: {
                enabled: true,
            },
        }),
        Components({
            resolvers: [
                NaiveUiResolver(),
                VantResolver(),
                [
                    function (name) {
                        if (/^.{1,}3d$/.test(name)) {
                            return {
                                name: 'default',
                                from: `@/views/scene/components/${name.replace(
                                    /3d$/,
                                    ''
                                )}.vue`,
                            };
                        }
                    },
                ],
            ],
        }),
        htmlTransform(),
        rem(),
        legacy({
            targets: ['defaults', 'not IE 11'],
            /**
             * For chrome >= 61
             * global-this is vaild from chrome 70
             */
            modernPolyfills: ['es.global-this', 'es.array.flat'],
        }),
        AutoApi({
            resolveAliasName: '@/api/apis',
            dir: 'src/api/apis',
        }),
        AutoApi({
            resolveAliasName: '@/data',
            dir: 'src/data',
            name: '$data',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    build: {
        target: 'es2015',
        chunkSizeWarningLimit: 5000,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: !baseConfig.filenameHash
                ? {}
                : {
                      chunkFileNames: (chunkInfo) => {
                          const newFileName = md5(
                              (chunkInfo.facadeModuleId || chunkInfo.name)
                                  .replace(__dirname, '')
                                  .replace(/\/|\\|\./g, '-')
                          );
                          return `assets/chunk-${newFileName.slice(0, 8)}.js`;
                      },
                      assetFileNames(chunkInfo) {
                          const newFileName = md5(
                              (chunkInfo.name || '')
                                  .replace(__dirname, '')
                                  .replace(/\/|\\|\./g, '-')
                          );
                          return `assets/${newFileName.slice(0, 8)}.[ext]`;
                      },
                      entryFileNames(chunkInfo) {
                          const newFileName = md5(
                              (chunkInfo.facadeModuleId || chunkInfo.name)
                                  .replace(__dirname, '')
                                  .replace(/\/|\\|\./g, '-')
                          );
                          return `assets/entry-${newFileName.slice(0, 8)}.js`;
                      },
                  },
        },
    },
    server: {
        host: '0.0.0.0',
        hmr: {
            overlay: false,
        },
    },
    optimizeDeps: {
        include: [
            'naive-ui',
            'vite-plugin-fz',
            'wp-request',
            // 'wp-preprocessor',
            'wp-utils',
            'tthreebsp',
        ],
    },
});
