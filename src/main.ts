import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * 请求初始化
 */
import request from 'wp-request'
import config from './config/config'
import configHooks from './config/configHooks'
app.use(request, {
    ...config.request,
    ...configHooks.request
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
