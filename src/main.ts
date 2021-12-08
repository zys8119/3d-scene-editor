import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * 类型定义
 */

import { mount as requestMount } from 'wp-request'
import useStore from '@/store/main'
requestMount(app, {
    baseURL: '',
    afterEach(config, data) {
        if (!config) return
        const store = useStore()
        store.requestResults[`${(config.method || 'get').toUpperCase()}@${config.url}}`] = data
    },
    successField: 'success',
    useStore
})

import api from '@/api'
app.use(api)

import '@/router/permission'

import router from './router'
app.use(router)

import { createPinia } from 'pinia'
app.use(createPinia())
/**
 * store 一定要在 createPinia 之后
 */
import stores from '@/store'
app.use(stores)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/normalize.css'
app.use(ElementPlus)

app.mount('#app')
