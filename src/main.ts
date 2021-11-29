import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * 类型定义
 */

import request, { requestAll, download } from '@/request'
import api from '@/api'

app.config.globalProperties.axios = request
app.config.globalProperties.requestAll = requestAll
app.config.globalProperties.download = download
app.config.globalProperties.api = api

app.config.globalProperties.$store = {}

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        axios: typeof request;
        download: typeof download;
        requestAll: typeof requestAll;
        api: typeof api;
    }
}

import useStore from '@/store/index'

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        $store: {
            index: ReturnType<typeof useStore>
        }
    }
}

declare global {
    interface Window {
        store: {
            index: ReturnType<typeof useStore>
        }
    }
}

import router from "./router"
app.use(router)

router.beforeEach((to, from, next) => {
    console.log('路由')
    next()
})

import { createPinia } from 'pinia'
app.use(createPinia())

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
app.mount('#app')
