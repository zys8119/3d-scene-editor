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

import errorHandle from './error'
app.use(errorHandle, {
    errorHandler: configHooks.error.handle
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

import '@/assets/css/normalize.css'

import Obsession from 'obsession-ui'
import 'obsession-ui/lib/index.css'
app.use(Obsession)

app.mount('#app')
