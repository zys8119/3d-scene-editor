import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * 类型定义
 */

import { mount as requestMount } from 'wp-request'
import useStore from '@/store'
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

import { mount as apiMount } from '@/api'
apiMount(app)

import '@/router/permission'

import router from './router'
app.use(router)

import { createPinia } from 'pinia'
app.use(createPinia())

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/normalize.css'

app.use(ElementPlus)

app.mount('#app')
