import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * 类型定义
 */

import { mount as requestMount } from '@/request'
import useStore from '@/store'
requestMount(app, {
    baseURL: '',
    useStore: useStore
})

import { mount as apiMount } from '@/api'
apiMount(app)

declare global {
    interface Window {
        store: {
            index: ReturnType<typeof useStore>
        }
    }
}

import router from './router'
app.use(router)

router.beforeEach((to, from, next) => {
    const store = useStore()
    if (!store.token) store.token = localStorage.getItem('token') || ''
    if (!store.token && to.name !== 'login') {
        next('./login')
        return
    }
    console.log('路由')
    next()
})

import { createPinia } from 'pinia'
app.use(createPinia())

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/normalize.css'

app.use(ElementPlus)
app.mount('#app')
