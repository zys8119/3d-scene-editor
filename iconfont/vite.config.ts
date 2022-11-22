import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
    plugins:[
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        jsx(),
    ],
    server:{
        port:3002
    }
})
