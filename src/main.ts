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
    useStore
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
    /**
     * localStorage 检查是否有 token
     * 有的话说明是第一次访问页面，则调用 getUserInfo 获取用户信息
     */
    if (!store.token) {
        store.token = localStorage.getItem('token') || ''
        if (store.token) store.getUserinfo()
    }
    /**
     * 如果仍然拿不到 token，这里排除 login 避免无限循环
     */
    if (!store.token && to.name !== 'login') {
        next({ name: 'login' })
        return
    }
    console.log('路由跳转')
    next()
})

import { createPinia } from 'pinia'
app.use(createPinia())

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/normalize.css'

app.use(ElementPlus)
app.mount('#app')
